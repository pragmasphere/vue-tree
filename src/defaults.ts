import { TreeNode } from '@/vue-tree-types'

export function defaultTreeNodeChildrenLoader (parent: TreeNode): TreeNode[]|null|undefined {
  return parent.children
}

export const defaultRootNode = {
  label: 'Vue Tree',
  children: [{
    label: 'Category #1', children: [
      { label: 'Item #1' },
      { label: 'Item #2' },
      { label: 'Item #3' }
    ]
  },
    {
      label: 'Category #2', children: [
        { label: 'Item #A' },
        { label: 'Item #B' },
        { label: 'Item #C' }
      ]
    }]
}
