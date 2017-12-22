<template>
  <span class="vue-tree__theme-handle--font-awesome">
    <span v-if="leaf" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--leaf">
      <i class="fa fa-times" aria-hidden="true"></i>
    </span>
    <span v-if="!leaf && !opened" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--closed">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </span>
    <span v-if="!leaf && opened" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--opened">
      <i class="fa fa-minus" aria-hidden="true"></i>
    </span>
    <span v-if="!leaf && loading" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--loading">
      <i class="fa fa-spin fa-spinner" aria-hidden="true"></i>
    </span>
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
.vue-tree__theme-handle--vanilla {
  font-weight: bold;
}
</style>
