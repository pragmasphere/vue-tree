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
  hidden: { // PropertyGetter<boolean> | String | boolean
    type: [Function, String, Boolean],
    default: function () {
      return false
    }
  },
  hiddenDefault: { // boolean
    type: Boolean,
    default: false
  },
  opened: { // PropertyMapper<boolean> | PropertyGetter<boolean> | String | boolean
    type: [Object, Function, String, Boolean],
    default: function () {
      return true
    }
  },
  openedDefault: { // boolean
    type: Boolean,
    default: true
  },
  selectable: {
    type: [Function, String, Boolean], // PropertyGetter<boolean> | String | boolean
    default: function () {
      return false
    }
  },
  selectableDefault: { // boolean
    type: Boolean,
    default: false
  },
  selected: { // PropertyMapper<boolean> | PropertyGetter<boolean> | String | boolean
    type: [Object, Function, String, Boolean],
    default: function () {
      return false
    }
  },
  selectedDefault: { // boolean
    type: Boolean,
    default: false
  },
  theme: { // Theme | string
    type: [Object, String],
    default: function () {
      return 'vanilla'
    }
  }
}
