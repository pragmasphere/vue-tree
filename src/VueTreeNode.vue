<template>
  <li class="vue-tree__tree-node" :class="{'vue-tree__tree-node--hidden': hidden}">
    <span class="vue-tree__tree-node-content" v-if="!!data && !hidden">
      <span class="vue-tree__tree-node-toggle" :class="{'vue-tree__tree-node-toggle--disabled': dataLeaf}"
            v-if="!childrenLoading" @click="toggleClicked" :disabled="dataLeaf">
        <span v-if="dataLeaf">[x]</span>
        <template v-else>
          <span v-if="!computedOpened">[+]</span>
          <span v-else>[-]</span>
          <span v-if="childrenLoading">[*]</span>
        </template>
      </span>
      <slot name="status-loading">
        <span class="vue-tree__tree-node-status vue-tree__tree-node-status--loading" v-if="childrenLoading">
          [?]
        </span>
      </slot>
      <slot name="status-error">
        <span class="vue-tree__tree-node-status vue-tree__tree-node-status--error" v-if="childrenError">
          [!]
        </span>
      </slot>
      <span class="vue-tree-label">
        {{ dataLabel }}
      </span>
    </span>
    <ul class="vue-tree__tree-node-children">
      <li class="vue-tree__tree-node-status-message vue-tree__tree-node-status-message--loading" v-if="childrenLoading">
        <span class="vue-tree__tree-node-status vue-tree__tree-node-status--loading">[?]</span> Loading ...
      </li>
      <li class="vue-tree__tree-node-status-message vue-tree__tree-node-status-message--error" v-if="childrenError">
        <span class="vue-tree__tree-node-status vue-tree__tree-node-status--error">
          [!] {{childrenError}}
        </span>
      </li>
      <template v-if="computedOpened" v-for="child of childrenNodes">
        <vue-tree-node :data="child"
                       :children-async="childrenAsync"
                       :children="children"
                       :opened="opened"
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

  .vue-tree__tree-node-status {
    font-weight: bold;
    user-select: none;
  }
</style>
<script lang="ts" src="./VueTreeNode.ts"></script>
