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
vue-tree__theme-before-children--vanilla {
  font-weight: bold;
}
</style>
