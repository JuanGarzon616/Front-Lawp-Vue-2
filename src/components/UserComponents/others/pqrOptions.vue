<template>
  <div>
    <router-link to="/userlogin">
      <div class="hover:bg-gray-700 pl-20">
        <p class="mb-4"><i class="far fa-envelope-open"></i> Ver</p>
      </div>
    </router-link>
    <router-link to="/crearpqr">
      <div class="hover:bg-gray-700 pl-20">
        <p class="mb-2"><i class="far fa-edit"></i> Crear</p>
      </div>
    </router-link>
  </div>

</template>

<script>
export default {
  name: "pqr-options"
}
</script>

<style scoped>

</style>