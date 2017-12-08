import Vue from 'vue'
import Component from 'vue-class-component'

import VueTreeNode from '@/VueTreeNode.vue'
import { Prop } from 'vue-property-decorator'
import { defaultRootNode, defaultTreeNodeChildrenLoader } from '@/defaults'
import {
  AsyncTreeNodeChildrenLoader, PropertyGetter, PropertyMapper, TreeNode,
  TreeNodeChildrenLoader
} from '@/vue-tree-types'

@Component({
  components: { VueTreeNode }
})
export default class VueTree extends Vue {
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

  @Prop({
    type: Boolean, default: false
  })
  rootHidden: boolean
}
