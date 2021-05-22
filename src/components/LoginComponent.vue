<template>
  <div class="min-h-screen flex justify-center flex-wrap content-center">
    <div>
      <form class="bg-white h-auto rounded-lg shadow-2xl">
        <div class="bg-blue-200 rounded-lg p-5">
          <h1 class="text-3xl" >Inicio De Sesion<i class="fas fa-desktop"></i></h1>
          <h1 class="py-5" >Recuerda tener una cuenta para poder iniciar sesion,<br>
            si no tiene cree una <router-link class="pr-4" to="/useregister"><b>Aqui</b></router-link>.</h1>
        </div>
        <div class="grid grid-cols-1 p-10 gap-6">
          <div class="divin">
            <label for="mail">Correo</label>
            <input class="inputs" type="email" id="mail">
          </div>
          <div class="divin">
            <label for="pass">Contraseña</label>
            <input class="inputs" type="password" id="pass">
          </div>
          <input class="bg-blue-200 hover:bg-blue-300 mt-8 py-2 px-4 rounded w-20" type="submit">
        </div>
      </form>
    </div>
  </div>

</template>

<script>
export default {
name: "LoginComponent"
}
</script>

<style scoped>

</style>