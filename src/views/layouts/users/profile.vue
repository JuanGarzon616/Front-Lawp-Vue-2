<template>
  <div class="max-w-screen flex md:flex-row-reverse flex-col ">

    <div class="w-full ">
        <span>
          <userHeader class="z-20"></userHeader>
        </span>
      <div class="pl-0 pt-36 md:pl-24 min-h-screen bg-gray-200 flex flex-col">
        <div class="bg-white w-11/12 p-20">
          <div class="flex">
            <img class="h-52 border-2 border-gray-700 rounded-full z-0 lg:z-10" v-bind:src="image" alt="si">
            <div class="pl-10">
              <div class="">
                <h1>Nombre</h1>
                <p class="text-3xl">{{name}} {{lname}}</p>
              </div>
              <div class="pt-10">
                <h1>Mail</h1>
                <p class="text-3xl">{{mail}}</p>
              </div>
              <div class="pt-10">
                <h1>Documento</h1>
                <p class="text-3xl">{{cc}}</p>
              </div>
              <div class="pt-10">
                <h1>Telefono 1</h1>
                <p class="text-3xl">{{t1}}</p>
              </div>
              <div class="pt-10">
                <h1>Telefono 2</h1>
                <p class="text-3xl">{{t2}}</p>
              </div>
              <div class="pt-10">
                <h1>Direccion </h1>
                <p class="text-3xl">{{dir}}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <span>
        <p class="md:w-60 w-0 md:min-h-screen h-0" v-if="this.$store.getters.bar"></p>
      </span>
    <span class="fixed inset-x-0 top-16 z-0">
        <task v-if="this.$store.getters.bar"></task>
      </span>
  </div>
</template>

<script>
import userHeader from "@/components/UserComponents/header";
import task from "@/components/UserComponents/task";

export default {
  name: "profile",
  data() {
    return {
      image: JSON.parse(localStorage.getItem('user')).image,
      name: JSON.parse(localStorage.getItem('user')).names,
      lname: JSON.parse(localStorage.getItem('user')).last_names,
      mail: JSON.parse(localStorage.getItem('user')).mail,
      cc: JSON.parse(localStorage.getItem('user')).document,
      t1: JSON.parse(localStorage.getItem('user')).tellephone1,
      t2: JSON.parse(localStorage.getItem('user')).tellephone2,
      dir: JSON.parse(localStorage.getItem('user')).direcction,
    }
  },
  components: {
    userHeader,
    task,
  }
}
</script>

<style scoped>

</style>