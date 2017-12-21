<template>
  <li class="vue-tree__tree-node" :class="{'vue-tree__tree-node--hidden': hidden}">
    <component :is="themeInstance.content" v-if="themeInstance.content"></component>
    <span v-else class="vue-tree__tree-node-content" v-if="!!data && !hidden">
      <span class="vue-tree__tree-node-handle" :class="{'vue-tree__tree-node-toggle--disabled': dataLeaf}"
            v-if="!childrenLoading" @click="toggleClicked" :disabled="dataLeaf">
        <component :is="themeInstance.handle" v-if="themeInstance.handle" v-bind="themeContext"></component>
      </span>
      <span class="vue-tree__tree-node-label">
        <component :is="themeInstance.label" v-if="themeInstance.label" v-bind="themeContext"></component>
      </span>
    </span>
    <ul class="vue-tree__tree-node-children">
      <component :is="themeInstance.beforeChildren" v-if="themeInstance.beforeChildren" v-bind="themeContext"></component>
      <template v-if="computedOpened" v-for="child of childrenNodes">
        <vue-tree-node :data="child"
                       :children-async="childrenAsync"
                       :children="children"
                       :opened="opened"
                       :label="label"
                       :leaf="leaf"
                       :theme="theme">
        </vue-tree-node>
      </template>
      <component :is="themeInstance.afterChildren" v-if="themeInstance.afterChildren" v-bind="themeContext"></component>
    </ul>
  </li>
</template>
<style lang="scss" scoped>
  .vue-tree__tree-node-handle {
    cursor: pointer;
    user-select: none;
  }
</style>
<script lang="ts" src="./VueTreeNode.ts"></script>
