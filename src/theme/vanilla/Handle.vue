<template>
  <span class="vue-tree__theme-handle--vanilla"><span
    v-if="leaf" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--leaf">&#10006;</span><span
    v-if="!leaf && !opened" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--closed">&#9658;</span><span
    v-if="!leaf && opened" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--opened">&#9660;</span><span
    v-if="!leaf && loading" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--loading">&#10067;</span></span>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    vm: Object, // The VueTreeNode component instance.
    node: Object, // The data of the node to display.
    label: String, // Label to display.
    hidden: Boolean, // Should the node be hidden ?
    leaf: Boolean, // Should the node be displayed as a leaf ?
    opened: Boolean, // Should the node be opened ?
    loading: Boolean, // Is the node currently loading ?
    error: Object // Contains the error object if an error occurs while loading the node.
  }
})
</script>
<style class="scss" scoped>
.vue-tree__tree-node-handle {
  font-weight: bold;
}
</style>
