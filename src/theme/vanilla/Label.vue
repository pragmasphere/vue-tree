<template>
  <span class="vue-tree__theme-label--vanilla">
    <span class="vue-tree__tree-node-status vue-tree__tree-node-status--loading" v-if="loading">
      [?]
    </span>
    <span class="vue-tree__tree-node-status vue-tree__tree-node-status--error" v-if="error">
      [!]
    </span>
    <span class="vue-tree__tree-node-label">
      {{ label }}
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
<style lang="scss" scoped>
.vue-tree__tree-node-status {
  font-weight: bold;
}
</style>
