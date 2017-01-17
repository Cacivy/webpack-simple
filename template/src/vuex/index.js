import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loading: false
}

const getters = {

}

const mutations = {
  LOADING (state) {
    this.loading = !this.loading
  }
}

const actions = {
  loading ({commit}) {
    commit('LOADING')
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: true
});