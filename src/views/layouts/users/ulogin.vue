<template>

<!--  <div class="max-w-screen flex md:flex-row-reverse flex-col ">-->

<!--    <div class="w-full">-->
<!--        <span>-->
<!--          <userHeader class="z-20"></userHeader>-->
<!--        </span>-->
<!--      <div class="pl-10 pt-36 min-h-screen bg-gray-200 flex ">-->
<!--        <h1 class="z-0 md:z-10">user login asdasd</h1>-->
<!--      </div>-->
<!--    </div>-->
<!--    <span>-->
<!--        <p class="md:w-60 w-0 md:min-h-screen h-0" v-if="this.$store.getters.bar"></p>-->
<!--      </span>-->
<!--    <span class="fixed inset-x-0 top-16">-->
<!--        <task v-if="this.$store.getters.bar"></task>-->
<!--      </span>-->
<!--  </div>-->
<!--w-full md:w-10/12          md:z-10 max-h-52  block border-collapse border border-green-800 overflow-x-scroll   <div class="h-16 max-w-screen"></div>-->
    <div class="max-w-screen flex md:flex-row-reverse flex-col ">

      <div class="w-full">
        <span>
          <userHeader class="z-20"></userHeader>
        </span>
        <div class="pl-0 pt-36 md:pl-24 min-h-screen bg-gray-200 flex flex-col">
          <h1 class="text-3xl z-0 lg:z-10"><b>Bienvenido</b></h1>
          <p class="text-xl z-0 lg:z-10">Aqui puedes ver y gestionar tus Pqr.</p>
          <div class="pt-20 pl-0 md:pl-10 flex ">
<!--       w-full md:    -->
            <table class="block table-fixed text-center w-auto   z-0 lg:z-10 ">
              <thead class="table-fixed w-full">
                <tr class="bg-blue-200">
                  <th class="min-w-60 w-96">#</th>
                  <th class="min-w-60 w-96">Asunto</th>
                  <th class="w-96">Descripcion</th>
                  <th class="w-96">FechadeCreacion</th>
                  <th class="min-w-60 w-96">Estado</th>
                  <th class="w-96">Ver mas</th>
                </tr>
              </thead>
              <tbody class=" table-fixed w-auto">
                <tr class="w-auto" v-for="(pqr, index) in pqrsUser" :key="index">
                  <td class=" ">{{index}}</td>
                  <td class=" ">{{pqr.affair}}</td>
                  <td class=" ">{{pqr.description}}</td>
                  <td class=" ">{{pqr.date}}</td>
                  <td v-if="pqr.fk_status_id===1" class="w-96 ">Activo</td>
                  <td v-if="pqr.fk_status_id===2" class="w-96 ">Resuelto</td>
                  <td v-if="pqr.fk_status_id===3" class="w-96 ">En proceso</td>
                  <td class=" ">ver mas</td>
                </tr>
              </tbody>
            </table>
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