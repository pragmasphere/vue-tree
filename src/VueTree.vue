<template>
  <ul class="vue-tree">
    <vue-tree-node class="vue-tree__root vue-tree__tree-node--opened vue-tree__tree-node--parent-opened"
                   v-on="$listeners"
                   :data="data"
                   :children-async="childrenAsync"
                   :children="children"
                   :hidden="hidden"
                   :hidden-default="hiddenDefault"
                   :opened="opened"
                   :opened-default="openedDefault"
                   :selectable="selectable"
                   :selectable-default="selectableDefault"
                   :selected="selected"
                   :selected-default="selectedDefault"
                   :label="label"
                   :leaf="leaf"
                   :theme="theme"></vue-tree-node>
  </ul>
</template>

<script lang="ts" src="./VueTree.ts">
</script>

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
