import Vue from 'vue'
import Router from 'vue-router'
import Main from '~/components/Main'
import Docs from '~/components/Docs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/docs',
      name: 'Docs',
      component: Docs
    }
  ]
})
