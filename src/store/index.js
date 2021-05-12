import Vue from 'vue'
import Vuex from 'vuex'
import UsersModules from "@/store/modules/UsersModules"
import BusinessModules from "@/store/modules/BusinessModules"
import OtherModules from "@/store/modules/OtherModules"

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
    a: UsersModules,
    b: BusinessModules,
    c: OtherModules
  },
  getters: {


  }
})
