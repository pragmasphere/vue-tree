import Vue from 'vue'

require('font-awesome/scss/font-awesome.scss')
require('./styles/bootstrap-theme.scss')

// @ts-ignore: Missing type definitions
import * as uiv from 'uiv'
// @ts-ignore: Missing type definitions
import Vuep from 'vuep'
require('vuep/dist/vuep.css')
require('codemirror/theme/neo.css')
// @ts-ignore: Missing type definitions
import Scrollspy from 'vue2-scrollspy'
// @ts-ignore: Missing type definitions
import VueHighlightJS from 'vue-highlightjs'

import App from './App.vue'
import router from './router'
import VueTree from '@/VueTree.vue'

Vue.config.productionTip = false

Vue.use(uiv)
Vue.use(Vuep, { theme: 'neo' })
Vue.use(Scrollspy, {allowNoActive: true})
Vue.use(VueHighlightJS)

Vue.component('vue-tree', VueTree)

// tslint:disable-next-line:no-unused-expression
new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
})
