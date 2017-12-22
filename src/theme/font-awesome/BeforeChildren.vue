<template>
  <span class="vue-tree__theme-before-children--font-awesome">
    <li class="vue-tree__tree-node-status-message vue-tree__tree-node-status-message--loading" v-if="loading">
      <span class="vue-tree__tree-node-status vue-tree__tree-node-status--loading"><i class="fa fa-spin fa-spinner" aria-hidden="true"></i> Loading ...</span>
    </li>
    <li class="vue-tree__tree-node-status-message vue-tree__tree-node-status-message--error" v-if="error">
      <span class="vue-tree__tree-node-status vue-tree__tree-node-status--error">
        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> {{error}}
      </span>
    </li>
  </span>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    vm: Object, // The VueTreeNode component instance.
    node: Object, // The data of the node to display.
    label: String, // Label to display.
    leaf: Boolean, // Should the node be displayed as a leaf ?
    opened: Boolean, // Should the node be opened ?
    loading: Boolean, // Is the node currently loading ?
    error: Object // Contains the error object if an error occurs while loading the node.
  }
})
</script>
<style class="scss" scoped>
vue-tree__theme-before-children--vanilla {
  font-weight: bold;
}
</style>
