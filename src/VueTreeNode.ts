import Vue from 'vue'

import props from './props'
import {
  AsyncTreeNodeChildrenLoader, PropertyGetter, PropertyMapper, TreeNode,
  TreeNodeChildrenLoader
} from './vue-tree-types'
import { isObject, isString, getPropertyValue } from '@/utils'
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
      dataOpened: false as boolean,
      dataHidden: false as boolean
    }
  },
  watch: {
    opened: {
      immediate: true,
      handler: function (opened: PropertyMapper<boolean> | PropertyGetter<boolean> | String | boolean) {
        this.computedOpened = getPropertyValue(this.data, opened, true)
      }
    },
    hidden: {
      immediate: true,
      handler: function (hidden: PropertyGetter<boolean> | String | boolean) {
        this.dataHidden = getPropertyValue(this.data, hidden, false)
      }
    },
    dataOpened: function (opened: boolean) {
      if (isString(this.opened)) {
        this.data[this.opened as string] = opened
      } else if (isObject(this.opened) && 'set' in this.opened) {
        const openedAccessor = this.opened as PropertyMapper<boolean>
        openedAccessor.set(this.data, opened)
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
              this.dataOpened = opened
            })
          } else {
            this.loadChildren()
            this.dataOpened = opened
          }
        } else {
          this.dataOpened = opened
        }
      }
    },
    themeInstance (): Theme {
      if (typeof this.theme === 'string') {
        let themeInstance = theme.get(this.theme)
        if (!themeInstance) {
          themeInstance = theme.getVanilla()
        }
        return themeInstance
      }
      return this.theme
    },
    themeContext (): ThemeContext {
      return {
        vm: this,
        node: this.data,
        hidden: this.dataHidden,
        label: this.dataLabel,
        leaf: this.dataLeaf,
        opened: this.computedOpened,
        loading: this.childrenLoading,
        error: this.childrenError
      }
    }
  },
  methods: {
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
