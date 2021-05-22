<template>
  <div class="min-h-screen flex justify-center flex-wrap content-center">
    <form action="">
      <div class="divin">
        <label for="mail">Correo</label>
        <input type="email" id="mail">
      </div>
      <div class="divin">
        <label for="pass">Contraseña</label>
        <input type="password" id="pass">
      </div>
      <input type="submit">
    </form>
  </div>
</template>

<script>
export default {
name: "LoginComponent"
}
</script>

<style scoped>

</style>