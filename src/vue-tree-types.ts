export interface TreeNode {
  children?: TreeNode[]
  label?: string
  opened?: boolean
  leaf?: boolean
  selectable?: boolean
  selected?: boolean
}

export interface PropertyGetter<T> {
  (node: TreeNode): T
}

export interface PropertyMapper<T> {
  get (node: TreeNode): T
  set (node: TreeNode, value: T): void
}

export interface AsyncTreeNodeChildrenLoader {
  (parent: TreeNode): Promise<TreeNode[]|null|undefined>
}

export interface TreeNodeChildrenLoader {
  (parent: TreeNode): TreeNode[]|null|undefined
}

export interface TreeNodeEvent {
  treeNode: TreeNode
}
