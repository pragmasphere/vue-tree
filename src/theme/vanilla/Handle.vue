<template>
  <span class="vue-tree__theme-handle--vanilla">
    <span v-if="leaf" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--leaf">[x]</span>
    <span v-if="!leaf && !opened" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--closed">[+]</span>
    <span v-if="!leaf && opened" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--opened">[-]</span>
    <span v-if="!leaf && loading" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--loading">[*]</span>
  </span>
</template>
<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    props: {
      node: Object,
      leaf: Boolean,
      opened: Boolean,
      label: String,
      loading: Boolean,
      error: Object
    }
  })
</script>
<style class="scss" scoped>
  .vue-tree__theme-handle--vanilla {
    font-weight: bold;
  }
</style>
