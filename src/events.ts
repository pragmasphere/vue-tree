import { TreeNode } from '@/vue-tree-types'

export enum EventType {
  opened = 'opened',
  loading = 'loading',
  selected = 'selected'
}

export interface VueTreeEvent {
  type: EventType
  vm: any // TODO: Create Type matching VueTreeNode component
  data: TreeNode
}

export interface VueTreeValueChangedEvent<T> extends VueTreeEvent {
  value: T
  oldValue: T
}
