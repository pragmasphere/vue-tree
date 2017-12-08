import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Watch } from 'vue-property-decorator'

import {
  AsyncTreeNodeChildrenLoader,
  PropertyGetter,
  PropertyMapper,
  TreeNode,
  TreeNodeChildrenLoader
} from './vue-tree-types'
import { isObject, isString, isFunction } from '@/utils'
import { defaultRootNode, defaultTreeNodeChildrenLoader } from '@/defaults'

@Component
export default class VueTreeNode extends Vue {
  @Prop({
    type: Object, default: function () {
      return defaultRootNode
    }
  })
  value: TreeNode

  @Prop({ type: [Function, String], default: defaultTreeNodeChildrenLoader })
  children: TreeNodeChildrenLoader | AsyncTreeNodeChildrenLoader | string

  @Prop({ type: Boolean, default: false })
  childrenAsync: boolean

  @Prop({ type: [Function, String], default: 'label' })
  label: PropertyGetter<String> | String

  @Prop({ type: [Function, String], default: 'leaf' })
  leaf: PropertyGetter<boolean> | String

  @Prop({
    type: [Object, Function, String, Boolean], default: function () {
      return true
    }
  })
  opened: PropertyMapper<boolean> | PropertyGetter<boolean> | String | boolean

  @Prop({ type: Boolean, default: false })
  hidden: boolean

  childrenError: any = null
  childrenLoading: boolean = false
  childrenLoaded: boolean = false
  childrenNodes: TreeNode[] = null

  dataOpened: boolean = false

  @Watch('opened', { immediate: true })
  onOpenedChanged (opened: PropertyMapper<boolean> | PropertyGetter<boolean> | String | Boolean) {
    if (opened === true) {
      this.computedOpened = opened as boolean
    } else if (isString(opened)) {
      this.computedOpened = this.value[opened as string] === true
    } else if (isObject(opened) && 'get' in opened) {
      const openedAccessor = opened as PropertyMapper<boolean>
      this.computedOpened = openedAccessor.get(this.value)
    } else if (isFunction(opened)) {
      const openedGetter = opened as PropertyGetter<boolean>
      this.computedOpened = openedGetter(this.value)
    }
  }

  get childrenFunction (): TreeNodeChildrenLoader {
    if (isString(this.children)) {
      const vm = this
      function namedLoader (parent) { return parent[vm.children as string] }
      return namedLoader
    }
    return this.children as TreeNodeChildrenLoader
  }

  get childrenAsyncFunction (): AsyncTreeNodeChildrenLoader {
    return this.children as AsyncTreeNodeChildrenLoader
  }

  loadChildren () {
    let loader = this.childrenFunction
    this.childrenNodes = loader(this.value)
  }

  loadChildrenAsync () {
    this.childrenLoading = true
    this.childrenError = null

    const loader = this.childrenAsyncFunction
    let promise = loader(this.value)
    if (!promise) {
      promise = Promise.resolve(undefined as TreeNode[])
    }
    return promise.then((children) => {
      this.childrenNodes = children
      this.childrenLoading = false
      this.childrenLoaded = true
    }).catch((error) => {
      this.childrenNodes = null
      this.childrenError = error
      this.childrenLoading = false
      this.childrenLoaded = false
    })
  }

  get valueLabel (): string {
    if (isString(this.label)) {
      return this.value[this.label as string]
    } else {
      return (this.label as PropertyGetter<string>)(this.value)
    }
  }

  get valueLeaf (): boolean {
    if (!this.childrenAsync) {
      if (!this.childrenLoaded) {
        this.loadChildren()
      }
      return !this.childrenNodes || this.childrenNodes.length <= 0
    }
    if (isString(this.leaf)) {
      return this.value[this.leaf as string]
    } else {
      return (this.leaf as PropertyGetter<boolean>)(this.value)
    }
  }

  get computedOpened (): boolean {
    return this.dataOpened
  }

  set computedOpened (opened: boolean) {
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
    this.$emit('opened', this.value)
  }

}
