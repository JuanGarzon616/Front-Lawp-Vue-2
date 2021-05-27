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
    rol: ({state}) =>{
      if(state.User){
        return JSON.parse(state.user).is_admin
      }
    },
    bar: false,
    pqrOptions: false,
    userOptions: false
  },
  mutations: {
    setPqr: (state) => (state.pqrOptions = !state.pqrOptions),
    setBar: (state) => (state.bar = !state.bar),
    setUserOp: (state) => (state.userOptions = !state.userOptions),
  },
  actions: {
    changeBar({commit}){
      commit('setBar')
    },
    changePqr({commit}){
      commit("setPqr")
    },
    changeUserOp({commit}){
      commit('setUserOp')
    },
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
    rol: (state) => state.rol,
    user: (state) => state.User,
    business: (state) => state.token,
    bar: (state) => state.bar,
    pqr: (state) => state.pqrOptions,
    userOp: (state) => state.userOptions,
  }
})
