import Vue from 'vue'

import {
  AsyncTreeNodeChildrenLoader, PropertyGetter, PropertyMapper, TreeNode,
  TreeNodeChildrenLoader
} from './vue-tree-types'
import { isFunction, isObject, isString } from '@/utils'
import { defaultRootNode, defaultTreeNodeChildrenLoader } from '@/defaults'
import theme, { Theme, ThemeContext } from '@/theme'

export default Vue.extend({
  name: 'VueTreeNode',
  props: {
    data: { // TreeNode
      type: Object,
      default: function () {
        return defaultRootNode
      }
    },
    children: { // TreeNodeChildrenLoader | AsyncTreeNodeChildrenLoader | string
      type: [Function, String],
      default: defaultTreeNodeChildrenLoader
    },
    childrenAsync: { // boolean
      type: Boolean,
      default: false
    },
    label: { // PropertyGetter<String> | String
      type: [Function, String],
      default: 'label'
    },
    leaf: { // PropertyGetter<boolean> | String
      type: [Function, String],
      default: 'leaf'
    },
    opened: { // PropertyMapper<boolean> | PropertyGetter<boolean> | String | boolean
      type: [Object, Function, String, Boolean],
      default: function () {
        return true
      }
    },
    hidden: { // boolean
      type: Boolean,
      default: false
    },
    theme: { // Theme | string
      type: [Object, String],
      default: () => 'vanilla'
    }
  },
  data: function () {
    return {
      childrenError: null as any,
      childrenLoading: false as boolean,
      childrenLoaded: false as boolean,
      childrenNodes: null as TreeNode[] | null | undefined,
      dataOpened: false as boolean
    }
  },
  watch: {
    opened: {
      immediate: true,
      handler: function (opened: PropertyMapper<boolean> | PropertyGetter<boolean> | String | Boolean) {
        if (opened === true) {
          this.computedOpened = opened as boolean
        } else if (isString(opened)) {
          this.computedOpened = this.data[opened as string] === true
        } else if (isObject(opened) && 'get' in opened) {
          const openedAccessor = opened as PropertyMapper<boolean>
          this.computedOpened = openedAccessor.get(this.data)
        } else if (isFunction(opened)) {
          const openedGetter = opened as PropertyGetter<boolean>
          this.computedOpened = openedGetter(this.data)
        }
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
        this.$emit('opened', this.data)
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
