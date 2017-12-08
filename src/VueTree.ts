import Vue from 'vue'

import VueTreeNode from '@/VueTreeNode.vue'
import { defaultRootNode, defaultTreeNodeChildrenLoader } from '@/defaults'

export default Vue.extend({
  name: 'VueTree',
  components: {
    VueTreeNode
  },
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
    rootHidden: { // boolean
      type: Boolean,
      default: false
    }
  }
})
