<template>
  <div class="max-w-screen flex md:flex-row-reverse flex-col">
    <div class="w-full">
        <span>
          <userHeader class="z-20"></userHeader>
        </span>
      <div class="pl-0 pt-36 md:pl-24 min-h-screen bg-gray-200 flex flex-col">
        <h1 class="text-3xl z-0 lg:z-10"><b>Bienvenido</b></h1>
        <p class="text-xl z-0 lg:z-10">Aqui puedes ver tu pqr mas detallada, respuestas y adjuntos.</p>
        <div class="mt-10 p-10 w-full md:w-11/12 bg-white rounded-lg z-0 lg:z-10">
          <h1 class="text-lg z-0">Asunto: {{ $store.getters["d/pqrsUser"][$route.params.id]['affair'] }}</h1>
          <h1 class="text-lg z-0">Para: {{
              $store.getters["d/pqrsUser"][$route.params.id].business.bussiness_name
            }}</h1>
          <h1 v-if="$store.getters['d/pqrsUser'][$route.params.id].fk_pqr_type_id===1" class="text-lg">pregunta</h1>
          <h1 v-if="$store.getters['d/pqrsUser'][$route.params.id].fk_pqr_type_id===2" class="text-lg">queja</h1>
          <h1 v-if="$store.getters['d/pqrsUser'][$route.params.id].fk_pqr_type_id===3" class="text-lg">reclamo</h1>
          <VueEditor class="pt-10 pb-32 z-0" disabled
                     v-model="$store.getters['d/pqrsUser'][$route.params.id].description"></VueEditor>
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
import userHeader from '@/components/UserComponents/header';
import task from "@/components/UserComponents/task";
import {VueEditor} from "vue2-editor";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "pqruser",
  components: {
    userHeader,
    task,
    VueEditor,
  },
  computed: {
    ...mapGetters('d', ['pqrsUser'])
  },
  created() {
    this.getPqrUser()
    //this.onFail()
  },
  methods: {
    ...mapActions('d', ['getPqrUser']),
    onFail() {
      // if(!this.$store.getters['d/pqrsUser'][this.$route.params.id].affair){
      //   this.$router.push('/userlogin')
      console.log('hola')
      // }
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>