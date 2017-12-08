<template>
  <li class="vue-tree__tree-node" :class="{'vue-tree__tree-node--hidden': hidden}">
    <span class="vue-tree__tree-node-content" v-if="!!value && !hidden">
      <span class="vue-tree__tree-node-toggle" v-if="!childrenLoading" @click="computedOpened = !computedOpened" :disabled="valueLeaf">
        <span v-if="valueLeaf">[x]</span>
        <template v-else>
          <span v-if="!computedOpened">[+]</span>
          <span v-else>[-]</span>
          <span v-if="childrenLoading">[*]</span>
        </template>
      </span>
      <span class="vue-tree__tree-node-toggle-loading" v-if="childrenLoading">
        [?]
      </span>
      <span class="vue-tree__tree-node-status vue-tree__tree-node-status--error" v-if="childrenError">
        [!]
      </span>
      <span class="vue-tree-label">
        {{ valueLabel }}
      </span>
    </span>
    <ul class="vue-tree__tree-node-children">
      <li class="vue-tree-node vue-tree-status vue-tree-loading-text" v-if="childrenLoading">Loading ...</li>
      <li class="vue-tree-node vue-tree-status vue-tree-error-text" v-if="childrenError">Error: {{childrenError}}</li>
      <template v-if="computedOpened" v-for="child of childrenNodes">
        <vue-tree-node :value="child"
                       :children="children"
                       :children-async="childrenAsync"
                       :label="label"
                       :leaf="leaf">
        </vue-tree-node>
      </template>
    </ul>
  </li>
</template>
<style lang="scss" scoped>
  .vue-tree__tree-node-toggle {
    font-weight: bold;
    cursor: pointer;
    user-select: none;
  }
</style>
<script lang="ts" src="./VueTreeNode.ts"></script>
