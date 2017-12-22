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
              <a>Load data</a>
            </li>
            <ul data-scroll-spy-id="load-data" v-scroll-spy-active v-scroll-spy-link>
              <li>
                <a>Default data structure</a>
              </li>
              <li>
                <a>Custom data structure</a>
              </li>
              <li>
                <a>Async loading function</a>
              </li>
            </ul>
            <li>
              <a>Properties</a>
            </li>
            <li>
              <a>Theme</a>
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
              <span class="tbd" title="To be done ...">Selection</span>
            </li>
            <li>
              <span class="tbd" title="To be done ...">Edition</span>
            </li>
            <li>
              <span class="tbd" title="To be done ...">Drag & Drop</span>
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
                  <h2>Getting Started</h2>

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
                        <pre class="col-xs-6" v-highlightjs><code class="javascript">import vue from 'Vue'

import VueTree from '@pragmasphere/vue-tree'
import '@pragmasphere/vue-tree/lib/vue-tree.css'

vue.components('vue-tree', VueTree)</code></pre>
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
                  <h2>Load data</h2>

                  <p>You can load data into tree by using synchronous data loaded in an object, or using a function
                    returning children object from a parent object.</p>

                  <p>It's possible to load data asynchronously with ES2017 async/await or ES2015 Promise.</p>

                  <p>
                    Property names used by those objects can be configured so you can adjust the component to existing
                    data.
                  </p>

                  <div class="row" data-scroll-spy-id="load-data" v-scroll-spy>
                    <div class="col-xs-12">
                      <h3>Default data structure</h3>

                      <p>You can set an object matching your tree structure to the <code>data</code> component property.
                        This object should at least have <code>label</code> and <code>children</code> properties.</p>

                      <ul>
                        <li>
                          <code>label</code> is used as the label of the node
                        </li>
                        <li>
                          <code>children</code> is an array of children tree objects.
                        </li>
                      </ul>

                      <vuep :template="examples.defaultObjectProperties" :scope="scope"></vuep>
                    </div>
                    <div class="col-xs-12">
                      <h3>Custom data structure</h3>

                      <p>If for some reason, you need to use other property names for your tree object, you can customize
                        those names with <code>label</code> and <code>children</code> component properties</p>

                      <vuep :template="examples.customObjectProperties" :scope="scope"></vuep>

                      <p>Those component properties can also accept a function to implement complex behaviors</p>

                      <vuep :template="examples.functionalObjectProperties" :scope="scope"></vuep>
                    </div>
                    <div class="col-xs-12">
                      <h3>Async loading function</h3>

                      <p>You can set <code>children-async</code> to <code>true</code> and define <code>children</code>
                        to an async function returning children for them to be loaded asynchronously.

                      <p>You can use either ES2017 async/await or ES2015 Promise to implement the children loading
                        function.</p>

                      <vuep :template="examples.asyncChildren" :scope="scope"></vuep>
                    </div>
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-xs-12">
                  <h2>Properties</h2>


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
                      <td class="properties-table__description">Data to display.</td>
                    </tr>
                    <tr>
                      <td class="properties-table__name">children</td>
                      <td class="properties-table__type"><code>String</code></td>
                      <td class="properties-table__default"><code>children</code></td>
                      <td class="properties-table__description">Property name to use on <code>data</code> objects to
                        display children.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name"></td>
                      <td class="properties-table__type"><code>Function (node: TreeNode): TreeNode[]</code></td>
                      <td class="properties-table__default"></td>
                      <td class="properties-table__description"><p>Function that returns an array of children data
                        objects to be displayed.</p>
                        <p>When used with <code>:children-async="true"</code>, it may return a Promise (ES2015) or be
                          defined as an async function (ES2017).</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name">children-async</td>
                      <td class="properties-table__type"><code>Boolean</code></td>
                      <td class="properties-table__default"><code>false</code></td>
                      <td class="properties-table__description">Enable async fetching of children.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name">root-hidden</td>
                      <td class="properties-table__type"><code>Boolean</code></td>
                      <td class="properties-table__default"><code>false</code></td>
                      <td class="properties-table__description">Hide the root node on the component view.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name">label</td>
                      <td class="properties-table__type"><code>String</code></td>
                      <td class="properties-table__default"><code>label</code></td>
                      <td class="properties-table__description">Property name from <code>data</code> objects used as
                        label.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name"></td>
                      <td class="properties-table__type"><code>Function (node: TreeNode): String</code></td>
                      <td class="properties-table__default"></td>
                      <td class="properties-table__description">Function that returns the label for given node.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name">leaf</td>
                      <td class="properties-table__type"><code>String</code></td>
                      <td class="properties-table__default"><code>leaf</code></td>
                      <td class="properties-table__description">Property name from <code>data</code> objects used as leaf
                        property. If node is leaf, it's children won't be fetched.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name"></td>
                      <td class="properties-table__type"><code>Function (node: TreeNode): String</code></td>
                      <td class="properties-table__default"></td>
                      <td class="properties-table__description">Function that returns the leaf property for given node.
                        If node is leaf, it's children won't be fetched.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name">opened</td>
                      <td class="properties-table__type"><code>String</code></td>
                      <td class="properties-table__default"><code>opened</code></td>
                      <td class="properties-table__description">Property name from <code>data</code> objects used as
                        opened state.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name"></td>
                      <td class="properties-table__type"><code>Function</code></td>
                      <td class="properties-table__default"></td>
                      <td class="properties-table__description">Function that returns initial opened state for given node.
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
                      <td class="properties-table__description">Object defining <code>get</code> and <code>set</code>
                        functions for opened state of given node. <code>get</code> function returns initial opened state
                        for given node, and <code>set</code> function is invoked to update the state into the node when
                        user interacts with the component view.
                      </td>
                    </tr>
                    <tr>
                      <td class="properties-table__name">theme</td>
                      <td class="properties-table__type"><code>String</code></td>
                      <td class="properties-table__default"><code>vanilla</code></td>
                      <td class="properties-table__description">Activate a theme registered in the registry through it's name. See Themes section for more details</td>
                    </tr>
                    <tr>
                      <td class="properties-table__name"></td>
                      <td class="properties-table__type"><code>Object</code></td>
                      <td class="properties-table__default"></td>
                      <td class="properties-table__description">Activate a theme from its definition object. See Themes section for more details</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12">
                  <h2>Theme</h2>

                  <p>You can change the look of Vue Tree by setting the <code>theme</code> component property. Default themes are bundled with
                    Vue Tree, and you can write your own if needed.</p>

                  <div class="row" data-scroll-spy-id="themes" v-scroll-spy>
                    <div class="col-xs-12">
                      <h3>Default themes</h3>

                      <p>Vue Tree is bundled with 2 default themes</p>

                      <ul>
                        <li><code>vanilla</code>: Display tree nodes with characters only</li>
                        <li><code>fontAwesome</code>: Display tree nodes with <a href="http://fontawesome.io/" target="_blank">Font Awesome</a> icons</li>
                      </ul>

                      <p>Default themes are already registered in the theme registry, so they are available using their name directly on the <code>theme</code> component property.</p>

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
    leaf: Boolean, // Should the node be displayed as a leaf ?
    opened: Boolean, // Should the node be opened ?
    label: String, // Label to display.
    loading: Boolean, // Is the node currently loading ?
    error: Object // Contains the error object if an error occurs while loading the node.
  }
}</code></pre>

                      <p>To start writing your own theme, you should copy sources from one of the default template and start modifying it.</p>

                      <ul>
                        <li><a href="https://github.com/pragmasphere/vue-tree/tree/develop/src/theme/vanilla" target="_blank">vanilla</a></li>
                        <li><a href="https://github.com/pragmasphere/vue-tree/tree/develop/src/theme/font-awesome" target="_blank">fontAwesome</a></li>
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

            </div>
            <div>
              <div class="row tbd">
                <div class="col-xs-12">
                  <h2>Selection</h2>
                  <p>To be done ...</p>
                </div>
              </div>

              <div class="row tbd">
                <div class="col-xs-12">
                  <h2>Edition</h2>
                  <p>To be done ...</p>
                </div>
              </div>

              <div class="row tbd">
                <div class="col-xs-12">
                  <h2>Drag & Drop</h2>
                  <p>To be done ...</p>
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

  a {
    padding-left: 5px;
    transition: padding-left 0.5s;
  }
}

.content {
  .properties-table__name {
    font-weight: bold;
  }

  .properties-table__type {
    white-space: nowrap;
  }
}
</style>
<script lang="ts" src="./Docs.ts"></script>
