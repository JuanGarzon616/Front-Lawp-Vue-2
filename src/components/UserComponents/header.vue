<template>
  <div class="w-full flex justify-between flex-wrap items-center h-16 bg-gradient-to-r from-gray-900 via-blue-200 to-blue-50 pr-9 ">

    <p class="h-full pl-4 flex items-center"><i class="fas fa-bars fa-2x"></i></p>
    <nav class="flex flex-wrap items-center">
      <div class="flex flex-col text-right pr-4">
        <b>{{name}} {{lname}}</b>
        <a href="">Salir.</a>
      </div>

      <img class="h-12 rounded-full border-4 border-blue-200" v-bind:src=image alt="">
    </nav>


  </div>
</template>

<script>
export default {
  name: "user-header",
  data(){
    return{
      image: JSON.parse(localStorage.getItem('user')).image,
      name: JSON.parse(localStorage.getItem('user')).names,
      lname: JSON.parse(localStorage.getItem('user')).last_names
    }
  },
  methods:{
    hola(){
      console.log(JSON.parse(localStorage.getItem('user')).image)
    }
  }
}
// flex-wrap
</script>

<style scoped>

</style>