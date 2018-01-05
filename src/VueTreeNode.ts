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
import { EventType, VueTreeValueChangedEvent } from '@/events'

export default Vue.extend({
  name: 'VueTreeNode',
  props,
  data: function () {
    return {
      childrenError: null as any,
      childrenLoading: false as boolean,
      childrenLoaded: false as boolean,
      childrenNodes: null as TreeNode[] | null | undefined,

      dataOpened: getPropertyValue(this.data, this.opened,
        () => getFirstValue(this.openedDefault, (this.$parent as any).dataOpened, true)) as boolean,
      dataHidden: getPropertyValue(this.data, this.hidden,
        () => getFirstValue(this.hiddenDefault, (this.$parent as any).dataHidden, false)) as boolean,
      dataSelectable: getPropertyValue(this.data, this.selectable,
        () => getFirstValue(this.selectableDefault, (this.$parent as any).dataSelectable, false)) as boolean,
      dataSelected: getPropertyValue(this.data, this.selected,
        () => getFirstValue(this.selectedDefault, (this.$parent as any).dataSelected, false) as boolean)
    }
  },
  mounted () {
    if (this.dataOpened) {
      this.loadChildrenIfRequired(this.dataOpened, !this.dataOpened, false)
    }
  },
  watch: {
    dataOpened: function (value: boolean, oldValue: boolean) {
      this.loadChildrenIfRequired(value, oldValue)
    },
    opened: function (opened: PropertyMapper<boolean> | PropertyGetter<boolean> | String | boolean) {
      this.dataOpened = getPropertyValue(this.data, opened,
        () => getFirstValue(this.openedDefault, (this.$parent as any).dataOpened, true))
    },
    hidden: function (hidden: PropertyGetter<boolean> | String | boolean) {
      this.dataHidden = getPropertyValue(this.data, hidden,
        () => getFirstValue(this.hiddenDefault, (this.$parent as any).dataHidden, false))
    },
    selectable: function (selectable: PropertyGetter<boolean> | String | boolean) {
      this.dataSelectable = getPropertyValue(this.data, selectable,
        () => getFirstValue(this.selectableDefault, (this.$parent as any).dataSelectable, false))
    },
    dataSelected: function (value: boolean, oldValue: boolean) {
      this.applyDataSelected(value, oldValue)
    },
    selected: function (selected: PropertyMapper<boolean> | PropertyGetter<boolean> | String | boolean) {
      this.dataSelected = getPropertyValue(this.data, selected,
        () => getFirstValue(this.selectedDefault, (this.$parent as any).dataSelected, false))
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
          this.loadChildrenSync()
        }
        return !this.childrenNodes || this.childrenNodes.length <= 0
      }
      return this.dataLeafFromProperty
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
        opened: this.dataOpened,
        selectable: this.dataSelectable,
        selected: this.dataSelected,
        loading: this.childrenLoading,
        error: this.childrenError
      }
    }
  },
  methods: {
    applyDataOpened (value: boolean, oldValue: boolean, emitEvent = true) {
      setPropertyValue(this.data, this.opened, value)

      if (emitEvent) {
        this.$emit(EventType.opened.toString(), {
          vm: this,
          data: this.data,
          value,
          oldValue,
          type: EventType.opened
        } as VueTreeValueChangedEvent<boolean>)
      }
    },
    applyDataSelected (value: boolean, oldValue: boolean, emitEvent = true) {
      setPropertyValue(this.data, this.selected, value)

      if (emitEvent) {
        this.$emit(EventType.selected.toString(), {
          vm: this,
          data: this.data,
          value,
          oldValue,
          type: EventType.selected
        } as VueTreeValueChangedEvent<boolean>)
      }
    },
    handleClicked () {
      if (!this.dataLeaf) {
        this.dataOpened = !this.dataOpened
      }
    },
    loadChildrenIfRequired (value: boolean, oldValue: boolean, emitEvent = true) {
      if (value && !this.childrenNodes) {
        if (this.childrenAsync) {
          return this.loadChildrenAsync().then(() => {
            this.applyDataOpened(value, oldValue, emitEvent)
          })
        } else {
          this.loadChildrenSync()
          this.applyDataOpened(value, oldValue, emitEvent)
        }
      } else {
        this.applyDataOpened(value, oldValue, emitEvent)
      }
    },
    loadChildrenSync (): TreeNode[] | null | undefined {
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
