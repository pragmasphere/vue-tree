import Vue from 'vue'

import App from './App.vue'
import router from './router'

import 'font-awesome/scss/font-awesome.scss'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css'
// @ts-ignore: Missing type definitions
import * as uiv from 'uiv'

Vue.use(uiv)

import VueTree from '@/VueTree.vue'
Vue.component('vue-tree', VueTree)

// @ts-ignore: Missing type definitions
import Vuep from 'vuep'
import 'vuep/dist/vuep.css'
import 'codemirror/theme/neo.css'

Vue.use(Vuep, { theme: 'neo' })

// tslint:disable-next-line:no-unused-expression
new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
})
