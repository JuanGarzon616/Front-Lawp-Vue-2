<template>
  <div class="flex justify-end flex-wrap content-center h-16 bg-gradient-to-r from-blue-200 via-blue-200 to-blue-50 pr-9 ">
    <img class="h-5/6 rounded-full border-4 border-blue-200" v-bind:src=image alt="">
  </div>
</template>

<script>
export default {
  name: "user-header",
  data(){
    return{
      image: JSON.parse(localStorage.getItem('user')).image
    }
  },
  methods:{
    hola(){
      console.log(JSON.parse(localStorage.getItem('user')).image)
    }
  }
}
</script>

<style scoped>

</style>