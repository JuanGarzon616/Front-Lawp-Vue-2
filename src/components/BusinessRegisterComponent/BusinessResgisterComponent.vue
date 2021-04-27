<template>
  <div class="flex justify-center flex-wrap content-center bg-gray-100 min-h-screen">

    <form v-on:submit.prevent="submit" action="" class="bg-white w-full sm:w-1/2 h-auto rounded-lg shadow-2xl">
      <div class="bg-blue-200 rounded-lg p-5">
        <h1 class="text-3xl" >Registro Empresarial <i class="fas fa-desktop"></i></h1>
        <h1 class="py-5" >Crea una cuenta gratis para poder usar nuestros servicios.</h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 p-10 gap-4">
        <div class="divin" :class="{'text-red-600': $v.nit.$error}">
          <label for="document">Nit De la Empresa.<i class="fas fa-address-card"></i></label>
          <p v-if="!$v.nit.minLength">Nit muy corto</p>
          <p v-if="!$v.nit.maxLength">Nit exede lo permitido</p>
          <input class="inputs" :class="{ 'postin': $v.nit.$error }" v-model.trim="$v.nit.$model" id="document" type="number">
        </div>
        <div class="divin" :class="{'text-red-600': $v.business_name.$error}">
          <label for="names">Nombre de la Empresa.</label>
          <p v-if="!$v.business_name.maxLength">Nombre exede lo permitido</p>
          <input class="inputs" :class="{ 'postin': $v.business_name.$error }"  v-model.trim="$v.business_name.$model" id="names" type="text">
        </div>
        <div class="divin" :class="{'text-red-600': $v.legal_name.$error}">
          <label for="names">Nombre de la Empresa.</label>
          <p v-if="!$v.legal_name.maxLength">Nombre exede lo permitido</p>
          <input class="inputs" :class="{ 'postin': $v.legal_name.$error }"  v-model.trim="$v.legal_name.$model" id="names" type="text">
        </div>
        <div class="divin" :class="{'text-red-600': $v.tellephone1.$error}">
          <label for="tell1">Telefono 1.</label>
          <!--          <p class="pin" :class="{'ppostin': $v.tellephone1.$error}" v-if="!$v.tellephone1.required">Telefono requerido</p>-->
          <p v-if="!$v.tellephone1.minLength">Telefono muy corto</p>
          <p v-if="!$v.tellephone1.maxLength">Telefono exede lo permitido</p>
          <input class="inputs" :class="{ 'postin': $v.tellephone1.$error }" v-model.trim="$v.tellephone1.$model" id="tell1" type="text">
        </div>
        <div class="divin" :class="{'text-red-600': $v.tellephone2.$error}">
          <label for="tell2">Telefono 2.</label>
          <p  v-if="!$v.tellephone2.minLength">Telefono muy corto</p>
          <p v-if="!$v.tellephone2.maxLength">Telefono exede lo permitido</p>
          <input class="inputs" :class="{ 'postin': $v.tellephone2.$error }" v-model.trim="$v.tellephone2.$model" id="tell2" type="text">
        </div>
          <div class="divin" :class="{'text-red-600': $v.mail.$error}">
            <label for="mail">Correo.</label>
            <p v-if="!$v.mail.maxLength">Correo exede lo permitido</p>
            <p v-if="!$v.mail.email" >Ingresa un correo valido</p>
            <input class="inputs" :class="{ 'postin': $v.mail.$error }" v-model.trim="$v.mail.$model" id="mail" type="text">
        </div>
        <div class="divin" :class="{'text-red-600': $v.depar.$error}">
          <label for="departament">Departamento</label>
          <select class="inputs" :class="{ 'postin': $v.depar.$error }" v-model.trim="$v.depar.$model" id="departament">
<!--          <select class="inputs" :class="{ 'postin': $v.depar.$error }" v-model.trim="$v.depar.$model" v-on:click="muni" id="departament">-->
            <option disabled value="">Seleccione un elemento</option>
            <option v-for="(item, index) in departament" :key="index" v-bind:value="{depar: item.id}" >
              {{ item.name }}
            </option>
          </select>
        </div>
<!--        <div class="divin" :class="{'text-red-600': $v.fk_municipality_id.$error}">-->
<!--          <label for="muni">Municipio</label>-->
<!--          <select class="inputs" :class="{ 'postin': $v.fk_municipality_id.$error }" v-model.trim="$v.fk_municipality_id.$model" name="muni" id="muni">-->
<!--            <option disabled value="">Seleccione un elemento</option>-->
<!--            <option v-for="(item, index) in municipality" :key="index" v-bind:value="{fk_municipality_id: item.id}">-->
<!--              {{ item.name }}-->
<!--            </option>-->
<!--          </select>-->
<!--        </div>-->

        <input type="submit" class="bg-blue-200 hover:bg-blue-300 py-2 px-4 rounded w-20"  value="Crear">
      </div>

    </form>


  </div>

</template>

<script>

import {departaments} from "@/services/departaments";
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import businessRegister from '@/services/business/businessFetch'



export default {
  name: 'BusinessRegisterComponent',
  components: {
  },
  data(){
    return {
      nit: '',
      business_name: '',
      legal_name: '',
      tellephone1: '',
      tellephone2: '',
      mail: '',
      esector: '',
      fk_municipality_id: '',
      cdate: '',
      id: '',
      muni: '',
      departament: [],
      municipality: [],
      depar: ''
    }
  },
  validations: {
    nit: {
      required,
      minLength: minLength(9),
      maxLength: maxLength(15),
    },
    business_name: {
      required,
      maxLength: maxLength(100),
    },
    legal_name:{
      required,
      maxLength: maxLength(100)
    },
    tellephone1: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(15)
    },
    tellephone2: {
      minLength: minLength(10),
      maxLength: maxLength(15)
    },
    mail: {
      required,
      maxLength: maxLength(60),
      email,
    },
    esector: {
      required
    },
    depar: {
      required
    },
    cdate: {
      required
    },
    fk_municipality_id: {
      required
    }
  },
  created() {
    departaments().then(response=>{
      //console.log(response)
      this.departament = response.data
    }).catch(error => console.log(error));
        console.log(this.depar)
    /*municipalities(this.depar).then(response=>{
      console.log(response)
      this.municipality = response.data
    }).catch(error => console.log(error));*/

  },
  methods: {
    createBusiness(){
      businessRegister({
        nit: this.nit
      }).then(response=>{
        console.log(response)
      }).catch(function error(){
        console.log(error)
      })
    },
    submit(){
      this.$v.$touch()
      if(this.$v.$invalid){
        this.submitStatus = 'Error'
      }else{
        this.createBusiness()
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  }
}
</script>

<style scoped>

</style>