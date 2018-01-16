import VueTreeNode from './VueTreeNode.vue'
import { TreeNode } from '@/vue-tree-types'

export enum EventType {
  opened = 'opened',
  loading = 'loading',
  selected = 'selected'
}

export interface VueTreeEvent {
  type: EventType
  vm: VueTreeNode
  data: TreeNode
}

export interface VueTreeValueChangedEvent<T> extends VueTreeEvent {
  value: T
  oldValue: T
}
