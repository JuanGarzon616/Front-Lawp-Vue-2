<template>
  <div class="max-w-screen flex md:flex-row-reverse flex-col ">

    <div class="w-full ">
        <span>
          <userHeader class="z-20"></userHeader>
        </span>
      <div class="pl-0 pt-36 md:pl-24 min-h-screen bg-gray-200 flex flex-col">
        <div class="bg-white w-11/12 p-20 rounded-lg mb-20">
          <form v-on:submit.prevent="submit">
            <div class="flex">

              <div class="flex flex-col z-0 lg:z-10">
                <img class="h-52 border-2 border-gray-700 rounded-full z-0 lg:z-10" v-bind:src="image" alt="si">
                <p v-on:click="prueba">Cambiar Imagen</p>
                <input type="file" class="inputs z-0 lg:z-10 w-44" @change="upImg">
                <!--                <img class="h-52 border-2 border-gray-700 rounded-full z-0 lg:z-10" v-bind:src="ima">-->
                <input class="text-gray-200 bg-gray-700 hover:bg-gray-500 rounded p-3 mt-10 z-0 lg:z-10" type="submit"
                       value="Guardar">
              </div>
              <div class="pl-10 z-0 lg:z-10">
                <div>
                  <h1 class="text-3xl pt-10">Telefono 1</h1>
                  <input class="inputs" :class="{ 'postin': $v.telone.$error }" type="text"
                         v-model.trim="$v.telone.$model">
                </div>
                <div>
                  <h1 class="text-3xl pt-10">Telefono 2</h1>
                  <input class="inputs" :class="{ 'postin': $v.tltu.$error }" type="text" v-model.trim="$v.tltu.$model">
                </div>
                <div>
                  <h1 class="text-3xl pt-10">Direccion </h1>
                  <input class="inputs" :class="{ 'postin': $v.dir.$error }" type="text" v-model.trim="$v.dir.$model">
                </div>
                <div>
                  <h1 class="text-3xl pt-10">Contraseña </h1>
                  <input class="inputs" :class="{ 'postin': $v.pas1.$error }" type="password"
                         v-model.trim="$v.pas1.$model">
                </div>
                <div>
                  <h1 class="text-3xl pt-10">Repetir contraseña </h1>
                  <input class="inputs" :class="{ 'postin': $v.pas2.$error }" type="password"
                         v-model.trim="$v.pas2.$model">
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
import {mapActions} from "vuex";
import {minLength, maxLength, required, sameAs} from "vuelidate/lib/validators";
import Swal from "sweetalert2";
// import Vuelidate from 'vuelidate';

export default {
  name: "edituser",
  data() {
    return {
      image: JSON.parse(localStorage.getItem('user')).image,
      telone: JSON.parse(localStorage.getItem('user')).tellephone1,
      tltu: JSON.parse(localStorage.getItem('user')).tellephone2,
      dir: JSON.parse(localStorage.getItem('user')).direcction,
      pas1: '',
      pas2: '',
      ima: '',
    }
  },
  validations: {
    telone: {
      minLength: minLength(10),
      maxLength: maxLength(20),
    },
    tltu: {
      minLength: minLength(10),
      maxLength: maxLength(20),
    },
    dir: {
      maxLength: maxLength(50),
    },
    pas1: {
      required,
      minLength: minLength(10),
    },
    pas2: {
      required,
      minLength: minLength(10),
      sameAs: sameAs('pas1'),
    },
  },
  components: {
    userHeader,
    task,
  },
  methods: {
    ...mapActions('a', ['updateUser']),
    prueba() {
      console.log(this.ima)
    },
    upImg(event) {

      const img = event.target.files
      let imgsize = img[0].size

      // if (imgsize===0) {
        if (imgsize >= 100000) {
          Swal.fire("Error", 'El archivo es demaciado pesado.', 'error');
        } else {
          if (img[0].type === 'image/jpeg' || img[0].type === 'application/pdf' || img[0].type === 'image/png') {
            // console.log('hola')
            console.log('holabueno')
            console.log(this.ar)

            this.image = URL.createObjectURL(img[0]);
            console.log(imgsize)
            this.ima = img[0]
          } else {
            console.log('hola malo')
          }
        }
        //100000
      // } else {
      //   this.ima = null
      // }


    },
    saveIt() {
      let uu = new FormData();
      if (this.ima) {
        uu.append('image', this.ima)
      }
      // else {
      //   uu.append('image', )
      // }
      uu.append('direcction', this.dir)
      uu.append('tell1', this.telone)
      uu.append('tell2', this.tltu)
      uu.append('id', JSON.parse(localStorage.getItem('user')).id)
      uu.append('_method', 'PUT')

      // let us = {
      //   direcction: this.dir,
      //   tell1: this.telone,
      //   tell2: this.tltu,
      //   id: JSON.parse(localStorage.getItem('user')).id,
      //   _method: 'POST',
      // }

      this.updateUser(uu)
    },
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.saveIt()
        console.log('submit!')
      }
    }
  }
}
</script>

<style scoped>

</style>