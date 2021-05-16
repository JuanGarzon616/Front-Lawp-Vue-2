<template>
 <div>
   <links></links>
   <LoginComponent></LoginComponent>
 </div>
</template>

<script>
import links from '@/components/links'
import LoginComponent from "@/components/LoginComponent";

export default {
  name: "Login",
  components:{
    links,
    LoginComponent
  }
}
</script>

<style scoped>

</style>