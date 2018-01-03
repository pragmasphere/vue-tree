<template>
  <span class="vue-tree__theme-label--vanilla">
    <span class="vue-tree__tree-node-status vue-tree__tree-node-status--loading" v-if="loading">&#10067;</span>
    <span class="vue-tree__tree-node-status vue-tree__tree-node-status--error" v-if="error">&#10071;</span>
    <span class="vue-tree__tree-node-label">{{ label }}</span>
  </span>
</template>
<script lang="ts">
import Vue from 'vue'
import props from '../themeProps'

export default Vue.extend({ props })
</script>
<style lang="scss" scoped>
.vue-tree__tree-node-status {
  font-weight: bold;
}
</style>
