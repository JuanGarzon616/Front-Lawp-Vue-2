<template>
  <div class="max-w-screen flex md:flex-row-reverse flex-col">
    <div class="w-full">
        <span>
          <userHeader class="z-20"></userHeader>
        </span>
      <div class="pl-0 pt-36 md:pl-24 min-h-screen bg-gray-200 flex flex-col">
        <h1 class="text-3xl z-0 lg:z-10"><b>Bienvenido</b></h1>
        <p class="text-xl z-0 lg:z-10">Aqui puedes ver y gestionar tus Pqr.</p>
        <input @keyup="event=>submit(event)" type="text"
               class="mt-10 ml-0 md:ml-10 focus:outline-none focus:ring focus:border-blue-300 z-0 lg:z-10 rounded-full w-full md:w-96 p-3"
               placeholder="Buscar por asunto" v-model="valor">
        <div class="flex pl-0 md:pl-10 ">
          <table
              class="block overflow-scroll w-full md:w-11/12 z-0 lg:z-10 bg-white rounded-lg sm:shadow-lg my-5 max-h-96">
            <thead class=" w-full">
            <tr class="bg-teal-400  rounded-l-lg sm:rounded-none">
              <th class="p-3 text-left w-3">#</th>
              <th class="p-3 text-left w-10">Asunto</th>
              <th class="p-3 text-left">Empresa</th>
              <th class="p-3 text-left w-32">Fecha de Creacion</th>
              <th class="p-3 text-left w-24">Estado</th>
              <th class="p-3 text-left w-48">Mas Acciones</th>
            </tr>
            </thead>
            <tbody class="">
            <tr v-for="(pqr, index) in pqrsUser" :key="index" class="">

              <td class="border-grey-light border p-3 ">{{ index }}</td>
              <td class="border-grey-light border p-3 ">{{ pqr.affair }}</td>
              <td class="border-grey-light border p-3 ">{{ pqr.business.bussiness_name }}</td>
              <td class="border-grey-light border p-3 ">{{ pqr.date }}</td>
              <td v-if="pqr.fk_status_id===1" class="border-grey-light border p-3 ">Activo</td>
              <td v-if="pqr.fk_status_id===2" class="border-grey-light border p-3 ">Resuelto</td>
              <td v-if="pqr.fk_status_id===3" class="border-grey-light border p-3 ">En proceso</td>
              <td class="border-grey-light border p-3 cursor-pointer">
                <h1 class="flex justify-center">
                  <router-link :to="{ name: 'pqruser', params: { id: index }}"  ><p class="text-blue-500">Ver <i class="fas fa-eye"></i></p>
                  </router-link>
                  |<p
                    class="text-red-500" v-on:click="prueba(pqr.id)">Eliminar <i class="fas fa-trash-alt"></i></p></h1>
              </td>
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
import Swal from "sweetalert2";

export default {
  name: 'ulogin',
  data() {
    return {
      valor: ''
    }
  },
  components: {
    userHeader,
    task
  },
  created() {
    this.getPqrUser()
    // this.getPqrUserAffair(this.valor)
  },
  computed: {
    ...mapGetters('d', ['pqrsUser'])
  },
  methods: {
    ...mapActions('d', ['getPqrUser']),
    ...mapActions('d', ['getPqrUserAffair']),
    ...mapActions('d', ['deletePqr']),
    submit(event) {
      let value = {
        id: JSON.parse(localStorage.getItem('user')).id,
        name: event.target.value
      }
      this.getPqrUserAffair(value)
      console.log(event.target.value)
    },
    prueba(id) {
      console.log('hola')
      Swal.fire({
        title: "Estas seguro?",
        text: "No podras recuperar la pqr!",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Si, borrar!",
        cancelButtonText: "No, cancelar!",

      }).then(result => {
        if (result.isConfirmed) {
          this.deletePqr(id)
          this.getPqrUser()
          Swal.fire("Borrado!", "Tu pqr se ha borrado correctamente.", "success");
        } else {
          Swal.fire("Cancelado", "", "error");
        }
      });
    }
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}

@media (min-width: 640px) {
  table {
    display: inline-table !important;
    /*max-height: 60vh;*/
    /*min-height: 60px;*/
  }

  thead tr:not(:first-child) {
    display: none;
  }
}
</style>