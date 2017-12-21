<template>
  <span class="vue-tree__theme-before-children--vanilla">
    <li class="vue-tree__tree-node-status-message vue-tree__tree-node-status-message--loading" v-if="loading">
      <span class="vue-tree__tree-node-status vue-tree__tree-node-status--loading">[?]</span> Loading ...
    </li>
    <li class="vue-tree__tree-node-status-message vue-tree__tree-node-status-message--error" v-if="error">
      <span class="vue-tree__tree-node-status vue-tree__tree-node-status--error">
        [!]</span> {{error}}
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
  .vue-tree__tree-node-status {
    font-weight: bold;
  }
</style>
