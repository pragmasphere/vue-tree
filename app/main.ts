import Vue from 'vue'

import './hooks' // This must be imported before any component

import App from './App.vue'
import router from './router'

import 'font-awesome/scss/font-awesome.scss'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css'
import * as uiv from 'uiv'

Vue.use(uiv)

// tslint:disable-next-line:no-unused-expression
new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
})
