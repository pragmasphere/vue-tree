import { defaultRootNode, defaultTreeNodeChildrenLoader } from '@/defaults'

export default {
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
  hidden: { // PropertyGetter<boolean> | String | boolean
    type: [Function, String, Boolean],
    default: function () {
      return false
    }
  },
  selectable: {
    type: [Function, String, Boolean], // PropertyGetter<boolean> | String | boolean
    default: function () {
      return false
    }
  },
  selected: { // PropertyMapper<boolean> | PropertyGetter<boolean> | String | boolean
    type: [Object, Function, String, Boolean],
    default: function () {
      return false
    }
  },
  theme: { // Theme | string
    type: [Object, String],
    default: function () {
      return 'vanilla'
    }
  }
}
