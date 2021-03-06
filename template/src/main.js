import Vue from 'vue'
import router from './router'
import store from './vuex'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import './assets/styles/style.scss'

sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
