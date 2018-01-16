<template>
  <span class="vue-tree__theme-before-children--vanilla">
    <li class="vue-tree__tree-node-status-message vue-tree__tree-node-status-message--loading" v-if="loading">
      <span class="vue-tree__tree-node-status vue-tree__tree-node-status--loading">&#10067;</span>
      Loading ...
    </li>
    <li class="vue-tree__tree-node-status-message vue-tree__tree-node-status-message--error" v-if="error">
      <span class="vue-tree__tree-node-status vue-tree__tree-node-status--error">&#10071;</span>
      {{error}}
    </li>
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
