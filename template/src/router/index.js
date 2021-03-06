import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import index from '../page/index'
import home from '../page/home'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})