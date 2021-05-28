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
      <p v-on:click="busOption" class="pl-10 py-3 hover:bg-gray-700"><i class="fas fa-business-time"></i> Avanzado</p>
      <busOption v-if="this.$store.getters.busOp"></busOption>
    </div>
  </div>
</template>

<script>
import pqrOptions from "@/components/UserComponents/others/pqrOptions";
import userOptions from "@/components/UserComponents/others/userOptions";
import {mapActions} from "vuex";
import busOption from "@/components/UserComponents/others/busOption";

export default {
  name: "task",
  components: {
    pqrOptions,
    userOptions,
    busOption,
  },
  methods: {
    ...mapActions(['changePqr']),
    ...mapActions(['changeUserOp']),
    ...mapActions(['changeBusOp']),
    pqrOptions(){
      this.changePqr()
    },
    userOptions(){
      this.changeUserOp()
    },
    busOption(){
      this.changeBusOp()
    },
  }
}
</script>

<style scoped>

</style>