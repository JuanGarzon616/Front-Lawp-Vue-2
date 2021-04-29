import Vue from 'vue'
//import Swal from "sweetalert2";
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from "vuelidate/src";
import '../public/styles.css'

Vue.use(Vuelidate)
//Vue.use(Swal)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
