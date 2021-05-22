<template>
  <div class="flex justify-center flex-wrap content-center bg-gray-100 min-h-screen">

    <form v-on:submit.prevent="submit"  class="bg-white w-full sm:w-1/2 h-auto rounded-lg shadow-2xl">
      <div class="bg-blue-200 rounded-lg p-5">
        <h1 class="text-3xl" >registro usuario <i class="fas fa-desktop"></i></h1>
        <h1 class="py-5" >Crea una cuenta gratis para poder usar nuestros servicios.</h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 p-10 gap-4">
        <div class="divin" :class="{'text-red-600': $v.document.$error}">
          <label for="document">Documento de identidad.<i class="fas fa-address-card"></i></label>
          <p v-if="!$v.document.minLength">Documento muy corto</p>
          <p v-if="!$v.document.maxLength">Documento exede lo permitido</p>
          <input class="inputs" :class="{ 'postin': $v.document.$error }" v-model.trim="$v.document.$model" id="document" type="number">
        </div>
        <div class="divin" :class="{'text-red-600': $v.fk_document_type_id.$error}">
          <label for="typedocument">Tipo De Documento.</label>
          <select class="inputs" :class="{ 'postin': $v.fk_document_type_id.$error }"  v-model.trim="$v.fk_document_type_id.$model" name="" id="typedocument">
            <option disabled value="">Seleccione un elemento</option>
            <option value="1">Cedula de Ciudadania</option>
            <option value="2">Targeta de Identidad</option>
            <option value="3">Cedula de Extrangeria</option>
            <option value="4">Pasaporte</option>
          </select>
        </div>
        <div class="divin" :class="{'text-red-600': $v.names.$error}">
          <label for="names">Nombres.</label>
          <p v-if="!$v.names.minLength">Nombre muy corto</p>
          <p v-if="!$v.names.maxLength">Nombre exede lo permitido</p>
          <input class="inputs" :class="{ 'postin': $v.names.$error }"  v-model.trim="$v.names.$model" id="names" type="text">
        </div>
        <div class="divin" :class="{'text-red-600': $v.last_names.$error}">
          <label for="lnames">Apellidos.</label>
          <p v-if="!$v.last_names.minLength">Apellido muy corto</p>
          <p v-if="!$v.last_names.maxLength">Apellido exede lo permitido</p>
          <input class="inputs" :class="{ 'postin': $v.last_names.$error }" v-model.trim="$v.last_names.$model" id="lnames" type="text">
        </div>
        <div class="divin" :class="{'text-red-600': $v.direcction.$error}">
          <label for="dir">Direccion.</label>
          <p v-if="!$v.direcction.maxLength">Direccion exede lo permitido</p>
          <input class="inputs" :class="{ 'postin': $v.direcction.$error }" v-model.trim="$v.direcction.$model" id="dir" type="text">
        </div>
        <div class="divin" :class="{'text-red-600': $v.tellephone1.$error}">
          <label for="tell1">Telefono 1.</label>
          <p v-if="!$v.tellephone1.minLength">Telefono muy corto</p>
          <p v-if="!$v.tellephone1.maxLength">Telefono exede lo permitido</p>
          <input class="inputs" :class="{ 'postin': $v.tellephone1.$error }" v-model.trim="$v.tellephone1.$model" id="tell1" type="number">
        </div>
        <div class="divin" :class="{'text-red-600': $v.tellephone2.$error}">
          <label for="tell2">Telefono 2.</label>
          <p  v-if="!$v.tellephone2.minLength">Telefono muy corto</p>
          <p v-if="!$v.tellephone2.maxLength">Telefono exede lo permitido</p>
          <input class="inputs" :class="{ 'postin': $v.tellephone2.$error }" v-model.trim="$v.tellephone2.$model" id="tell2" type="number">
        </div>
        <div class="divin" :class="{'text-red-600': $v.mail.$error}">
          <label for="mail">Correo.</label>
          <p v-if="!$v.mail.maxLength">Correo exede lo permitido</p>
          <p v-if="!$v.mail.email" >Ingresa un correo valido</p>
          <input class="inputs" :class="{ 'postin': $v.mail.$error }" v-model.trim="$v.mail.$model" id="mail" type="email">
        </div>
        <div class="divin" :class="{'text-red-600': $v.password2.$error}">
          <label for="contra1">Contraseña</label>
          <p v-if="!$v.password2.minLength">Contraseña muy corto</p>
          <input class="inputs" :class="{ 'postin': $v.password2.$error }" v-model.trim="$v.password2.$model" id="contra1" type="password">
        </div>
        <div class="divin" :class="{'text-red-600': $v.password.$error}">
          <label for="contra2">Confirmar Contraseña</label>
          <p v-if="!$v.password.sameAs" >La contraseña debe ser igual.</p>
          <input class="inputs" :class="{ 'postin': $v.password.$error }" v-model.trim="$v.password.$model" id="contra2" type="password">
        </div>
        <div class="divin" :class="{'text-red-600': $v.depar.$error}">
          <label for="departament">Departamento</label>
          <select class="inputs" :class="{ 'postin': $v.depar.$error }" v-model.trim="$v.depar.$model" v-on:click="muni" id="departament">
            <option disabled value="">Seleccione un elemento</option>
            <option v-for="(item, index) in allDepartaments" :key="index" v-bind:value="{depar: item.id}" >
              {{ item.name }}
            </option>
          </select>
        </div>
        <div class="divin" :class="{'text-red-600': $v.fk_municipality_id.$error}">
          <label for="muni">Municipio</label>
          <select class="inputs" :class="{ 'postin': $v.fk_municipality_id.$error }" v-model.trim="$v.fk_municipality_id.$model" name="muni" id="muni">
            <option disabled value="">Seleccione un elemento</option>
            <option v-for="(item, index) in allMunicipalities" :key="index" v-bind:value="{fk_municipality_id: item.id}">
              {{ item.name }}
            </option>
          </select>

        </div>
        <div class="grid col-span-1 md:col-span-2" :class="{ 'postin': $v.buss.$error }">
          <p>¿Es cuenta empresarial?</p>
          <label for="si">Si <input id="si" name="buss" type="radio" v-model="buss" value="si"></label>
          <label for="no">No <input  id="no" name="buss" type="radio" v-model="buss" value="no"></label>
        </div>
        <input type="submit" class="bg-blue-200 hover:bg-blue-300 py-2 px-4 rounded w-20"  value="Crear">
      </div>

    </form>
  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'
import { required, minLength, maxLength, sameAs, email } from 'vuelidate/lib/validators'
import router from "@/router"
import Swal from "sweetalert2"

export default{
  name: 'UserCreate',
  components: {

  },
  data(){
    return {
      document: '',
      fk_document_type_id: '',
      names: null,
      last_names: null,
      direcction: null,
      tellephone1: null,
      mail: null,
      password: null,
      password2: null,
      tellephone2: null,
      fk_municipality_id: null,
      // municipalities: [],
      depar: '',
      // userCreated: '',
      // emailerror: '',
      // docuerror: '',
      buss: ''
    }
  },
  validations: {
    document: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(15)
    },
    fk_document_type_id: {
      required
    },
    fk_municipality_id: {
      required
    },
    names: {
      required,
      minLength: minLength (3),
      maxLength: maxLength (50)
    },
    last_names: {
      required,
      minLength: minLength (3),
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
      required,
      maxLength: maxLength(50),
      email,
    },
    password: {
      required,
      minLength: minLength(10),
      sameAs: sameAs('password2')
    },
    password2: {
      required,
      minLength: minLength(10)
    },
    depar: {
      required
    },
    buss: {
      required
    }
  },
  created() {
    this.getDepartaments()
  },
  computed: {
    ...mapGetters('c',['allDepartaments']),
    ...mapGetters('c',['allMunicipalities']),
  },
  methods: {
    ...mapActions('c',['getDepartaments']),
    ...mapActions('c',['getMunicipalities']),
    ...mapActions('a',['saveUser']),
    muni(){
      this.getMunicipalities(JSON.parse(JSON.stringify(this.depar)).depar);
    },
    createUser(){
      this.saveUser({
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
      }).then(response => {
        console.log(response)
        localStorage.clear()
        localStorage.setItem('token', JSON.stringify(response.data.token))
        localStorage.setItem('user', JSON.stringify(response.data.user))

        if(response.status===201){
          Swal.fire("Usuario creado","usuario creado satisfactoriamente","success")
        }else {
          console.log("algo paso")
        }

        if(this.buss === 'si'){
          router.push('/businessregister')
        }else{
          router.push('/userlogin')
        }
      }).catch( function (error){
        console.log(error.response.data.status)
        console.log(error.response)
        if(error.response.data.messages.mail && error.response.data.messages.document){
          Swal.fire("Error",'Email y Numero de identificacion ya tomados.','error');
        }else if(error.response.data.messages.document){
          Swal.fire("Error",'Numero de identificacion ya tomado.','error');
        }else if(error.response.data.messages.mail){
          Swal.fire("Error",'Correo  ya tomado.','error');
        }else if(error.response.status===422){
          Swal.fire("Error",'A ocurrido un error revisa los datos.','error');
        }
      })
    },
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.createUser()
        console.log('submit!')
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
form{
  font-family: 'Roboto', sans-serif;

}
</style>