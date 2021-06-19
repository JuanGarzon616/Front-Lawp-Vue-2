<template>
  <div>
    <div class="hover:bg-gray-700 pl-20">
      <router-link to="/perfilusuario">
        <p class="mb-4"><i class="far fa-address-card"></i> Ver</p>
      </router-link>
    </div>
    <router-link to="/editarusuario">
      <div class="hover:bg-gray-700 pl-20">
        <p class="mb-2"><i class="fas fa-edit"></i> Editar</p>
      </div>
    </router-link>

  </div>

</template>

<script>
export default {
  name: "userOptions"
}
</script>

<style scoped>

</style>