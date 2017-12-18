webpackJsonp([1],{"10B3":function(e,t,n){"use strict";var a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-3 col-lg-2"},[n("nav",{staticClass:"navbar navbar-default navbar-fixed-side"},[n("div",{staticClass:"navbar-brand"},[e._v("Vue Tree")]),e._v(" "),n("ul",{directives:[{name:"scroll-spy-active",rawName:"v-scroll-spy-active",value:{selector:"li"},expression:"{selector: 'li'}"},{name:"scroll-spy-link",rawName:"v-scroll-spy-link"}],staticClass:"navbar__menu"},[e._m(0),e._v(" "),n("ul",{directives:[{name:"scroll-spy-active",rawName:"v-scroll-spy-active"},{name:"scroll-spy-link",rawName:"v-scroll-spy-link"}],attrs:{"data-scroll-spy-id":"getting-started"}},[e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3)]),e._v(" "),e._m(4),e._v(" "),n("ul",{directives:[{name:"scroll-spy-active",rawName:"v-scroll-spy-active"},{name:"scroll-spy-link",rawName:"v-scroll-spy-link"}],attrs:{"data-scroll-spy-id":"load-data"}},[e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7)]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12)])])]),e._v(" "),n("div",{staticClass:"col-sm-9 col-lg-10"},[n("div",[n("div",{directives:[{name:"scroll-spy",rawName:"v-scroll-spy"}],staticClass:"content container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12"},[n("h2",[e._v("Getting Started")]),e._v(" "),n("div",{directives:[{name:"scroll-spy",rawName:"v-scroll-spy"}],attrs:{"data-scroll-spy-id":"getting-started"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12"},[n("h3",[e._v("Install")]),e._v(" "),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],staticClass:"col-xs-6"},[n("code",{staticClass:"shell"},[e._v("npm install @pragmasphere/vue-tree")])])])]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12"},[n("h3",[e._v("Configure")]),e._v(" "),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],staticClass:"col-xs-6"},[n("code",{staticClass:"javascript"},[e._v("import vue from 'Vue'\n\nimport VueTree from 'vue-tree'\nvue.components('vue-tree', VueTree)")])])])]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12"},[n("h3",[e._v("Use")]),e._v(" "),n("vuep",{attrs:{template:e.examples.simple,scope:e.scope}})],1)])])])]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12"},[n("h2",[e._v("Load data")]),e._v(" "),n("p",[e._v("You can load data into tree by using synchronous data loaded in an object, or using a function\n                  returning children object from a parent object.")]),e._v(" "),n("p",[e._v("It's possible to load data asynchronously with ES2017 async/await or ES2015 Promise.")]),e._v(" "),n("p",[e._v("\n                  Property names used by those objects can be configured so you can adjust the component to existing\n                  data.\n                ")]),e._v(" "),n("div",{directives:[{name:"scroll-spy",rawName:"v-scroll-spy"}],staticClass:"row",attrs:{"data-scroll-spy-id":"load-data"}},[n("div",{staticClass:"col-xs-12"},[n("h3",[e._v("Default data structure")]),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),n("vuep",{attrs:{template:e.examples.defaultObjectProperties,scope:e.scope}})],1),e._v(" "),n("div",{staticClass:"col-xs-12"},[n("h3",[e._v("Custom data structure")]),e._v(" "),e._m(15),e._v(" "),n("vuep",{attrs:{template:e.examples.customObjectProperties,scope:e.scope}}),e._v(" "),n("p",[e._v("Those component properties can also accept a function to implement complex behaviors")]),e._v(" "),n("vuep",{attrs:{template:e.examples.functionalObjectProperties,scope:e.scope}})],1),e._v(" "),n("div",{staticClass:"col-xs-12"},[n("h3",[e._v("Async loading function")]),e._v(" "),e._m(16),n("p",[e._v("You can use either ES2017 async/await or ES2015 Promise to implement the children loading\n                      function.")]),e._v(" "),n("vuep",{attrs:{template:e.examples.asyncChildren,scope:e.scope}})],1)])])]),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21)])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",[this._v("Getting Started")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",[this._v("Install")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",[this._v("Configure")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",[this._v("Use")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",[this._v("Load data")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",[this._v("Default data structure")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",[this._v("Custom data structure")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",[this._v("Async loading function")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",[this._v("Properties")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",[this._v("Selection")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",[this._v("Edition")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",[this._v("Drag & Drop")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",[this._v("Themes")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can set an object matching your tree structure to the "),t("code",[this._v("data")]),this._v(" component property.\n                      This object should at least have "),t("code",[this._v("label")]),this._v(" and "),t("code",[this._v("children")]),this._v(" properties.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("label")]),this._v(" is used as the label of the node\n                      ")]),this._v(" "),t("li",[t("code",[this._v("children")]),this._v(" is an array of children tree objects.\n                      ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If for some reason, you need to use other property names for your tree object, you can customize\n                      those names with "),t("code",[this._v("label")]),this._v(" and "),t("code",[this._v("children")]),this._v(" component properties")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can set "),t("code",[this._v("children-async")]),this._v(" to "),t("code",[this._v("true")]),this._v(" and define "),t("code",[this._v("children")]),this._v("\n                      to an async function returning children for them to be loaded asynchronously.\n\n                    ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12"},[n("h2",[e._v("Properties")]),e._v(" "),n("table",{staticClass:"table table-striped properties-table"},[n("thead",[n("tr",[n("th",{staticClass:"properties-table__name"},[e._v("Name")]),e._v(" "),n("th",{staticClass:"properties-table__type"},[e._v("Type")]),e._v(" "),n("th",{staticClass:"properties-table__default"},[e._v("Default")]),e._v(" "),n("th",{staticClass:"properties-table__description"},[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",{staticClass:"properties-table__name"},[e._v("data")]),e._v(" "),n("td",{staticClass:"properties-table__type"},[n("code",[e._v("Object")])]),e._v(" "),n("td",{staticClass:"properties-table__default"},[e._v("Dummy")]),e._v(" "),n("td",{staticClass:"properties-table__description"},[e._v("Data to display.")])]),e._v(" "),n("tr",[n("td",{staticClass:"properties-table__name"},[e._v("children")]),e._v(" "),n("td",{staticClass:"properties-table__type"},[n("code",[e._v("String")])]),e._v(" "),n("td",{staticClass:"properties-table__default"},[n("code",[e._v("children")])]),e._v(" "),n("td",{staticClass:"properties-table__description"},[e._v("Property name to use on "),n("code",[e._v("data")]),e._v(" objects to\n                      display children.\n                    ")])]),e._v(" "),n("tr",[n("td",{staticClass:"properties-table__name"}),e._v(" "),n("td",{staticClass:"properties-table__type"},[n("code",[e._v("Function (node: TreeNode): TreeNode[]")])]),e._v(" "),n("td",{staticClass:"properties-table__default"}),e._v(" "),n("td",{staticClass:"properties-table__description"},[n("p",[e._v("Function that returns an array of children data\n                      objects to be displayed.")]),e._v(" "),n("p",[e._v("When used with "),n("code",[e._v(':children-async="true"')]),e._v(", it may return a Promise (ES2015) or be\n                        defined as an async function (ES2017).")])])]),e._v(" "),n("tr",[n("td",{staticClass:"properties-table__name"},[e._v("children-async")]),e._v(" "),n("td",{staticClass:"properties-table__type"},[n("code",[e._v("Boolean")])]),e._v(" "),n("td",{staticClass:"properties-table__default"},[n("code",[e._v("false")])]),e._v(" "),n("td",{staticClass:"properties-table__description"},[e._v("Enable async fetching of children.\n                    ")])]),e._v(" "),n("tr",[n("td",{staticClass:"properties-table__name"},[e._v("root-hidden")]),e._v(" "),n("td",{staticClass:"properties-table__type"},[n("code",[e._v("Boolean")])]),e._v(" "),n("td",{staticClass:"properties-table__default"},[n("code",[e._v("false")])]),e._v(" "),n("td",{staticClass:"properties-table__description"},[e._v("Hide the root node on the component view.\n                    ")])]),e._v(" "),n("tr",[n("td",{staticClass:"properties-table__name"},[e._v("label")]),e._v(" "),n("td",{staticClass:"properties-table__type"},[n("code",[e._v("String")])]),e._v(" "),n("td",{staticClass:"properties-table__default"},[n("code",[e._v("label")])]),e._v(" "),n("td",{staticClass:"properties-table__description"},[e._v("Property name from "),n("code",[e._v("data")]),e._v(" objects used as\n                      label.\n                    ")])]),e._v(" "),n("tr",[n("td",{staticClass:"properties-table__name"}),e._v(" "),n("td",{staticClass:"properties-table__type"},[n("code",[e._v("Function (node: TreeNode): String")])]),e._v(" "),n("td",{staticClass:"properties-table__default"}),e._v(" "),n("td",{staticClass:"properties-table__description"},[e._v("Function that returns the label for given node.\n                    ")])]),e._v(" "),n("tr",[n("td",{staticClass:"properties-table__name"},[e._v("leaf")]),e._v(" "),n("td",{staticClass:"properties-table__type"},[n("code",[e._v("String")])]),e._v(" "),n("td",{staticClass:"properties-table__default"},[n("code",[e._v("leaf")])]),e._v(" "),n("td",{staticClass:"properties-table__description"},[e._v("Property name from "),n("code",[e._v("data")]),e._v(" objects used as leaf\n                      property. If node is leaf, it's children won't be fetched.\n                    ")])]),e._v(" "),n("tr",[n("td",{staticClass:"properties-table__name"}),e._v(" "),n("td",{staticClass:"properties-table__type"},[n("code",[e._v("Function (node: TreeNode): String")])]),e._v(" "),n("td",{staticClass:"properties-table__default"}),e._v(" "),n("td",{staticClass:"properties-table__description"},[e._v("Function that returns the leaf property for given node.\n                      If node is leaf, it's children won't be fetched.\n                    ")])]),e._v(" "),n("tr",[n("td",{staticClass:"properties-table__name"},[e._v("opened")]),e._v(" "),n("td",{staticClass:"properties-table__type"},[n("code",[e._v("String")])]),e._v(" "),n("td",{staticClass:"properties-table__default"},[n("code",[e._v("opened")])]),e._v(" "),n("td",{staticClass:"properties-table__description"},[e._v("Property name from "),n("code",[e._v("data")]),e._v(" objects used as\n                      opened state.\n                    ")])]),e._v(" "),n("tr",[n("td",{staticClass:"properties-table__name"}),e._v(" "),n("td",{staticClass:"properties-table__type"},[n("code",[e._v("Function")])]),e._v(" "),n("td",{staticClass:"properties-table__default"}),e._v(" "),n("td",{staticClass:"properties-table__description"},[e._v("Function that returns initial opened state for given node.\n                    ")])]),e._v(" "),n("tr",[n("td",{staticClass:"properties-table__name"}),e._v(" "),n("td",{staticClass:"properties-table__type"},[n("code",[e._v("Object"),n("br"),e._v("{"),n("br"),e._v("  get: (node: TreeNode): Boolean,"),n("br"),e._v("  set: (node: TreeNode, opened: Boolean): void"),n("br"),e._v("}")])]),e._v(" "),n("td",{staticClass:"properties-table__default"}),e._v(" "),n("td",{staticClass:"properties-table__description"},[e._v("Object defining "),n("code",[e._v("get")]),e._v(" and "),n("code",[e._v("set")]),e._v("\n                      functions for opened state of given node. "),n("code",[e._v("get")]),e._v(" function returns initial opened state\n                      for given node, and "),n("code",[e._v("set")]),e._v(" function is invoked to update the state into the node when\n                      user interacts with the component view.\n                    ")])])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-xs-12"},[t("h2",[this._v("Themes")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-xs-12"},[t("h2",[this._v("Selection")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-xs-12"},[t("h2",[this._v("Edition")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-xs-12"},[t("h2",[this._v("Drag & Drop")])])])}]};t.a=a},"42Q/":function(e,t){},"4K4g":function(e,t){},C2d6:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(n("/5sW")),r=a(n("EZaA")),i=n("RPCP");t.default=s.default.extend({name:"VueTree",components:{VueTreeNode:r.default},props:{data:{type:Object,default:function(){return i.defaultRootNode}},children:{type:[Function,String],default:i.defaultTreeNodeChildrenLoader},childrenAsync:{type:Boolean,default:!1},label:{type:[Function,String],default:"label"},leaf:{type:[Function,String],default:"leaf"},opened:{type:[Object,Function,String,Boolean],default:function(){return!0}},rootHidden:{type:Boolean,default:!1}}}),e.exports=t.default},EZaA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("FTu2"),s=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);var i=n("b8DA"),l=function(e){n("4K4g")},o=n("VU/8")(s.a,i.a,!1,l,"data-v-9a1c20f6",null);t.default=o.exports},EqRA:function(e,t){},FTu2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{default:e}}(n("/5sW")),s=n("Vf1n"),r=n("RPCP");t.default=a.default.extend({name:"VueTreeNode",props:{data:{type:Object,default:function(){return r.defaultRootNode}},children:{type:[Function,String],default:r.defaultTreeNodeChildrenLoader},childrenAsync:{type:Boolean,default:!1},label:{type:[Function,String],default:"label"},leaf:{type:[Function,String],default:"leaf"},opened:{type:[Object,Function,String,Boolean],default:function(){return!0}},hidden:{type:Boolean,default:!1}},data:function(){return{childrenError:null,childrenLoading:!1,childrenLoaded:!1,childrenNodes:null,dataOpened:!1}},watch:{opened:{immediate:!0,handler:function(e){if(!0===e)this.computedOpened=e;else if((0,s.isString)(e))this.computedOpened=!0===this.data[e];else if((0,s.isObject)(e)&&"get"in e){var t=e;this.computedOpened=t.get(this.data)}else if((0,s.isFunction)(e)){var n=e;this.computedOpened=n(this.data)}}}},computed:{childrenFunction:function(){if((0,s.isString)(this.children)){var e=function(e){return e[t.children]},t=this;return e}return this.children},childrenAsyncFunction:function(){return this.children},dataLabel:function(){return(0,s.isString)(this.label)?this.data[this.label]:this.label(this.data)},dataLeafFromProperty:function(){return(0,s.isString)(this.leaf)?this.data[this.leaf]:this.leaf(this.data)},dataLeaf:function(){return this.childrenAsync?this.dataLeafFromProperty:(this.childrenLoaded||this.loadChildren(),!this.childrenNodes||this.childrenNodes.length<=0)},computedOpened:{get:function(){return this.dataOpened},set:function(e){var t=this;e&&!this.childrenNodes?this.childrenAsync?this.loadChildrenAsync().then(function(){t.dataOpened=e}):(this.loadChildren(),this.dataOpened=e):this.dataOpened=e,this.$emit("opened",this.data)}}},methods:{toggleClicked:function(){this.dataLeaf||(this.computedOpened=!this.computedOpened)},loadChildren:function(){if(!this.dataLeafFromProperty){var e=this.childrenFunction;return this.childrenNodes=e(this.data),this.childrenNodes}},loadChildrenAsync:function(){var e=this;if(this.dataLeafFromProperty)return Promise.resolve();this.childrenLoading=!0,this.childrenError=null;var t=(0,this.childrenAsyncFunction)(this.data);return t||(t=Promise.resolve(null)),t.then(function(t){return e.childrenNodes=t,e.childrenLoading=!1,e.childrenLoaded=!0,t}).catch(function(t){throw e.childrenNodes=null,e.childrenError=t,e.childrenLoading=!1,e.childrenLoaded=!1,t})}}}),e.exports=t.default},G8ay:function(e,t){},GIry:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("gL8S"),s=n("k4gD"),r=n("iAmB"),i=n("OWW9"),l=n("TEqo");t.default={simple:a,defaultObjectProperties:s,customObjectProperties:r,functionalObjectProperties:i,asyncChildren:l},e.exports=t.default},IBUo:function(e,t,n){"use strict";var a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"page-header"},[t("h1",[this._v("Vue Tree")]),this._v(" "),t("div",{staticClass:"col-xs-12 text-center"},[t("router-link",{staticClass:"btn btn-lg btn-primary",attrs:{to:{name:"Docs"}}},[t("i",{staticClass:"fa fa-book",attrs:{"aria-hidden":"true"}}),this._v(" Docs")]),this._v(" "),this._m(0)],1)]),this._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-4 col-md-4"},[t("div",{staticClass:"well sample-tree-container"},[t("vue-tree")],1)])]),this._v(" "),t("div",{staticClass:"row"})])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{staticClass:"btn btn-lg btn-default",attrs:{href:"https://github.com/pragmasphere/vue-tree"}},[t("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}}),this._v(" Github")])}]};t.a=a},MLHs:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("e/gD"),s=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);var i=n("iXVb"),l=function(e){n("X02Q")},o=n("VU/8")(s.a,i.a,!1,l,null,null);t.default=o.exports},OIgX:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(n("/5sW")),r=a(n("/ocq")),i=a(n("T/em")),l=a(n("eFzi"));s.default.use(r.default),t.default=new r.default({routes:[{path:"/",name:"Main",component:i.default},{path:"/docs",name:"Docs",component:l.default}]}),e.exports=t.default},OWW9:function(e,t){e.exports="<template>\n  <vue-tree :data=\"data\"\n            :label=\"getLabel\"\n            :children=\"getChildren\">\n  </vue-tree>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        data: {\n          label: 'Root',\n          children: [\n            { label: 'A' },\n            {\n              label: 'B', nodes: [\n                { text: 'B.1' },\n                { text: 'B.2' },\n                { text: 'B.3' }\n              ]\n            },\n            { label: 'C' }\n          ]\n        }\n      }\n    },\n    methods: {\n      getLabel (node) {\n        const children = this.getChildren(node)\n        let label = node.label || node.text\n        if (children) {\n          label += ` (${children.length} children)`\n        }\n        return label\n      },\n      getChildren (node) {\n        return node.children || node.nodes\n      }\n    },\n    components: {\n      VueTree\n    }\n  }\n<\/script>\n"},RFt4:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(n("/5sW")),r=a(n("wCtV")),i=a(n("GIry"));t.default=s.default.extend({components:{VueTree:r.default},data:function(){return{examples:i.default,scope:{VueTree:r.default}}}}),e.exports=t.default},RPCP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultTreeNodeChildrenLoader=function(e){return e.children};t.defaultRootNode={label:"Vue Tree",children:[{label:"Category #1",children:[{label:"Item #1"},{label:"Item #2"},{label:"Item #3"}]},{label:"Category #2",children:[{label:"Item #A"},{label:"Item #B"},{label:"Item #C"}]}]}},"T/em":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("YR+/"),s=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);var i=n("IBUo"),l=function(e){n("hzmf")},o=n("VU/8")(s.a,i.a,!1,l,null,null);t.default=o.exports},TEqo:function(e,t){e.exports="<template>\n  <vue-tree :data=\"data\"\n            :opened=\"false\"\n            :children-async=\"true\"\n            :children=\"loadChildren\">\n  </vue-tree>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        data: {\n          label: 'Root'\n        }\n      }\n    },\n    methods: {\n      loadChildren (node) {\n        return new Promise(function (resolve, reject) {\n          window.setTimeout(() => {\n            resolve([\n              { label: 'A' },\n              { label: 'B' },\n              { label: 'C' }\n            ])\n          }, 500)\n        })\n      }\n    },\n    components: {\n      VueTree\n    }\n  }\n<\/script>\n"},UKpo:function(e,t){},Vf1n:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.isString=function(e){return"string"==typeof e},t.isObject=function(e){return"object"===(void 0===e?"undefined":a(e))},t.isFunction=function(e){return"function"==typeof e}},X02Q:function(e,t){},"YR+/":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(n("/5sW")),r=a(n("wCtV"));t.default=s.default.extend({components:{VueTree:r.default},data:function(){return{loaderProps:{value:{label:"Test"},children:function(e){return"Test"===e.label?[{label:"Cat #1"},{label:"Cat #2"}]:"Cat #1"===e.label?[{label:"#1"},{label:"#2"},{label:"#3"},{label:"#4"}]:"Cat #2"===e.label?[{label:"#A"},{label:"#B"},{label:"#C"}]:void 0}}}}}),e.exports=t.default},b8DA:function(e,t,n){"use strict";var a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"vue-tree__tree-node",class:{"vue-tree__tree-node--hidden":e.hidden}},[e.data&&!e.hidden?n("span",{staticClass:"vue-tree__tree-node-content"},[e.childrenLoading?e._e():n("span",{staticClass:"vue-tree__tree-node-toggle",class:{"vue-tree__tree-node-toggle--disabled":e.dataLeaf},attrs:{disabled:e.dataLeaf},on:{click:e.toggleClicked}},[e.dataLeaf?n("span",[e._v("[x]")]):[e.computedOpened?n("span",[e._v("[-]")]):n("span",[e._v("[+]")]),e._v(" "),e.childrenLoading?n("span",[e._v("[*]")]):e._e()]],2),e._v(" "),e._t("status-loading",[e.childrenLoading?n("span",{staticClass:"vue-tree__tree-node-status vue-tree__tree-node-status--loading"},[e._v("\n        [?]\n      ")]):e._e()]),e._v(" "),e._t("status-error",[e.childrenError?n("span",{staticClass:"vue-tree__tree-node-status vue-tree__tree-node-status--error"},[e._v("\n        [!]\n      ")]):e._e()]),e._v(" "),n("span",{staticClass:"vue-tree-label"},[e._v("\n      "+e._s(e.dataLabel)+"\n    ")])],2):e._e(),e._v(" "),n("ul",{staticClass:"vue-tree__tree-node-children"},[e.childrenLoading?n("li",{staticClass:"vue-tree__tree-node-status-message vue-tree__tree-node-status-message--loading"},[n("span",{staticClass:"vue-tree__tree-node-status vue-tree__tree-node-status--loading"},[e._v("[?]")]),e._v(" Loading ...\n    ")]):e._e(),e._v(" "),e.childrenError?n("li",{staticClass:"vue-tree__tree-node-status-message vue-tree__tree-node-status-message--error"},[n("span",{staticClass:"vue-tree__tree-node-status vue-tree__tree-node-status--error"},[e._v("\n        [!] "+e._s(e.childrenError)+"\n      ")])]):e._e(),e._v(" "),e._l(e.childrenNodes,function(t){return e.computedOpened?[n("vue-tree-node",{attrs:{data:t,"children-async":e.childrenAsync,children:e.children,opened:e.opened,label:e.label,leaf:e.leaf}})]:e._e()})],2)])},staticRenderFns:[]};t.a=a},bF3y:function(e,t){},"e/gD":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{default:e}}(n("/5sW"));t.default=a.default.extend({}),e.exports=t.default},eFzi:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("RFt4"),s=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);var i=n("10B3"),l=function(e){n("EqRA")},o=n("VU/8")(s.a,i.a,!1,l,"data-v-35c698d0",null);t.default=o.exports},gL8S:function(e,t){e.exports="<template>\n  <vue-tree></vue-tree>\n</template>\n\n<script>\n  export default {\n    components: {\n      VueTree\n    }\n  }\n<\/script>\n"},hzmf:function(e,t){},iAmB:function(e,t){e.exports="<template>\n  <vue-tree :data=\"data\"\n            label=\"text\"\n            children=\"nodes\">\n  </vue-tree>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        data: {\n          text: 'Root',\n          nodes: [\n            { text: 'A' },\n            {\n              text: 'B', nodes: [\n                { text: 'B.1' },\n                { text: 'B.2' },\n                { text: 'B.3' }\n              ]\n            },\n            { text: 'C' }\n          ]\n        }\n      }\n    },\n    components: {\n      VueTree\n    }\n  }\n<\/script>\n"},iXVb:function(e,t,n){"use strict";var a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};t.a=a},k4gD:function(e,t){e.exports="<template>\n  <vue-tree :data=\"data\">\n  </vue-tree>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        data: {\n          label: 'Root',\n          children: [\n            { label: 'A' },\n            {\n              label: 'B', children: [\n                { label: 'B.1' },\n                { label: 'B.2' },\n                { label: 'B.3' }\n              ]\n            },\n            { label: 'C' }\n          ]\n        }\n      }\n    },\n    components: {\n      VueTree\n    }\n  }\n<\/script>\n"},lGVK:function(e,t){},p6QG:function(e,t,n){"use strict";var a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("ul",{staticClass:"vue-tree"},[t("vue-tree-node",{staticClass:"vue-tree__root",attrs:{data:this.data,"children-async":this.childrenAsync,children:this.children,hidden:this.rootHidden,opened:this.opened,label:this.label,leaf:this.leaf}})],1)},staticRenderFns:[]};t.a=a},wCtV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("C2d6"),s=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);var i=n("p6QG"),l=function(e){n("42Q/")},o=n("VU/8")(s.a,i.a,!1,l,null,null);t.default=o.exports},x1wU:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var s=a(n("/5sW"));n("lGVK"),n("G8ay");var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("ijY1")),i=a(n("Z7tN"));n("UKpo"),n("bF3y");var l=a(n("Pev7")),o=a(n("5CJf")),d=a(n("MLHs")),c=a(n("OIgX")),u=a(n("wCtV"));s.default.config.productionTip=!1,s.default.use(r),s.default.use(i.default,{theme:"neo"}),s.default.use(l.default,{allowNoActive:!0}),s.default.use(o.default),s.default.component("vue-tree",u.default),new s.default({router:c.default,el:"#app",render:function(e){return e(d.default)}})}},["x1wU"]);
//# sourceMappingURL=app.31a31e12d31282034d18.js.map