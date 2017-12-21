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
      node: Object,
      leaf: Boolean,
      opened: Boolean,
      label: String,
      loading: Boolean,
      error: Object
    }
  })
</script>
<style lang="scss" scoped>
  .vue-tree__tree-node-status {
    font-weight: bold;
  }
</style>
