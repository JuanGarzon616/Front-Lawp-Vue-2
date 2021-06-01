<template>
<!--    <div class="h-16 max-w-screen"></div>-->
    <div class="max-w-screen flex md:flex-row-reverse flex-col ">

      <div class="w-full">
        <span>
          <userHeader class="z-20"></userHeader>
        </span>
        <div class="pl-10 pt-36 md:pl-24 min-h-screen bg-gray-200 ">
          <h1 class="text-3xl z-0 md:z-10"><b>Bienvenido</b></h1>
          <p class="text-xl">Aqui puedes ver y gestionar tus Pqr.</p>
<!--          <bus class="w-full sm:w-9/12 lg:w-1/2 z-0 md:z-10"></bus>flex justify-center flex-wrap items-center -->
        </div>
      </div>
      <span>
        <p class="md:w-60 w-0 md:min-h-screen h-0" v-if="this.$store.getters.bar"></p>
      </span>
      <span class="fixed inset-x-0 top-16">
        <task v-if="this.$store.getters.bar"></task>
      </span>
    </div>
</template>

<script>
import userHeader from "@/components/UserComponents/header";
import task from "@/components/UserComponents/task";
// import BusinessResgisterComponent from "@/components/BusinessRegisterComponent/BusinessResgisterComponent";

export default {
  name: 'ulogin',
  components: {
    // 'bus': BusinessResgisterComponent,
    userHeader,
    task
  }
}
</script>

<style scoped>

</style>