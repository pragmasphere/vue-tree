<template>
  <span class="vue-tree__theme-handle--vanilla">
    <span v-if="leaf" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--leaf">
      [x]
    </span>
    <span v-if="!leaf && !opened" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--closed">
      [+]
    </span>
    <span v-if="!leaf && opened" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--opened">
      [-]
    </span>
    <span v-if="!leaf && loading" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--loading">
      [*]
    </span>
  </span>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
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
