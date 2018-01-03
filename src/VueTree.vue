<template>
  <ul class="vue-tree">
    <vue-tree-node class="vue-tree__root"
                   :data="data"
                   :children-async="childrenAsync"
                   :children="children"
                   :hidden="hidden"
                   :opened="opened"
                   :selectable="selectable"
                   :selected="selected"
                   :label="label"
                   :leaf="leaf"
                   :theme="theme"></vue-tree-node>
  </ul>
</template>
<style lang="scss">
ul.vue-tree {
  margin: 0 0 0 -1em;
  padding: 0;
}

.vue-tree {
  ul, li {
    list-style: none;

    margin: 0;
    padding: 0;
  }

  li.vue-tree__tree-node--hidden {
    margin-left: 0;
  }

  li {
    margin-left: 1em;
  }
}
</style>
<script lang="ts" src="./VueTree.ts"></script>
