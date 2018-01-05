<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3 col-lg-2">
        <nav class="navbar navbar-default navbar-fixed-side">
          <div class="navbar-brand">Vue Tree</div>
          <ul class="navbar__menu" v-scroll-spy-active="{selector: 'li'}" v-scroll-spy-link>
            <li>
              <a>Getting Started</a>
            </li>
            <ul data-scroll-spy-id="getting-started" v-scroll-spy-active v-scroll-spy-link>
              <li>
                <a>Install</a>
              </li>
              <li>
                <a>Configure</a>
              </li>
              <li>
                <a>Use</a>
              </li>
            </ul>
            <li>
              <a>Load Data</a>
            </li>
            <ul data-scroll-spy-id="load-data" v-scroll-spy-active v-scroll-spy-link>
              <li>
                <a>Default Properties</a>
              </li>
              <li>
                <a>Custom Properties</a>
              </li>
              <li>
                <a>Async Fetching</a>
              </li>
            </ul>
            <li>
              <a>Themes</a>
            </li>
            <ul data-scroll-spy-id="themes" v-scroll-spy-active v-scroll-spy-link>
              <li>
                <a>Default themes</a>
              </li>
              <li>
                <a>Custom theme</a>
              </li>
            </ul>
            <li>
              <a>Selection</a>
            </li>
            <li class="tbd" title="To be done ...">
              <a>Edition</a>
            </li>
            <li class="tbd" title="To be done ...">
              <a>Drag & Drop</a>
            </li>
            <li>
              <a>Properties</a>
            </li>
            <li>
              <a>Events</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-sm-9 col-lg-10">
        <div>
          <div class="content container">
            <div class="row">
              <div class="page-header">
                <h1>Vue Tree</h1>
                <div class="col-xs-12 text-center">
                  <a href="https://github.com/pragmasphere/vue-tree" class="btn btn-lg btn-default">
                    <i class="fa fa-github" aria-hidden="true"></i> Github
                  </a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 text-center">
                <h2>Simple Tree Component for VueJS</h2>
              </div>
            </div>
            <div class="row badges">
              <div class="col-xs-12 text-center">
                <p><a href="https://www.npmjs.com/package/@pragmasphere/vue-tree">
                  <img src="https://img.shields.io/npm/v/@pragmasphere/vue-tree.svg" alt="npm"/>
                </a></p>
              </div>
            </div>
            <div v-scroll-spy>
              <div class="row">
                <div class="col-xs-12">
                  <h2 id="getting-started">Getting Started</h2>

                  <div data-scroll-spy-id="getting-started" v-scroll-spy>
                    <div class="row">
                      <div class="col-xs-12">
                        <h3>Install</h3>
                        <pre class="col-xs-6" v-highlightjs><code class="shell">npm install @pragmasphere/vue-tree</code></pre>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xs-12">
                        <h3>Configure</h3>
                        <pre class="col-xs-6" v-highlightjs><code class="javascript">import Vue from 'vue'

import VueTree from '@pragmasphere/vue-tree'
import '@pragmasphere/vue-tree/lib/vue-tree.css'

Vue.components('vue-tree', VueTree)</code></pre>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xs-12">
                        <h3>Use</h3>
                        <vuep :template="examples.simple" :scope="scope"></vuep>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12">
                  <h2 id="load-data">Load Data</h2>

                  <p>Data displayed in the component should be defined as an object hierarchy of TreeNode objects. Each
                    TreeNode object contains data used to display a TreeNode in the component and control it's state.</p>

                  <p>Children TreeNode objects can be defined right on the parent TreeNode in a property. They can
                    also be fetched synchronously from a function returning an array of TreeNode, or asynchronously
                    from ES2017 async/await function or ES2015 Promise function.</p>

                  <p>
                    Property names declared on TreeNode objects can all be configured so you can load any data source
                    in the component without mutating it.
                  </p>

                  <div class="row" data-scroll-spy-id="load-data" v-scroll-spy>
                    <div class="col-xs-12">
                      <h3>Default Properties</h3>

                      <p>A root TreeNode object should be set to the <code>data</code> component property.</p>
                      <p>By default, TreeNode objects should at least have <code>label</code> and <code>children</code>
                        properties.</p>

                      <ul>
                        <li>
                          <code>label</code> is used to display the label of the TreeNode objects.
                        </li>
                        <li>
                          <code>children</code> is an array of children TreeNode objects.
                        </li>
                      </ul>

                      <vuep :template="examples.defaultObjectProperties" :scope="scope"></vuep>

                      <p>Others properties are available, like <code>opened</code>, <code>selectable</code> or
                        <code>selected</code> to control the state of each displayed TreeNode.</p>
                    </div>
                    <div class="col-xs-12">
                      <h3>Custom Properties</h3>

                      <p>If you need to use other property names for your TreeNode objects, you can customize
                        these with <code>label</code> and <code>children</code> component properties</p>

                      <vuep :template="examples.customObjectProperties" :scope="scope"></vuep>

                      <p>Most of supported component properties can also accept a function to implement advanced data
                        loading. See <a href="#">Properties section</a> for a detailed list of supported properties.</p>

                      <vuep :template="examples.functionalObjectProperties" :scope="scope"></vuep>
                    </div>
                    <div class="col-xs-12">
                      <h3>Async Fetching</h3>

                      <p>You can set <code>children-async</code> to <code>true</code> and define <code>children</code>
                        to an async function returning children to fetch them asynchronously.

                      <p>You can use either ES2017 async/await or ES2015 Promise to implement the children loading
                        function.</p>

                      <vuep :template="examples.asyncChildren" :scope="scope"></vuep>
                    </div>
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-xs-12">
                  <h2 id="themes">Themes</h2>

                  <p>You can change the look of Vue Tree with <code>theme</code> component property. Default themes
                    are bundled with distribution and you can write your own if needed.</p>

                  <div class="row" data-scroll-spy-id="themes" v-scroll-spy>
                    <div class="col-xs-12">
                      <h3>Default themes</h3>

                      <p>Vue Tree is bundled with some default themes</p>

                      <ul>
                        <li><code>vanilla</code>: Unicode characters only.</li>
                        <li><code>fontAwesome</code>: <a href="http://fontawesome.io/" target="_blank">Font Awesome</a>
                          icons.
                        </li>
                      </ul>

                      <p>Default themes are registered in a theme registry, so they are available using their name
                        right on the <code>theme</code> component property.</p>

                      <vuep :template="examples.defaultThemes" :scope="scope"></vuep>
                    </div>
                    <div class="col-xs-12">
                      <h3>Custom theme</h3>

                      <p>To create your own Theme, you have to implement an object matching this interface.</p>

                      <pre class="col-xs-12" v-highlightjs><code class="javascript">export interface Theme {
  handle: VueConstructor
  label: VueConstructor
  beforeChildren?: VueConstructor
  afterChildren?: VueConstructor
}</code></pre>

                      <p>Each value in this object is a component that will be used to display a part of a tree node.</p>

                      <ul>
                        <li><code>handle</code> is used to render clickable handle area of the tree node.</li>
                        <li><code>label</code> is used to render the label area of the tree node.</li>
                        <li><code>beforeChildren</code> is optional and can be used to render anything before children of a node.</li>
                        <li><code>afterChildren</code> is optional and can be used to render anything after children of a node.</li>
                      </ul>

                      <p>Each template component has access to node context through a defined set of props. That means that all template
                        component should be declared with the following script:</p>

                      <pre class="col-xs-12" v-highlightjs><code class="javascript">export default {
  props: {
    vm: Object, // The VueTreeNode component instance.
    node: Object, // The data of the node to display.
    label: String, // Label to display.
    hidden: Boolean, // Should the node be hidden ?
    leaf: Boolean, // Should the node be displayed as a leaf ?
    opened: Boolean, // Should the node be opened ?
    selected: Boolean, // Should the node be selected ?
    selectable: Boolean, // Should the node be selectable ?
    loading: Boolean, // Is the node currently loading ?
    error: Object // Contains the error object if an error occurs while loading the node.
  }
}</code></pre>

                      <p>To start writing your own theme, you should copy sources from one of the default template and start modifying
                        it.</p>

                      <ul>
                        <li><a href="https://github.com/pragmasphere/vue-tree/tree/master/src/theme/vanilla" target="_blank">vanilla</a>
                        </li>
                        <li><a href="https://github.com/pragmasphere/vue-tree/tree/master/src/theme/font-awesome" target="_blank">fontAwesome</a>
                        </li>
                      </ul>

                      <p>When your theme is ready, you can set it to <code>theme</code> component property, or your can register it to
                        theme registry for it to be available as a string like default themes.</p>

                      <pre class="col-xs-12" v-highlightjs><code class="javascript">import theme from '@pragmasphere/vue-tree/theme'

theme.register('my-template', myTemplate)
</code></pre>

                      <pre class="col-xs-12" v-highlightjs><code class="html">&lt;vue-tree theme="my-template"&gt;&lt;/vue-tree&gt;
</code></pre>

                    </div>
                  </div>


                </div>
              </div>

              <div class="row">
                <div class="col-xs-12">
                  <h2 id="selection">Selection</h2>

                  <p>Tree node selection can be enabled by setting <code>selectable</code> component property to <code>true</code>.</p>

                  <p>By default, tree nodes are all unchecked, but this can be configured with <code>selected</code> component property.
                    <code>selected</code> component property can be defined as a boolean (same selected state for each node), a string (property
                    name used on data to get the selected state), a getter function (return selected state from data node) or an object
                    defining both get and set functions.</p>

                  <vuep :template="examples.selectableProperty" :scope="scope"></vuep>

                </div>
              </div>

              <div class="row tbd">
                <div class="col-xs-12">
                  <h2 id="edition">Edition</h2>
                  <p>To be done ...</p>
                </div>
              </div>

              <div class="row tbd">
                <div class="col-xs-12">
                  <h2 id="drag-and-drop">Drag & Drop</h2>
                  <p>To be done ...</p>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12">
                  <h2 id="properties">Properties</h2>

                  <p>The following table show details of each supported Vue Tree component properties.</p>
                  <p>Most properties supports multiple input types that implements different behaviours of the same
                    feature.</p>

                  <table class="table table-striped properties-table">
                    <thead>
                    <tr>
                      <th class="properties-table__name">Name</th>
                      <th class="properties-table__type">Type</th>
                      <th class="properties-table__default">Default</th>
                      <th class="properties-table__description">Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td class="properties-table__name">data</td>
                      <td class="properties-table__type"><code>Object</code></td>
                      <td class="properties-table__default">Dummy</td>
                      <td class="properties-table__description">Root TreeNode object to load.</td>
                    </tr>
                    <tr>
                      <td class="properties-table__name">children</td>
                      <td class="properties-table__type"><code>String</code></td>
                      <td class="properties-table__default"><code>children</code></td>
                      <td class="properties-table__description">Property name of TreeNode objects that should contain an
                        array of children TreeNode objects.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name"></td>
                      <td class="properties-table__type"><code>Function (node: TreeNode): TreeNode[]</code></td>
                      <td class="properties-table__default"></td>
                      <td class="properties-table__description"><p>Function that fetch an array of children
                        TreeNode objects from TreeNode passed as argument.</p>
                        <p>When used with <code>:children-async="true"</code>, it should return a Promise (ES2015) or
                          be defined as an async function (ES2017).</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name">children-async</td>
                      <td class="properties-table__type"><code>Boolean</code></td>
                      <td class="properties-table__default"><code>false</code></td>
                      <td class="properties-table__description"><p>Enable async fetching of children.</p>
                        <p> When <code>true</code>, <code>children</code> component property should be defined to a
                          Promise (ES2015) or an async function (ES2017).</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name">label</td>
                      <td class="properties-table__type"><code>String</code></td>
                      <td class="properties-table__default"><code>label</code></td>
                      <td class="properties-table__description">Property name of TreeNode objects that should contain
                        label of the item.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name"></td>
                      <td class="properties-table__type"><code>Function (node: TreeNode): String</code></td>
                      <td class="properties-table__default"></td>
                      <td class="properties-table__description">Function that fetch the label from TreeNode argument.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name">leaf</td>
                      <td class="properties-table__type"><code>String</code></td>
                      <td class="properties-table__default"><code>leaf</code></td>
                      <td class="properties-table__description">Property name from TreeNode objects used as leaf
                        property. When node is a leaf, it's children won't be fetched. When node has no children, it
                        will also be displayed as leaf.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name"></td>
                      <td class="properties-table__type"><code>Function (node: TreeNode): String</code></td>
                      <td class="properties-table__default"></td>
                      <td class="properties-table__description">Function returning the leaf property from TreeNode
                        argument. When node is leaf, it's children won't be fetched. When node has no children, it will
                        also be displayed as leaf.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name">opened</td>
                      <td class="properties-table__type"><code>String</code></td>
                      <td class="properties-table__default"><code>opened</code></td>
                      <td class="properties-table__description">Property name of TreeNode objects that should contain
                        opened state of the item.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name"></td>
                      <td class="properties-table__type"><code>Boolean</code></td>
                      <td class="properties-table__default"></td>
                      <td class="properties-table__description">Initial opened state of all TreeNode objects.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name"></td>
                      <td class="properties-table__type"><code>Function (node: TreeNode): Boolean</code></td>
                      <td class="properties-table__default"></td>
                      <td class="properties-table__description">Function returning initial opened state from TreeNode
                        argument.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name"></td>
                      <td class="properties-table__type">
                        <code>Object<br>{<br>
                          &nbsp;&nbsp;get: (node: TreeNode): Boolean,<br>
                          &nbsp;&nbsp;set: (node: TreeNode, opened: Boolean): void<br>}
                        </code></td>
                      <td class="properties-table__default"></td>
                      <td class="properties-table__description"><p>Object defining <code>get</code> and <code>set</code>
                        functions for opened state.</p>
                        <p><code>get</code> function returns initial hidden state for TreeNode argument.</p>
                        <p><code>set</code> function is invoked to update state of TreeNode argument when user
                          interacts with the component.</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name">opened-default</td>
                      <td class="properties-table__type"><code>Boolean</code></td>
                      <td class="properties-table__default"><code>true</code></td>
                      <td class="properties-table__description"><p>Default opened state value used for TreeNode objects
                        that have a <code>null</code> or <code>undefined</code> value computed from <code>opened</code>
                        component property.</p>
                        <p>When set to <code>undefined</code> or <code>null</code>, the state value is
                          inherited from parent node.</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name">hidden</td>
                      <td class="properties-table__type"><code>String</code></td>
                      <td class="properties-table__default"><code>hidden</code></td>
                      <td class="properties-table__description">Property name of TreeNode objects that should contain
                        hidden state of the item.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name"></td>
                      <td class="properties-table__type"><code>Boolean</code></td>
                      <td class="properties-table__default"></td>
                      <td class="properties-table__description">Initial hidden state of all TreeNode objects.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name"></td>
                      <td class="properties-table__type"><code>Function (node: TreeNode): Boolean</code></td>
                      <td class="properties-table__default"></td>
                      <td class="properties-table__description">Function returning hidden state for TreeNode argument.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name"></td>
                      <td class="properties-table__type">
                        <code>Object<br>{<br>
                          &nbsp;&nbsp;get: (node: TreeNode): Boolean,<br>
                          &nbsp;&nbsp;set: (node: TreeNode, hidden: Boolean): void<br>}
                        </code></td>
                      <td class="properties-table__default"></td>
                      <td class="properties-table__description"><p>Object defining <code>get</code> and <code>set</code>
                        functions for hidden state.</p>
                        <p><code>get</code> function returns initial hidden state for TreeNode argument.</p>
                        <p><code>set</code> function is invoked to update state of TreeNode argument when user
                          interacts with the component.</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name">hidden-default</td>
                      <td class="properties-table__type"><code>Boolean</code></td>
                      <td class="properties-table__default"><code>false</code></td>
                      <td class="properties-table__description"><p>Default hidden state value used for TreeNode objects
                        that have a <code>null</code> or <code>undefined</code> value computed from <code>hidden</code>
                        component property.</p>
                        <p>When set to <code>undefined</code> or <code>null</code>, the state value is
                          inherited from parent node.</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name">selectable</td>
                      <td class="properties-table__type"><code>Boolean</code></td>
                      <td class="properties-table__default"><code>false</code></td>
                      <td class="properties-table__description">Initial selectable state of all TreeNode objects.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name"></td>
                      <td class="properties-table__type"><code>String</code></td>
                      <td class="properties-table__default"></td>
                      <td class="properties-table__description">Property name of TreeNode objects that should contain
                        selectable state of the item.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name"></td>
                      <td class="properties-table__type"><code>Function (node: TreeNode): Boolean</code></td>
                      <td class="properties-table__default"></td>
                      <td class="properties-table__description">Function returning initial selectable state for TreeNode argument.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name">selectable-default</td>
                      <td class="properties-table__type"><code>Boolean</code></td>
                      <td class="properties-table__default"><code>false</code></td>
                      <td class="properties-table__description"><p>Default selectable state value used for TreeNode objects
                        that have a <code>null</code> or <code>undefined</code> value computed from <code>selectable</code>
                        component property.</p>
                        <p>When set to <code>undefined</code> or <code>null</code>, the state value is
                          inherited from parent node.</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name">selected</td>
                      <td class="properties-table__type"><code>Boolean</code></td>
                      <td class="properties-table__default"><code>false</code></td>
                      <td class="properties-table__description">Initial selected state of all TreeNode objects.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name"></td>
                      <td class="properties-table__type"><code>String</code></td>
                      <td class="properties-table__default"></td>
                      <td class="properties-table__description">Property name of TreeNode objects that should contain
                        selected state of the item.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name"></td>
                      <td class="properties-table__type"><code>Function (node: TreeNode): Boolean</code></td>
                      <td class="properties-table__default"></td>
                      <td class="properties-table__description">Function returning initial selected state for TreeNode argument.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name"></td>
                      <td class="properties-table__type">
                        <code>Object<br>{<br>
                          &nbsp;&nbsp;get: (node: TreeNode): Boolean,<br>
                          &nbsp;&nbsp;set: (node: TreeNode, selected: Boolean): void<br>}
                        </code></td>
                      <td class="properties-table__default"></td>
                      <td class="properties-table__description"><p>Object defining <code>get</code> and <code>set</code>
                        functions for selected state.</p>
                        <p><code>get</code> function returns initial hidden state for TreeNode argument.</p>
                        <p><code>set</code> function is invoked to update state of TreeNode argument when user
                          interacts with the component.</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name">selected-default</td>
                      <td class="properties-table__type"><code>Boolean</code></td>
                      <td class="properties-table__default"><code>false</code></td>
                      <td class="properties-table__description"><p>Default selected state value used for TreeNode objects
                        that have a <code>null</code> or <code>undefined</code> value computed from <code>selected</code>
                        component property.</p>
                        <p>When set to <code>undefined</code> or <code>null</code>, the state value is
                          inherited from parent node.</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name">theme</td>
                      <td class="properties-table__type"><code>String</code></td>
                      <td class="properties-table__default"><code>vanilla</code></td>
                      <td class="properties-table__description">Activate a theme registered in the registry through
                        it's name. See <a href="#theme">Themes section</a> for more details
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name"></td>
                      <td class="properties-table__type"><code>Object</code></td>
                      <td class="properties-table__default"></td>
                      <td class="properties-table__description">Activate a theme from its definition object.
                        See <a href="#theme">Themes section</a> for more details
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12">
                  <h2 id="events">Events</h2>

                  <p>Vue tree support the following event types:</p>

                  <ul>
                    <li><code>selected</code></li>
                    <li><code>opened</code></li>
                  </ul>

                  <p>All event types have the following payload object structure passed as a single argument.</p>

                  <pre v-highlightjs><code class="javascript">{
  type, // Event type
  vm, // VueTreeNode component
  data, // Data attached to the node
  value, // New value
  oldValue // Old value
}</code></pre>

                  <vuep :template="examples.events" :scope="scope"></vuep>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '~bootstrap-sass/assets/stylesheets/bootstrap/variables';

.badges {
  padding-bottom: 1em;
}

.tbd {
  color: $gray-light;
}

.navbar-brand {
  float: none;
}

.navbar__menu {
  padding: 0 0 0 1em;

  ul, li {
    list-style: none;
  }

  ul {
    padding-left: 12px;
  }

  a {
    cursor: pointer;
  }

  .tbd a {
    color: $gray-light;
  }

  > li {
    padding-left: 0;
    margin-top: 1em;
    font-size: 1.25em;
  }

  > ul > li {
    font-size: 1.1em;
  }
}

.active {
  color: #178ce6;
  border-left: 3px solid #178ce6;

  &.tbd {
    border-left: 3px solid $gray-light;
  }

  a {
    padding-left: 5px;
    transition: padding-left 0.5s;
  }
}

.content {
  .properties-table__name {
    font-weight: bold;
    white-space: nowrap;
  }

  .properties-table__type {
    white-space: nowrap;
  }
}
</style>
<script lang="ts" src="./Docs.ts"></script>
