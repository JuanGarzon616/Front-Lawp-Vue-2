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
    /*Rol: ({state}) => {
      if (state.User){
        if(JSON.parse(localStorage.getItem('user')).is_admin===null){
          return 3
        }
        else{
          return JSON.parse(localStorage.getItem('user')).is_admin
        }
      },

    },*/
    Rol: JSON.parse(localStorage.getItem('user')),
    Business: JSON.parse(localStorage.getItem("business")),
    userAuthenticated: '',
    businessAuthenticated: '',
    adminAuthenticated: '',

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
    user: (state) => state.token,
    business: (state) => state.token,
    rol: (state) => state.Rol
  }
})
