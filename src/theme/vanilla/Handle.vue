<template>
  <span class="vue-tree__theme-handle--vanilla"><span
    v-if="leaf" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--leaf">&#10006;</span><span
    v-if="!leaf && !opened" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--closed">&#9658;</span><span
    v-if="!leaf && opened" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--opened">&#9660;</span><span
    v-if="!leaf && loading" class="vue-tree__tree-node-handle vue-tree__tree-node-handle--loading">&#10067;</span></span>
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
