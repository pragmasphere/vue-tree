<template>
  <span class="vue-tree__theme-label--vanilla">
    <input class="vue-tree__selected-checkbox"
           type="checkbox"
           v-model="vm.dataSelected">
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import props from '../themeProps'

export default Vue.extend({ props })
</script>

<style lang="scss" scoped>
</style>
