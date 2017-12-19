<template>
  <ul class="vue-tree">
    <vue-tree-node class="vue-tree__root"
                   :data="data"
                   :children-async="childrenAsync"
                   :children="children"
                   :hidden="rootHidden"
                   :opened="opened"
                   :label="label"
                   :leaf="leaf"></vue-tree-node>
  </ul>
</template>
<style lang="scss">
  ul.vue-tree {
    margin: 0 0 0 -1em;
    padding: 0;
  }

  .vue-tree {
    ul, li {
      list-style: none;

      margin: 0;
      padding: 0;
    }

    li.vue-tree__tree-node--hidden {
      margin-left: 0;
    }

    li {
      margin-left: 1em;
    }
  }
</style>
<script lang="ts">
  import Vue from 'vue'

  import VueTreeNode from '@/VueTreeNode.vue'
  import { defaultRootNode, defaultTreeNodeChildrenLoader } from '@/defaults'

  export default Vue.extend ({
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
</script>
