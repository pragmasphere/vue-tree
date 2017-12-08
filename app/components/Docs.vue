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
              <a>Selection</a>
            </li>
            <li>
              <a>Edition</a>
            </li>
            <li>
              <a>Drag & Drop</a>
            </li>
            <li>
              <a>Themes</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-sm-9 col-lg-10">
        <div>
          <div class="content container" v-scroll-spy>
            <div class="row">
              <div class="page-header">
                <h1>Vue Tree</h1>
                <div class="col-xs-12 text-center">
                  <a href="https://github.com/pragmasphere/vue-tree" class="btn btn-lg btn-default"><i class="fa fa-github" aria-hidden="true"></i> Github</a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 text-center">
                <h2>Simple Tree Component for VueJS</h2>
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

  import VueTree from 'vue-tree'
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
                      <td class="properties-table__type"><code>Object<br>{<br>&nbsp;&nbsp;get: (node: TreeNode): Boolean,<br>&nbsp;&nbsp;set: (node: TreeNode, opened: Boolean): void<br>}</code></td>
                      <td class="properties-table__default"></td>
                      <td class="properties-table__description">Object defining <code>get</code> and <code>set</code>
                        functions for opened state of given node. <code>get</code> function returns initial opened state
                        for given node, and <code>set</code> function is invoked to update the state into the node when
                        user interacts with the component view.
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12">
                  <h2>Themes</h2>

                </div>
              </div>

              <div class="row">
                <div class="col-xs-12">
                  <h2>Selection</h2>

                </div>
              </div>

              <div class="row">
                <div class="col-xs-12">
                  <h2>Edition</h2>

                </div>
              </div>

              <div class="row">
                <div class="col-xs-12">
                  <h2>Drag & Drop</h2>

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
