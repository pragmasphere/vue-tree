<template>
  <li class="vue-tree__tree-node"
      :class="{'vue-tree__tree-node--hidden': dataHidden, 'vue-tree__tree-node--opened': dataOpened, 'vue-tree__tree-node--closed': !dataOpened}">
    <component :is="themeInstance.content" v-if="themeInstance.content" v-bind="themeContext"></component>
    <span class="vue-tree__tree-node-content" v-if="!themeInstance.content && !!data && !dataHidden">
      <span class="vue-tree__tree-node-handle" :class="{'vue-tree__tree-node-handle--disabled': dataLeaf}"
            v-if="!childrenLoading" @click="handleClicked" :disabled="dataLeaf">
        <component :is="themeInstance.handle" v-if="themeInstance.handle" v-bind="themeContext"></component>
      </span>
      <span class="vue-tree__tree-node-selection" v-if="dataSelectable">
        <component :is="themeInstance.selection" v-if="themeInstance.selection" v-bind="themeContext"></component>
      </span>
      <span class="vue-tree__tree-node-label">
        <component :is="themeInstance.label" v-if="themeInstance.label" v-bind="themeContext"></component>
      </span>
    </span>
    <ul class="vue-tree__tree-node-children">
      <component :is="themeInstance.beforeChildren" v-if="themeInstance.beforeChildren" v-bind="themeContext"></component>
      <template v-for="(child, $index) of childrenNodes">
        <vue-tree-node :key="$index"
                       v-show="dataOpened"
                       v-on="$listeners"
                       :class="{'vue-tree__tree-node--parent-opened': dataOpened, 'vue-tree__tree-node--parent-closed': !dataOpened}"
                       :data="child"
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
                       :theme="themeInstance">
        </vue-tree-node>
      </template>
      <component :is="themeInstance.afterChildren" v-if="themeInstance.afterChildren" v-bind="themeContext"></component>
    </ul>
  </li>
</template>

<script lang="ts" src="./VueTreeNode.ts">
</script>

<style lang="scss" scoped>
.vue-tree__tree-node-handle {
  cursor: pointer;
  user-select: none;

  &.vue-tree__tree-node-handle--disabled {
    cursor: inherit;
  }
}
</style>
