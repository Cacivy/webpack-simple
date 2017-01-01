import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.user(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/'
        }
    ]
})