<template>
  <div class="flex justify-end flex-wrap content-center h-16 bg-gradient-to-r from-blue-200 via-blue-200 to-blue-50 pr-9 ">
    <router-link class="pr-4" to="/">Home</router-link>
    <router-link class="pr-4" to="/about">About</router-link>
    <router-link class="pr-4" to="/userlogin">user login</router-link>
    <router-link class="pr-4" to="/useregister">register</router-link>
    <button to="/useregister">crearcuenta</button>
  </div>
</template>

<script>

export default{
  name: 'links'
}

</script>