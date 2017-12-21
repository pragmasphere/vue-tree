<template>
  <span class="vue-tree__theme-handle--font-awesome">
    <span v-if="leaf" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--leaf"><i class="fa fa-circle-o" aria-hidden="true"></i></span>
    <span v-if="!leaf && !opened" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--closed"><i class="fa fa-plus" aria-hidden="true"></i></span>
    <span v-if="!leaf && opened" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--opened"><i class="fa fa-minus" aria-hidden="true"></i></span>
    <span v-if="!leaf && loading" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--loading"><i class="fa fa-spin fa-spinner" aria-hidden="true"></i></span>
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
