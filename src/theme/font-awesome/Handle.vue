<template>
  <span class="vue-tree__theme-handle--font-awesome">
    <span v-if="leaf" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--leaf">
      <i class="fa fa-times" aria-hidden="true"></i>
    </span>
    <span v-if="!leaf && !opened" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--closed">
      <i class="fa fa-chevron-right" aria-hidden="true"></i>
    </span>
    <span v-if="!leaf && opened" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--opened">
      <i class="fa fa-chevron-down" aria-hidden="true"></i>
    </span>
    <span v-if="!leaf && loading" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--loading">
      <i class="fa fa-spin fa-spinner" aria-hidden="true"></i>
    </span>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import props from '../themeProps'

export default Vue.extend({ props })
</script>

<style lang="scss" scoped>
.vue-tree__tree-node-handle {
  font-weight: bold;
}
</style>
