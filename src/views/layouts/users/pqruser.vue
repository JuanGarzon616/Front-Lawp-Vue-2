<template>
  <div class="max-w-screen flex md:flex-row-reverse flex-col">
    <div class="w-full">
        <span>
          <userHeader class="z-20"></userHeader>
        </span>
      <div class="pl-0 pt-36 md:pl-24 min-h-screen bg-gray-200 flex flex-col">
        <h1 class="text-3xl z-0 lg:z-10"><b>Bienvenido</b></h1>
        <p class="text-xl z-0 lg:z-10">Aqui puedes ver tu pqr mas detallada, respuestas y adjuntos.</p>
        <div class="mt-10 mb-32 p-10 w-full md:w-11/12 bg-white rounded-lg z-0 lg:z-10 font-serif">
          <h1 class="text-3xl">Tu PQR</h1>
          <h1 class="text-lg z-0 pt-10">Asunto: {{
              $store.getters["d/pqrsUser"][$route.params.id]['affair']
            }}</h1>
          <h1 class="text-lg z-0 ">Para: <b>{{
              $store.getters["d/pqrsUser"][$route.params.id].business.bussiness_name
            }}, {{
              $store.getters["d/pqrsUser"][$route.params.id].business.mail
            }}</b></h1>
          <h1 v-if="$store.getters['d/pqrsUser'][$route.params.id].fk_pqr_type_id===1" class="text-lg font-serif">
            pregunta</h1>
          <h1 v-if="$store.getters['d/pqrsUser'][$route.params.id].fk_pqr_type_id===2" class="text-lg font-serif">
            queja</h1>
          <h1 v-if="$store.getters['d/pqrsUser'][$route.params.id].fk_pqr_type_id===3" class="text-lg font-serif">
            reclamo</h1>
          <VueEditor class="pt-10 pb-10 z-0" disabled
                     v-model="$store.getters['d/pqrsUser'][$route.params.id].description"></VueEditor>
          <div class=" font-serif">
            <h1 class="text-3xl pb-5">Links</h1>
            <p v-for="(item, index) in $store.getters['d/pqrsUser'][$route.params.id].attachments" :key="index">
              <a v-if="item.url" class="text-purple-500 hover:text-purple-700 text-base" v-bind:href="item.url"
                 download="prueba">Url {{ item.url }}</a>
            </p>
          </div>
          <div class=" font-serif">
            <h1 class="text-3xl pt-10">Archivos</h1>
            <p class="" v-for="(item, index) in $store.getters['d/pqrsUser'][$route.params.id].attachments"
               :key="index">
              <a class="text-purple-400 hover:text-purple-900 " v-bind:href="item.archive" download
                 rel="noopener noreferrer" target="_blank">Adjunto {{ index + 1 }}</a>
            </p>
          </div>
          <h1 class="text-3xl pt-10 font-serif">Respuestas</h1>
          <div class="pl-10 font-serif"
               v-for="(item, index) in $store.getters['d/pqrsUser'][$route.params.id].responses" :key="index">
            <VueEditor class="pt-10" disabled v-if="item.response_pqr" v-model="item.response_pqr"></VueEditor>
            <h1 class="text-3xl pb-5">Links</h1>
            <h1 class="text-3xl pb-5">Archivos</h1>
            <h1 v-for="(item, index) in item.attachments" :key="index">
              <a class="text-purple-400 hover:text-purple-900 " v-bind:href="item.archive" download
                 rel="noopener noreferrer" target="_blank">Adjunto {{ index + 1 }}</a>
            </h1>

          </div>


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
    }
  },
  data() {
    return {
      customToolbar: [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
      ],
    }
  }
}
</script>

<style scoped>

textarea {
  resize: none;
}

</style>