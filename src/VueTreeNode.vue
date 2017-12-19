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
<script lang="ts">
  import Vue from 'vue'

  import {
    AsyncTreeNodeChildrenLoader, PropertyGetter, PropertyMapper, TreeNode,
    TreeNodeChildrenLoader
  } from './vue-tree-types'
  import { isFunction, isObject, isString } from '@/utils'
  import { defaultRootNode, defaultTreeNodeChildrenLoader } from '@/defaults'

  export default Vue.extend({
    name: 'VueTreeNode',
    props: {
      data: { // TreeNode
        type: Object,
        default: function () {
          return defaultRootNode
        }
      },
      children: { // TreeNodeChildrenLoader | AsyncTreeNodeChildrenLoader | string
        type: [Function, String],
        default: defaultTreeNodeChildrenLoader
      },
      childrenAsync: { // boolean
        type: Boolean,
        default: false
      },
      label: { // PropertyGetter<String> | String
        type: [Function, String],
        default: 'label'
      },
      leaf: { // PropertyGetter<boolean> | String
        type: [Function, String],
        default: 'leaf'
      },
      opened: { // PropertyMapper<boolean> | PropertyGetter<boolean> | String | boolean
        type: [Object, Function, String, Boolean],
        default: function () {
          return true
        }
      },
      hidden: { // boolean
        type: Boolean,
        default: false
      }
    },
    data: function () {
      return {
        childrenError: null as any,
        childrenLoading: false as boolean,
        childrenLoaded: false as boolean,
        childrenNodes: null as TreeNode[] | null | undefined,
        dataOpened: false as boolean
      }
    },
    watch: {
      opened: {
        immediate: true,
        handler: function (opened: PropertyMapper<boolean> | PropertyGetter<boolean> | String | Boolean) {
          if (opened === true) {
            this.computedOpened = opened as boolean
          } else if (isString(opened)) {
            this.computedOpened = this.data[opened as string] === true
          } else if (isObject(opened) && 'get' in opened) {
            const openedAccessor = opened as PropertyMapper<boolean>
            this.computedOpened = openedAccessor.get(this.data)
          } else if (isFunction(opened)) {
            const openedGetter = opened as PropertyGetter<boolean>
            this.computedOpened = openedGetter(this.data)
          }
        }
      }
    },
    computed: {
      childrenFunction: function (): TreeNodeChildrenLoader {
        if (isString(this.children)) {
          const vm = this

          function namedLoader (parent: any) { // tslint:disable-line no-inner-declarations
            return parent[vm.children as string]
          }

          return namedLoader
        }
        return this.children as TreeNodeChildrenLoader
      },
      childrenAsyncFunction: function (): AsyncTreeNodeChildrenLoader {
        return this.children as AsyncTreeNodeChildrenLoader
      },
      dataLabel: function (): string {
        if (isString(this.label)) {
          return this.data[this.label as string]
        } else {
          return (this.label as PropertyGetter<string>)(this.data)
        }
      },
      dataLeafFromProperty (): boolean {
        if (isString(this.leaf)) {
          return this.data[this.leaf as string]
        } else {
          return (this.leaf as PropertyGetter<boolean>)(this.data)
        }
      },
      dataLeaf (): boolean {
        if (!this.childrenAsync) {
          if (!this.childrenLoaded) {
            this.loadChildren()
          }
          return !this.childrenNodes || this.childrenNodes.length <= 0
        }
        return this.dataLeafFromProperty
      },
      computedOpened: {
        get: function (): boolean {
          return this.dataOpened
        },
        set: function (opened: boolean) {
          if (opened && !this.childrenNodes) {
            if (this.childrenAsync) {
              this.loadChildrenAsync().then(() => {
                this.dataOpened = opened
              })
            } else {
              this.loadChildren()
              this.dataOpened = opened
            }
          } else {
            this.dataOpened = opened
          }
          this.$emit('opened', this.data)
        }
      }
    },
    methods: {
      toggleClicked () {
        if (!this.dataLeaf) {
          this.computedOpened = !this.computedOpened
        }
      },
      loadChildren (): TreeNode[] | null | undefined {
        if (this.dataLeafFromProperty) {
          return undefined
        }

        let loader = this.childrenFunction
        this.childrenNodes = loader(this.data)
        return this.childrenNodes
      },
      loadChildrenAsync (): Promise<TreeNode[] | null | undefined> {
        if (this.dataLeafFromProperty) {
          return Promise.resolve() as Promise<undefined>
        }

        this.childrenLoading = true
        this.childrenError = null

        const loader = this.childrenAsyncFunction
        let promise = loader(this.data)
        if (!promise) {
          promise = Promise.resolve(null)
        }

        return promise.then((children) => {
          this.childrenNodes = children
          this.childrenLoading = false
          this.childrenLoaded = true
          return children
        }).catch((error) => {
          this.childrenNodes = null
          this.childrenError = error
          this.childrenLoading = false
          this.childrenLoaded = false
          throw error
        })
      }
    }
  })
</script>
