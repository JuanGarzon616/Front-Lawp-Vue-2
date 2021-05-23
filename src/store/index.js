import Vue from 'vue'
import Vuex from 'vuex'
import UsersModules from "@/store/modules/UsersModules"
import BusinessModules from "@/store/modules/BusinessModules"
import OtherModules from "@/store/modules/OtherModules"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: JSON.parse(localStorage.getItem("token")),
    User: localStorage.getItem("user"),

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    a: UsersModules,
    b: BusinessModules,
    c: OtherModules
  },
  getters: {
    uToken: state => {
      return state.token
    },
    user: (state) => state.User,
    business: (state) => state.token,
  }
})
