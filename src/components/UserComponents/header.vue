<template>
  <div class="fixed top-0 inset-x-0 w-full flex justify-between flex-wrap items-center h-16 bg-gradient-to-r from-gray-900 via-gray-700 to-blue-50 pr-9 ">

    <p v-on:click="bar" class="hover:bg-gray-700 rounded-full h-full p-4 flex items-center text-gray-400"><i class="fas fa-bars fa-2x"></i></p>
    <nav class="flex flex-wrap items-center">
      <div class="flex flex-col text-right pr-4">
        <b>{{name.toUpperCase()}}</b>
        <router-link  to="/"><p v-on:click="destroy">Salir <i class="fas fa-sign-out-alt"></i></p></router-link>
      </div>

      <img class="h-12 rounded-full border-4 border-blue-200" v-bind:src=image alt="">
    </nav>


  </div>
</template>

<script>
//import store from 'vuex'

import {mapActions} from "vuex";

export default {
  name: "user-header",
  data(){
    return{
      image: JSON.parse(localStorage.getItem('user')).image,
      name: JSON.parse(localStorage.getItem('user')).names,
      lname: JSON.parse(localStorage.getItem('user')).last_names
    }
  },
  methods: {
    ...mapActions(['changeBar']),
    destroy(){
      localStorage.clear()
    },
    bar(){
      this.changeBar()
    }
  }
}
// flex-wrap
</script>

<style scoped>

</style>