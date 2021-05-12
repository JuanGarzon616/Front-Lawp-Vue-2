import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: JSON.parse(localStorage.getItem("token")),
    User: JSON.parse(localStorage.getItem("user")),
    Business: JSON.parse(localStorage.getItem("business"))


  },
  mutations: {

  },
  actions: {

  },
  modules: {

  }
})
