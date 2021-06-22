<template>
  <div class="min-h-screen flex justify-center flex-wrap content-center">
    <div>
      <form v-on:submit.prevent="submit" class="bg-white h-auto rounded-lg shadow-2xl">
        <div class="bg-gray-700 text-gray-200 rounded-lg p-5">
          <h1 class="text-3xl" >Inicio De Sesion<i class="fas fa-desktop"></i></h1>
          <h1 class="py-5" >Recuerda tener una cuenta para poder iniciar sesion,<br>
            si no tiene cree una <router-link class="pr-4" to="/useregister"><b>Aqui.</b></router-link></h1>
        </div>
        <div class="grid grid-cols-1 p-10 gap-6" >
          <div class="divin" :class="{'text-red-600': $v.mail.$error}">
            <label for="mail">Correo</label>
            <input class="inputs" type="email" id="mail" v-model.trim="$v.mail.$model">
          </div>
          <div class="divin" :class="{'text-red-600': $v.password.$error}">
            <label for="pass">Contraseña</label>
            <input class="inputs" type="password" id="pass" v-model.trim="$v.password.$model">
          </div>
          <input class="bg-gray-700 text-gray-200 hover:bg-gray-500 mt-8 py-2 px-4 rounded w-20" type="submit">
        </div>
      </form>
    </div>
  </div>

</template>

<script>


import {mapActions} from "vuex";
import {email, maxLength, /*minLength,*/ required} from "vuelidate/lib/validators";

export default {
  name: "LoginComponent",
  data(){
    return {
      mail: '',
      password: ''
    }
  },
  validations: {
    mail: {
      required,
      maxLength: maxLength(60),
      email,
    },
    password: {
      // required,
      // minLength: minLength(0),
    }
  },
  methods: {
    ...mapActions('c',['auth']),
    check(){
      this.auth({
        password: this.password,
        mail: this.mail
      })
    },
    submit(){

      this.$v.$touch()
      if(this.$v.$invalid){
        this.submitStatus = 'Error'
      }else{
        this.check()
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