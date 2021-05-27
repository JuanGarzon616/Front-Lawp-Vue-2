<template>
  <div class="w-60 min-h-screen bg-gray-900">
    <div class="h-16 flex flex-wrap content-center justify-center ">
      <p class=" font-mono font-black text-white text-4xl text-opacity-75">PQRS LAWP</p>
    </div>
    <div class="text-white text-2xl pt-3">
      <p v-on:click="pqrOptions" class="pl-10 py-3 hover:bg-gray-700"><i v-if="this.$store.getters.pqr" class="far fa-envelope-open"></i><i v-if="!this.$store.getters.pqr" class="far fa-envelope"></i> PQR</p>
      <pqrOptions v-if="this.$store.getters.pqr"></pqrOptions>
      <p v-on:click="changeUserOp" class="pl-10 py-3 hover:bg-gray-700"><i class="fas fa-user"></i> Peril</p>
      <userOptions v-if="this.$store.getters.userOp"></userOptions>
      <p class="pl-10 py-3 hover:bg-gray-700"><i class="fas fa-business-time"></i> Avanzado</p>
    </div>
  </div>
</template>

<script>
import pqrOptions from "@/components/UserComponents/others/pqrOptions";
import userOptions from "@/components/UserComponents/others/userOptions";
import {mapActions} from "vuex";
export default {
  name: "task",
  components: {
    pqrOptions,
    userOptions
  },
  methods: {
    ...mapActions(['changePqr']),
    ...mapActions(['changeUserOp']),
    pqrOptions(){
      this.changePqr()
    },
    userOptions(){
      this.changeUserOp()
    }
  }
}
</script>

<style scoped>

</style>