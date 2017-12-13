(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"), require("vue-class-component"), require("vue-property-decorator"));
	else if(typeof define === 'function' && define.amd)
		define("VueTree", ["vue", "vue-class-component", "vue-property-decorator"], factory);
	else if(typeof exports === 'object')
		exports["VueTree"] = factory(require("vue"), require("vue-class-component"), require("vue-property-decorator"));
	else
		root["VueTree"] = factory(root["vue"], root["vue-class-component"], root["vue-property-decorator"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultTreeNodeChildrenLoader = defaultTreeNodeChildrenLoader;
function defaultTreeNodeChildrenLoader(parent) {
    return parent.children;
}
var defaultRootNode = exports.defaultRootNode = {
    label: 'Vue Tree',
    children: [{
        label: 'Category #1', children: [{ label: 'Item #1' }, { label: 'Item #2' }, { label: 'Item #3' }]
    }, {
        label: 'Category #2', children: [{ label: 'Item #A' }, { label: 'Item #B' }, { label: 'Item #C' }]
    }]
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VueTree = __webpack_require__(6);

var _VueTree2 = _interopRequireDefault(_VueTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _VueTree2.default;
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_ts_loader_transpileOnly_false_appendTsSuffixTo_VueTree_ts__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_ts_loader_transpileOnly_false_appendTsSuffixTo_VueTree_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_ts_loader_transpileOnly_false_appendTsSuffixTo_VueTree_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72878c96_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_VueTree_vue__ = __webpack_require__(14);
function injectStyle (ssrContext) {
  __webpack_require__(7)
}
var normalizeComponent = __webpack_require__(0)
/* script */
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_ts_loader_transpileOnly_false_appendTsSuffixTo_VueTree_ts___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72878c96_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_VueTree_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _vueClassComponent = __webpack_require__(2);

var _vueClassComponent2 = _interopRequireDefault(_vueClassComponent);

var _VueTreeNode = __webpack_require__(9);

var _VueTreeNode2 = _interopRequireDefault(_VueTreeNode);

var _vuePropertyDecorator = __webpack_require__(3);

var _defaults = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VueTree = function (_Vue) {
    _inherits(VueTree, _Vue);

    function VueTree() {
        _classCallCheck(this, VueTree);

        return _possibleConstructorReturn(this, (VueTree.__proto__ || Object.getPrototypeOf(VueTree)).apply(this, arguments));
    }

    return VueTree;
}(_vue2.default);
__decorate([(0, _vuePropertyDecorator.Prop)({
    type: Object, default: function _default() {
        return _defaults.defaultRootNode;
    }
})], VueTree.prototype, "value", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: [Function, String], default: _defaults.defaultTreeNodeChildrenLoader })], VueTree.prototype, "children", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, default: false })], VueTree.prototype, "childrenAsync", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: [Function, String], default: 'label' })], VueTree.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: [Function, String], default: 'leaf' })], VueTree.prototype, "leaf", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({
    type: [Object, Function, String, Boolean], default: function _default() {
        return true;
    }
})], VueTree.prototype, "opened", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({
    type: Boolean, default: false
})], VueTree.prototype, "rootHidden", void 0);
VueTree = __decorate([(0, _vueClassComponent2.default)({
    components: { VueTreeNode: _VueTreeNode2.default }
})], VueTree);
exports.default = VueTree;
module.exports = exports["default"];

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_ts_loader_transpileOnly_false_appendTsSuffixTo_VueTreeNode_ts__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_ts_loader_transpileOnly_false_appendTsSuffixTo_VueTreeNode_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_ts_loader_transpileOnly_false_appendTsSuffixTo_VueTreeNode_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54a496d1_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_VueTreeNode_vue__ = __webpack_require__(13);
function injectStyle (ssrContext) {
  __webpack_require__(10)
}
var normalizeComponent = __webpack_require__(0)
/* script */
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-54a496d1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_ts_loader_transpileOnly_false_appendTsSuffixTo_VueTreeNode_ts___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54a496d1_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_VueTreeNode_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _vueClassComponent = __webpack_require__(2);

var _vueClassComponent2 = _interopRequireDefault(_vueClassComponent);

var _vuePropertyDecorator = __webpack_require__(3);

var _utils = __webpack_require__(12);

var _defaults = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VueTreeNode = function (_Vue) {
    _inherits(VueTreeNode, _Vue);

    function VueTreeNode() {
        _classCallCheck(this, VueTreeNode);

        var _this = _possibleConstructorReturn(this, (VueTreeNode.__proto__ || Object.getPrototypeOf(VueTreeNode)).apply(this, arguments));

        _this.childrenError = null;
        _this.childrenLoading = false;
        _this.childrenLoaded = false;
        _this.childrenNodes = null;
        _this.dataOpened = false;
        return _this;
    }

    _createClass(VueTreeNode, [{
        key: "onOpenedChanged",
        value: function onOpenedChanged(opened) {
            if (opened === true) {
                this.computedOpened = opened;
            } else if ((0, _utils.isString)(opened)) {
                this.computedOpened = this.value[opened] === true;
            } else if ((0, _utils.isObject)(opened) && 'get' in opened) {
                var openedAccessor = opened;
                this.computedOpened = openedAccessor.get(this.value);
            } else if ((0, _utils.isFunction)(opened)) {
                var openedGetter = opened;
                this.computedOpened = openedGetter(this.value);
            }
        }
    }, {
        key: "loadChildren",
        value: function loadChildren() {
            var loader = this.childrenFunction;
            this.childrenNodes = loader(this.value);
        }
    }, {
        key: "loadChildrenAsync",
        value: function loadChildrenAsync() {
            var _this2 = this;

            this.childrenLoading = true;
            this.childrenError = null;
            var loader = this.childrenAsyncFunction;
            var promise = loader(this.value);
            if (!promise) {
                promise = Promise.resolve(undefined);
            }
            return promise.then(function (children) {
                _this2.childrenNodes = children;
                _this2.childrenLoading = false;
                _this2.childrenLoaded = true;
            }).catch(function (error) {
                _this2.childrenNodes = null;
                _this2.childrenError = error;
                _this2.childrenLoading = false;
                _this2.childrenLoaded = false;
            });
        }
    }, {
        key: "childrenFunction",
        get: function get() {
            if ((0, _utils.isString)(this.children)) {
                var namedLoader = function namedLoader(parent) {
                    return parent[vm.children];
                };

                var vm = this;

                return namedLoader;
            }
            return this.children;
        }
    }, {
        key: "childrenAsyncFunction",
        get: function get() {
            return this.children;
        }
    }, {
        key: "valueLabel",
        get: function get() {
            if ((0, _utils.isString)(this.label)) {
                return this.value[this.label];
            } else {
                return this.label(this.value);
            }
        }
    }, {
        key: "valueLeaf",
        get: function get() {
            if (!this.childrenAsync) {
                if (!this.childrenLoaded) {
                    this.loadChildren();
                }
                return !this.childrenNodes || this.childrenNodes.length <= 0;
            }
            if ((0, _utils.isString)(this.leaf)) {
                return this.value[this.leaf];
            } else {
                return this.leaf(this.value);
            }
        }
    }, {
        key: "computedOpened",
        get: function get() {
            return this.dataOpened;
        },
        set: function set(opened) {
            var _this3 = this;

            if (opened && !this.childrenNodes) {
                if (this.childrenAsync) {
                    this.loadChildrenAsync().then(function () {
                        _this3.dataOpened = opened;
                    });
                } else {
                    this.loadChildren();
                    this.dataOpened = opened;
                }
            } else {
                this.dataOpened = opened;
            }
            this.$emit('opened', this.value);
        }
    }]);

    return VueTreeNode;
}(_vue2.default);
__decorate([(0, _vuePropertyDecorator.Prop)({
    type: Object, default: function _default() {
        return _defaults.defaultRootNode;
    }
})], VueTreeNode.prototype, "value", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: [Function, String], default: _defaults.defaultTreeNodeChildrenLoader })], VueTreeNode.prototype, "children", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, default: false })], VueTreeNode.prototype, "childrenAsync", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: [Function, String], default: 'label' })], VueTreeNode.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: [Function, String], default: 'leaf' })], VueTreeNode.prototype, "leaf", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({
    type: [Object, Function, String, Boolean], default: function _default() {
        return true;
    }
})], VueTreeNode.prototype, "opened", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, default: false })], VueTreeNode.prototype, "hidden", void 0);
__decorate([(0, _vuePropertyDecorator.Watch)('opened', { immediate: true })], VueTreeNode.prototype, "onOpenedChanged", null);
VueTreeNode = __decorate([(0, _vueClassComponent2.default)({})], VueTreeNode);
exports.default = VueTreeNode;
module.exports = exports["default"];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isString = isString;
exports.isObject = isObject;
exports.isFunction = isFunction;
function isString(val) {
    return typeof val === 'string';
}
function isObject(val) {
    return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
}
function isFunction(val) {
    return typeof val === 'function';
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"vue-tree__tree-node",class:{'vue-tree__tree-node--hidden': _vm.hidden}},[(!!_vm.value && !_vm.hidden)?_c('span',{staticClass:"vue-tree__tree-node-content"},[(!_vm.childrenLoading)?_c('span',{staticClass:"vue-tree__tree-node-toggle",attrs:{"disabled":_vm.valueLeaf},on:{"click":function($event){_vm.computedOpened = !_vm.computedOpened}}},[(_vm.valueLeaf)?_c('span',[_vm._v("[x]")]):[(!_vm.computedOpened)?_c('span',[_vm._v("[+]")]):_c('span',[_vm._v("[-]")]),_vm._v(" "),(_vm.childrenLoading)?_c('span',[_vm._v("[*]")]):_vm._e()]],2):_vm._e(),_vm._v(" "),(_vm.childrenLoading)?_c('span',{staticClass:"vue-tree__tree-node-toggle-loading"},[_vm._v("\n      [?]\n    ")]):_vm._e(),_vm._v(" "),(_vm.childrenError)?_c('span',{staticClass:"vue-tree__tree-node-status vue-tree__tree-node-status--error"},[_vm._v("\n      [!]\n    ")]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"vue-tree-label"},[_vm._v("\n      "+_vm._s(_vm.valueLabel)+"\n    ")])]):_vm._e(),_vm._v(" "),_c('ul',{staticClass:"vue-tree__tree-node-children"},[(_vm.childrenLoading)?_c('li',{staticClass:"vue-tree-node vue-tree-status vue-tree-loading-text"},[_vm._v("Loading ...")]):_vm._e(),_vm._v(" "),(_vm.childrenError)?_c('li',{staticClass:"vue-tree-node vue-tree-status vue-tree-error-text"},[_vm._v("Error: "+_vm._s(_vm.childrenError))]):_vm._e(),_vm._v(" "),_vm._l((_vm.childrenNodes),function(child){return (_vm.computedOpened)?[_c('vue-tree-node',{attrs:{"value":child,"children":_vm.children,"children-async":_vm.childrenAsync,"label":_vm.label,"leaf":_vm.leaf}})]:_vm._e()})],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"vue-tree"},[_c('vue-tree-node',{staticClass:"vue-tree__root",attrs:{"hidden":_vm.rootHidden,"value":_vm.value,"children":_vm.children,"children-async":_vm.childrenAsync,"label":_vm.label,"leaf":_vm.leaf}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-tree.js.map