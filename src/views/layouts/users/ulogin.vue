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
          <table class="max-h-50 w-52 block border-collapse border border-green-800 overflow-x-scroll">
            <tr>
              <td>Asunto</td>
              <td>Fecha de Creacion</td>
              <td>Estado</td>
              <td>Ver mas</td>
            </tr>
            <tr v-for="(pqr, index) in pqrsUser" :key="index">
              <td>{{pqr.affair}}</td>
              <td>{{pqr.date}}</td>
              <td>{{pqr.fk_status_id}}</td>
              <td>{{pqr.affair}}</td>
            </tr>
          </table>
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
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'ulogin',
  components: {
    userHeader,
    task
  },
  created() {
    this.getPqrUser()
  },
  computed: {
    ...mapGetters('d',['pqrsUser'])
  },
  methods: {
    ...mapActions('d',['getPqrUser']),

  }
}
</script>

<style scoped>

</style>