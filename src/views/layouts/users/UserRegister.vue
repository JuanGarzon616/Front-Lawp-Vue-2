<template>

<div>
  <links></links>
  <div class="flex justify-center flex-wrap content-center bg-gray-100 min-h-screen">

    <form v-on:submit.prevent="submit" action="" class="bg-white w-full sm:w-1/2 h-auto rounded-lg shadow-2xl">
      <div class="bg-blue-200 rounded-lg p-5">
        <h1 class="text-3xl" >registro usuario <i class="fas fa-desktop"></i></h1>
        <h1 class="py-5" >Crea una cuenta gratis para poder usar nuestros servicios.</h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 p-10 gap-4">
        <div class="grid grid-cols-1" :class="{ 'bg-red-100 text-red-600': $v.document.$error }">
          <label for="document">Documento de identidad.<i class="fas fa-address-card"></i></label>
            <p v-if="!$v.document.required">Documento requerido</p>
            <p v-if="!$v.document.minLength">Documento muy corto</p>
            <p v-if="!$v.document.maxLength">Documento exede lo permitido</p>
          <input class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model.trim="$v.document.$model" id="document" type="number">
        </div>
        <div class="grid grid-cols-1" :class="{ 'bg-red-100 text-red-600': $v.fk_document_type_id.$error }">
          <label for="typedocument">Tipo De Documento.</label>
            <p v-if="!$v.fk_document_type_id.required">Tipo de documento requerido</p>
          <select class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model.trim="fk_document_type_id" name="" id="typedocument">
            <option disabled value="">Seleccione un elemento</option>
            <option value="1">Cedula de Ciudadania</option>
            <option value="2">Targeta de Identidad</option>
            <option value="3">Cedula de Extrangeria</option>
            <option value="4">Pasaporte</option>
          </select>
        </div>
        <div class="grid grid-cols-1" :class="{ 'bg-red-100 text-red-600': $v.names.$error }">
          <label for="names">Nombres.</label>
            <p v-if="!$v.names.required">Nombre requerido</p>
            <p v-if="!$v.names.minLength">Nombre muy corto</p>
            <p v-if="!$v.names.maxLength">Nombre exede lo permitido</p>
          <input class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model.trim="names" id="names" type="text">
        </div>
        <div class="grid grid-cols-1"  :class="{ 'bg-red-100 text-red-600': $v.last_names.$error }">
          <label for="lnames">Apellidos.</label>
            <p v-if="!$v.last_names.required">Apellidos requerido</p>
            <p v-if="!$v.last_names.minLength">Apellido muy corto</p>
            <p v-if="!$v.last_names.maxLength">Apellido exede lo permitido</p>
          <input class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model.trim="last_names" id="lnames" type="text">
        </div>
        <div class="grid grid-cols-1" :class="{ 'bg-red-100 text-red-600': $v.direcction.$error }">
          <label for="dir">Direccion.</label>
            <p v-if="!$v.direcction.required">Direccion requerido</p>
            <p v-if="!$v.direcction.maxLength">Direccion exede lo permitido</p>
          <input class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model.trim="direcction" id="dir" type="text">
        </div>
        <div class="grid grid-cols-1" :class="{ 'bg-red-100 text-red-600': $v.tellephone1.$error }">
          <label for="tell1">Telefono 1.</label>
            <p v-if="!$v.tellephone1.required">Telefono requerido</p>
            <p v-if="!$v.tellephone1.minLength">Telefono muy corto</p>
            <p v-if="!$v.tellephone1.maxLength">Telefono exede lo permitido</p>
          <input class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model.trim="tellephone1" id="tell1" type="text">
        </div>
        <div class="grid grid-cols-1" :class="{ 'bg-red-100 text-red-600': $v.tellephone2.$error }">
          <label for="tell2">Telefono 2.</label>
            <p v-if="!$v.tellephone1.minLength">Telefono muy corto</p>
            <p v-if="!$v.tellephone1.maxLength">Telefono exede lo permitido</p>
          <input class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model.trim="tellephone2" id="tell2" type="text">
        </div>
        <div class="grid grid-cols-1" :class="{ 'bg-red-100 text-red-600': $v.mail.$error }">
          <label for="mail">Correo.</label>
          <input class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model.trim="mail" id="mail" type="text">
        </div>
        <div class="grid grid-cols-1" :class="{ 'bg-red-100 text-red-600': $v.password2.$error }">
          <label for="contra1">Contraseña</label>
          <input class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model.trim="password2" id="contra1" type="text">
        </div>
        <div class="grid grid-cols-1" :class="{ 'bg-red-100 text-red-600': $v.password.$error }">
          <label for="contra2">Confirmar Contraseña</label>
          <input class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model.trim="password" id="contra2" type="text">
        </div>
        <div class="grid grid-cols-1">
          <label for="departament">Departamento</label>
          <select class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model.trim="depar" v-on:click="muni" id="departament">
            <option disabled value="">Seleccione un elemento</option>
            <option v-for="(item, index) in departaments" :key="index" v-bind:value="{depar: item.id}" >
              {{ item.name }}
            </option>
          </select>
        </div>
        <div class="grid grid-cols-1">
          <label for="muni" :class="{ 'bg-red-100 text-red-600': $v.fk_municipality_id.$error }">Municipio</label>
          <select class="p-1 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent rounded-lg shadow-2xl" v-model.trim="fk_municipality_id" name="" id="muni">
            <option disabled value="">Seleccione un elemento</option>
            <option v-for="(item, index) in municipalities" :key="index" v-bind:value="{fk_municipality_id: item.id}">
              {{ item.name }}
            </option>
          </select>

        </div>
        <input type="submit" class="bg-blue-200 hover:bg-blue-300 py-2 px-4 rounded w-20" v-on:click="createUser" value="Crear">
      </div>

    </form>


  </div>
</div>
</template>


<script>

import {departaments,municipalities} from '@/services/departaments'
import {registerUser} from '@/services/users/register'
import links from "@/components/links"
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
// v-on:submit.prevent="checkForm"


export default{
  name: 'UserCreate',
  components: {
    links
  },
  data(){
    return {
      document: '',
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
      userCreated: ''
    }
  },
  validations: {
    document: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(15)
    },
    fk_municipality_id: {
      required
    },
    names: {
      required,
      minLength: minLength (5),
      maxLength: maxLength (50)
    },
    last_names: {
      required,
      minLength: minLength (5),
      maxLength: maxLength (50)
    },
    direcction: {
      required,
      maxLength: maxLength (50)
    },
    tellephone1: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(20)
    },
    tellephone2: {
      minLength: minLength(10),
      maxLength: maxLength(20)
    },
    mail: {
      required
    },
    password: {
      required,
      minLength: minLength(10)
    },
    password2: {
      required,
      minLength: minLength(10)
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
    },
    submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  }



}
</script>

<style>
form{
  font-family: 'Roboto', sans-serif;

}
</style>