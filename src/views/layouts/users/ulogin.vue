<template>
<!-- md:z-10 max-h-52  block border-collapse border border-green-800 overflow-x-scroll   <div class="h-16 max-w-screen"></div>-->
    <div class="max-w-screen flex md:flex-row-reverse flex-col ">

      <div class="w-full">
        <span>
          <userHeader class="z-20"></userHeader>
        </span>
        <div class="pl-10 pt-36 md:pl-24 min-h-screen bg-gray-200 ">
          <h1 class="text-3xl z-10"><b>Bienvenido</b></h1>
<!--          <p class="text-xl">Aqui puedes ver y gestionar tus Pqr.</p>-->
<!--          <table class="table-fixed w-1/2 block  overflow-x-scroll">-->
<!--            <thead>-->
<!--              <tr class="max-h-52 ">-->
<!--                <th class="w-1/3 ">Asunto</th>-->
<!--                <th class="w-1/3 ">Descripcion</th>-->
<!--                <th class="w-1/3 ">Fecha de Creacion</th>-->
<!--                <th class="w-1/3 ">Estado</th>-->
<!--                <th class="w-1/3 ">Ver mas</th>-->
<!--              </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--              <tr v-for="(pqr, index) in pqrsUser" :key="index">-->
<!--                <td class="border-collapse border border-green-800">{{pqr.affair}}</td>-->
<!--                <td class="border-collapse border border-green-800">{{pqr.description}}</td>-->
<!--                <td class="border-collapse border border-green-800">{{pqr.date}}</td>-->
<!--                <td class="border-collapse border border-green-800">{{pqr.fk_status_id}}</td>-->
<!--                <td class="border-collapse border border-green-800">{{pqr.affair}}</td>-->
<!--              </tr>-->
<!--            </tbody>-->
<!--          </table>-->
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