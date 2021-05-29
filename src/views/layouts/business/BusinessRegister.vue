<template>
  <div class="min-h-screen flex justify-center flex-wrap content-center">
    <div class="w-full sm:w-9/12 md:w-1/2">
      <BusinessResgisterComponent></BusinessResgisterComponent>
    </div>
  </div>

</template>

<script>
import BusinessResgisterComponent from "@/components/BusinessRegisterComponent/BusinessResgisterComponent";

export default{
  name: 'BusinessRegister',
  components: {
    BusinessResgisterComponent
  }
}


</script>

<style scoped>

</style>