<template>
  <div class="max-w-screen flex md:flex-row-reverse flex-col ">

    <div class="w-full ">
        <span>
          <userHeader class="z-20"></userHeader>
        </span>
      <div class="pl-0 pt-36 md:pl-24 min-h-screen bg-gray-200 flex flex-col">
        <div class="bg-white w-11/12 p-20 rounded-lg mb-20">
          <form>
            <div class="flex">

              <div class="flex flex-col z-0 lg:z-10">
                <img class="h-52 border-2 border-gray-700 rounded-full z-0 lg:z-10" v-bind:src="image" alt="si"
                     >
                <input type="file" class="inputs z-0 lg:z-10 w-44" @change="upImg">
                <!--                <img class="h-52 border-2 border-gray-700 rounded-full z-0 lg:z-10" v-bind:src="ima">-->
                <p v-on:click="prueba">qwerwqer</p>
                <input class="text-gray-200 bg-gray-700 hover:bg-gray-500 rounded p-3 mt-10 z-0 lg:z-10" type="submit"
                       value="Guardar">
              </div>
              <div class="pl-10 z-0 lg:z-10">
                <div>
                  <h1 class="text-3xl">Nombres</h1>
                  <input class="inputs" type="text" v-model="name">
                </div>
                <div>
                  <h1 class="text-3xl pt-10">Apellidos</h1>
                  <input class="inputs" type="text" v-model="lname">
                </div>
                <div>
                  <h1 class="text-3xl pt-10">Mail</h1>
                  <input class="inputs" type="text" v-model="mail">
                </div>
                <div>
                  <h1 class="text-3xl pt-10">Documento</h1>
                  <input class="inputs" type="text" v-model="cc">
                </div>
                <div>
                  <h1 class="text-3xl pt-10">Telefono 1</h1>
                  <input class="inputs" type="text" v-model="t1">
                </div>
                <div>
                  <h1 class="text-3xl pt-10">Telefono 2</h1>
                  <input class="inputs" type="text" v-model="t2">
                </div>
                <div>
                  <h1 class="text-3xl pt-10">Direccion </h1>
                  <input class="inputs" type="text" v-model="dir">

                </div>
              </div>
            </div>
          </form>
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
  name: "edituser",
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
      ima: [],
    }
  },
  components: {
    userHeader,
    task,
  },
  methods: {
    prueba() {
      console.log(this.ima)
    },
    upImg(event) {
      const img = event.target.files
      let imgsize = img[0].size
      //100000


      this.image = URL.createObjectURL(img[0]);
      console.log(imgsize)
      this.ima = img[0]
    }
  }
}
</script>

<style scoped>

</style>