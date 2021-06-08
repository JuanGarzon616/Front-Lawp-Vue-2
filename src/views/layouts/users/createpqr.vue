<template>
  <div class="max-w-screen flex md:flex-row-reverse flex-col ">

    <div class="w-full ">
        <span>
          <userHeader class="z-20"></userHeader>
        </span>
      <div class="pl-0 pt-36 md:pl-24 min-h-screen bg-gray-200 flex flex-col">
        <h1 class="text-3xl z-0 lg:z-10"><b>Bienvenido</b></h1>
        <p class="text-xl z-0 lg:z-10">Aqui puedes ver y gestionar tus Pqr.</p>
        <div>
          <form class="flex">
            <p class="z-0 lg:z-10" v-on:click="getBusName">fdg</p>
            <select class="z-0 lg:z-10" name="" id="">
              <option disabled value="">Seleccione un elemento</option>
              <option  v-for="(item, index) in this.$store.getters['b/getNamesBusi']" :key="index" value="">
                {{item.bussiness_name}}
              </option>
            </select>
          </form>
        </div>
      </div>
    </div>
    <span>
        <p class="md:w-60 w-0 md:min-h-screen h-0" v-if="this.$store.getters.bar"></p>
      </span>
    <span class="fixed inset-x-0 top-16 z-0">
        <task v-if="this.$store.getters.bar"></task>
      </span>
  </div>
</template>

<script>
import userHeader from "@/components/UserComponents/header";
import task from "@/components/UserComponents/task";
import {mapActions} from "vuex";

export default {
  name: "createpqr",
  components: {
    userHeader,
    task
  },
  created() {
    this.getBusName()
  },
  /*computed: {

  },*/
  methods: {
    ...mapActions('b', ['getBusName'])
  }
}
</script>

<style scoped>

</style>