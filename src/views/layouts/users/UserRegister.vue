<template>

<div>
  <links></links>
  <div class="flex justify-center flex-wrap content-center bg-gray-100 min-h-screen">

    <form v-on:submit.prevent action="" class="bg-white w-full sm:w-1/2 h-auto rounded-lg shadow-2xl">
      <div class="bg-blue-200 rounded-lg p-5">
        <h1 class="text-3xl" >registro usuario <i class="fas fa-desktop"></i></h1>
        <h1 class="py-5" >Crea una cuenta gratis para poder usar nuestros servicios.</h1>

      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 p-10 gap-4">
        <div class="grid grid-cols-1">
          <label for="document">Documento de identidad.<i class="fas fa-address-card"></i></label>
          <input class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model="document" id="document" type="number">
          <p> documento necesario </p>
        </div>
        <div class="grid grid-cols-1">
          <label for="typedocument">Tipo De Documento.<p  v-if="errors[2]">{{ errors[2]['tdoc']}}</p></label>
          <select class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model="fk_document_type_id" name="" id="typedocument">
            <option disabled value="">Seleccione un elemento</option>
            <option value="1">Cedula de Ciudadania</option>
            <option value="2">Targeta de Identidad</option>
            <option value="3">Cedula de Extrangeria</option>
            <option value="4">Pasaporte</option>
          </select>
        </div>
        <div class="grid grid-cols-1">
          <label for="names">Nombres.<p v-if="errors[2]">{{ errors[2]}}</p></label>
          <input class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model="names" id="names" type="text">
        </div>
        <div class="grid grid-cols-1">
          <label for="lnames">Apellidos.<p v-if="errors[3]">{{ errors[3]}}</p></label>
          <input class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model="last_names" id="lnames" type="text">
        </div>
        <div class="grid grid-cols-1">
          <label for="dir">Direccion.<p v-if="errors[4]">{{ errors[4]}}</p></label>
          <input class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model="direcction" id="dir" type="text">
        </div>
        <div class="grid grid-cols-1">
          <label for="tell1">Telefono 1.<p v-if="errors[5]">{{ errors[5]}}</p></label>
          <input class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model="tellephone1" id="tell1" type="text">
        </div>
        <div class="grid grid-cols-1">
          <label for="tell2">Telefono 2.</label>
          <input class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model="tellephone2" id="tell2" type="text">
        </div>
        <div class="grid grid-cols-1">
          <label for="mail">Correo.<p v-if="errors[6]">{{ errors[6]}}</p></label>
          <input class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model="mail" id="mail" type="text">
        </div>
        <div class="grid grid-cols-1">
          <label for="contra1">Contraseña<p v-if="errors[7]">{{ errors[7]}}</p></label>
          <input class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model="password2" id="contra1" type="text">
        </div>
        <div class="grid grid-cols-1">
          <label for="contra2">Confirmar Contraseña<p v-if="errors[8]">{{ errors[8]}}</p></label>
          <input class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model="password" id="contra2" type="text">
        </div>
        <div class="grid grid-cols-1">
          <label for="departament">Departamento<p v-if="errors[9]">{{ errors[9]}}</p></label>
          <select class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model="depar" v-on:click="muni" id="departament">
            <option disabled value="">Seleccione un elemento</option>
            <option v-for="(item, index) in departaments" :key="index" v-bind:value="{depar: item.id}" >
              {{ item.name }}
            </option>
          </select>
        </div>
        <div class="grid grid-cols-1">
          <label for="muni">Municipio<p v-if="errors[0]">{{ errors[0]}}</p></label>
          <select class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model="fk_municipality_id" name="" id="muni">
            <option disabled value="">Seleccione un elemento</option>
            <option v-for="(item, index) in municipalities" :key="index" v-bind:value="{fk_municipality_id: item.id}">
              {{ item.name }}
            </option>
          </select>

        </div>
        <input type="submit" class="bg-blue-200 hover:bg-blue-300 py-2 px-4 rounded w-20"   v-on:click="createUser" value="Crear">
      </div>

    </form>


  </div>
</div>
</template>


<script>

import {departaments,municipalities} from '@/services/departaments'
import {registerUser} from '@/services/users/register'
import links from "@/components/links"
//import useVuelidate from '@vuelidate/core'
//import { required } from '@vuelidate/validators'


//import { required, minLength } from 'vuelidate/lib/validators';

//Vue.use(Vuelidate);
// v-on:submit.prevent="checkForm"


export default{
  name: 'UserCreate',
  components: {
    links
  },
  data(){
    return {
      document: null,
      fk_document_type_id: null,
      names: null,
      last_names: null,
      direcction: null,
      tellephone1: null,
      mail: null,
      password: null,
      password2: null,
      tellephone2: null,
      fk_municipality_id: '',
      departaments: [],
      municipalities: [],
      depar: '',
      userCreated: '',
      errors: []
    }
  },
  created() {
    departaments().then(response=>{
      //console.log(response)
      this.departaments = response.data
    }).catch(error => console.log(error));



  },
  methods: {
    muni(){
      //console.log(this.depar)
      municipalities(this.depar).then(response=>{
        //console.log(response)
        this.municipalities = response.data
      }).catch(error => console.log(error));
    },
    createUser(){
      //console.log('hola')
      registerUser({
        document: this.document,
        names: this.names,
        fk_municipality_id: this.fk_municipality_id['fk_municipality_id'],
        fk_document_type_id: this.fk_document_type_id,
        last_names: this.last_names,
        direcction: this.direcction,
        tellephone1: this.tellephone1,
        tellephone2: this.tellephone2,
        mail: this.mail,
        password: this.password,
        password2: this.password2
      }).then(response=>{
        console.log(response)
        this.userCreated = response.data
      }).catch(error=>console.log(error));
    }
  }



}
</script>

<style>
form{
  font-family: 'Roboto', sans-serif;

}
</style>