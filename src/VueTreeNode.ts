import Vue from 'vue'

import props from './props'
import {
  AsyncTreeNodeChildrenLoader,
  PropertyGetter,
  PropertyMapper,
  TreeNode,
  TreeNodeChildrenLoader
} from './vue-tree-types'
import { getFirstValue, getPropertyValue, isString, setPropertyValue } from '@/utils'
import theme, { Theme, ThemeContext } from '@/theme'

export default Vue.extend({
  name: 'VueTreeNode',
  props: props,
  data: function () {
    return {
      childrenError: null as any,
      childrenLoading: false as boolean,
      childrenLoaded: false as boolean,
      childrenNodes: null as TreeNode[] | null | undefined,
      dataOpened: getFirstValue(this.openedDefault, (this.$parent as any).computedOpened, true) as boolean,
      dataHidden: getFirstValue(this.hiddenDefault, (this.$parent as any).dataHidden, false) as boolean,
      dataSelectable: getFirstValue(this.selectableDefault, (this.$parent as any).dataSelectable, false) as boolean,
      dataSelected: getFirstValue(this.selectedDefault, (this.$parent as any).dataSelected, false) as boolean
    }
  },
  watch: {
    opened: {
      immediate: true,
      handler: function (opened: PropertyMapper<boolean> | PropertyGetter<boolean> | String | boolean) {
        this.computedOpened = getPropertyValue(this.data, opened,
          () => getFirstValue(this.openedDefault, (this.$parent as any).computedOpened, true))
      }
    },
    hidden: {
      immediate: true,
      handler: function (hidden: PropertyGetter<boolean> | String | boolean) {
        this.dataHidden = getPropertyValue(this.data, hidden,
          () => getFirstValue(this.hiddenDefault, (this.$parent as any).dataHidden, false))
      }
    },
    selectable: {
      immediate: true,
      handler: function (selectable: PropertyGetter<boolean> | String | boolean) {
        this.dataSelectable = getPropertyValue(this.data, selectable,
          () => getFirstValue(this.selectableDefault, (this.$parent as any).dataSelectable, false))
      }
    },
    dataSelected: function (selected: boolean) {
      this.setDataSelected(selected)
    },
    selected: {
      immediate: true,
      handler: function (selected: PropertyMapper<boolean> | PropertyGetter<boolean> | String | boolean) {
        this.dataSelected = getPropertyValue(this.data, selected,
          () => getFirstValue(this.selectedDefault, (this.$parent as any).dataSelected, false))
      }
    }
  },
  computed: {
    childrenFunction: function (): TreeNodeChildrenLoader {
      if (isString(this.children)) {
        const vm = this

        function namedLoader (parent: any) { // tslint:disable-line no-inner-declarations
          return parent[vm.children as string]
        }

        return namedLoader
      }
      return this.children as TreeNodeChildrenLoader
    },
    childrenAsyncFunction: function (): AsyncTreeNodeChildrenLoader {
      return this.children as AsyncTreeNodeChildrenLoader
    },
    dataLabel: function (): string {
      if (isString(this.label)) {
        return this.data[this.label as string]
      } else {
        return (this.label as PropertyGetter<string>)(this.data)
      }
    },
    dataLeafFromProperty (): boolean {
      if (isString(this.leaf)) {
        return this.data[this.leaf as string]
      } else {
        return (this.leaf as PropertyGetter<boolean>)(this.data)
      }
    },
    dataLeaf (): boolean {
      if (!this.childrenAsync) {
        if (!this.childrenLoaded) {
          this.loadChildren()
        }
        return !this.childrenNodes || this.childrenNodes.length <= 0
      }
      return this.dataLeafFromProperty
    },
    computedOpened: {
      get: function (): boolean {
        return this.dataOpened
      },
      set: function (opened: boolean) {
        if (opened && !this.childrenNodes) {
          if (this.childrenAsync) {
            this.loadChildrenAsync().then(() => {
              this.setDataOpened(opened)
            })
          } else {
            this.loadChildren()
            this.setDataOpened(opened)
          }
        } else {
          this.setDataOpened(opened)
        }
      }
    },
    themeInstance (): Theme {
      return theme.get(this.theme)
    },
    themeContext (): ThemeContext {
      return {
        vm: this,
        node: this.data,
        hidden: this.dataHidden,
        label: this.dataLabel,
        leaf: this.dataLeaf,
        opened: this.computedOpened,
        selectable: this.dataSelectable,
        selected: this.dataSelected,
        loading: this.childrenLoading,
        error: this.childrenError
      }
    }
  },
  methods: {
    setDataOpened (opened: boolean) {
      this.dataOpened = opened
      setPropertyValue(this.data, this.opened, opened)
    },
    setDataSelected (selected: boolean) {
      this.dataSelected = selected
      setPropertyValue(this.data, this.selected, selected)
    },
    handleClicked () {
      if (!this.dataLeaf) {
        this.computedOpened = !this.computedOpened
      }
    },
    loadChildren (): TreeNode[] | null | undefined {
      if (this.dataLeafFromProperty) {
        return undefined
      }

      let loader = this.childrenFunction
      this.childrenNodes = loader(this.data)
      return this.childrenNodes
    },
    loadChildrenAsync (): Promise<TreeNode[] | null | undefined> {
      if (this.dataLeafFromProperty) {
        return Promise.resolve() as Promise<undefined>
      }

      this.childrenLoading = true
      this.childrenError = null

      const loader = this.childrenAsyncFunction
      let promise = loader(this.data)
      if (!promise) {
        promise = Promise.resolve(null)
      }

      return promise.then((children) => {
        this.childrenNodes = children
        this.childrenLoading = false
        this.childrenLoaded = true
        return children
      }).catch((error) => {
        this.childrenNodes = null
        this.childrenError = error
        this.childrenLoading = false
        this.childrenLoaded = false
        throw error
      })
    }
  }
})
