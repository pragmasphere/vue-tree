import Vue from 'vue'
import Router from 'vue-router'
import Main from '#/components/Main.vue'
import Docs from '#/components/Docs.vue'

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
