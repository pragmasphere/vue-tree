<template>
  <span class="vue-tree__theme-before-children--font-awesome">
    <li class="vue-tree__tree-node-status-message vue-tree__tree-node-status-message--loading" v-if="loading">
      <span class="vue-tree__tree-node-status vue-tree__tree-node-status--loading"><i class="fa fa-spin fa-spinner" aria-hidden="true"></i> Loading ...</span>
    </li>
    <li class="vue-tree__tree-node-status-message vue-tree__tree-node-status-message--error" v-if="error">
      <span class="vue-tree__tree-node-status vue-tree__tree-node-status--error">
        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> {{error}}
      </span>
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
