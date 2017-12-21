<template>
  <span class="vue-tree__theme-label--font-awesome">
     <span class="vue-tree__tree-node-status vue-tree__tree-node-status--loading" v-if="loading">
       <i class="fa fa-spin fa-spinner" aria-hidden="true"></i>
    </span>
    <span class="vue-tree__tree-node-status vue-tree__tree-node-status--error" v-if="error">
      <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
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
</style>
