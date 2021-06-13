<template>
  <div class="max-w-screen flex md:flex-row-reverse flex-col ">

    <div class="w-full ">
        <span>
          <userHeader class="z-20"></userHeader>
        </span>
      <div class="pl-0 pt-36 md:pl-24 min-h-screen bg-gray-200 flex flex-col">
        <div class="pb-10">
          <h1 class="text-3xl z-0 lg:z-10"><b>Bienvenido</b></h1>
          <p class="text-xl z-0 lg:z-10">Aqui puedes crear tus Pqr.</p>
        </div>
        <!--        -->
        <div class="z-0 lg:z-10 bg-white p-10 mb-20 w-full lg:w-11/12 rounded-lg">
          <form class="flex flex-col w-full">
            <label for="affair" class="text-2xl">Asunto</label>
            <input type="text"
                   class=" w-1/3 p-1 border focus:outline-none focus:ring-2 focus:border-transparent rounded-lg shadow-2xl"
                   id="affair">
            <div class="py-10 grid gap-10 grid-cols-1 md:grid-cols-3 flex justify-between">
              <div class="divin">
                <label for="empre" class="text-2xl">Empresa destinataria</label>
                <p>Recuerde revisar el correo correcto</p>
                <select
                    class=" z-0 lg:z-10 p-1 border focus:outline-none focus:ring-2 focus:border-transparent rounded-lg shadow-2xl"
                    name="" id="empre">
                  <option disabled value="">Seleccione un elemento</option>
                  <option v-for="(item, index) in this.$store.getters['b/getNamesBusi']" :key="index" value="">
                    {{ item.bussiness_name }}, {{ item.mail }}
                  </option>
                </select>
              </div>
              <div class="divin">
                <label for="pqrtype" class="text-2xl">Tipo de PQR</label>
                <p></p>
                <select name="" id="pqrtype"
                        class=" z-0 lg:z-10 p-1 border focus:outline-none focus:ring-2 focus:border-transparent rounded-lg shadow-2xl">
                  <option disabled value="">Seleccione un elemento</option>
                  <option value="1">pregunta</option>
                  <option value="2">queja</option>
                  <option value="3">reclamo</option>
                </select>
              </div>
              <div class="divin">
                <label for="d" class="text-2xl">Fecha del momento</label>
                <p>fechas antes de hoy.</p>
                <input type="date" id="d" class="inputs">
              </div>
            </div>
            <label for="desc" class="text-2xl">Descripcion</label>
            <p>Recuerda ser lo mas puntual posible</p>
            <vue-editor :editorToolbar="customToolbar" v-model="content" id="desc"></vue-editor>
            <p>Caracteres maximos 60.000 usted lleva ({{ content.length }})</p>
            <div class="mt-10">
              <div>
                <p class="text-2xl">Adjuntos</p>
                <p>Agrega solo si crees necesario.</p>
                <div class="text-3xl">
                  <i v-on:click="sum" class="fas fa-plus"></i>
                  <i v-on:click="less" class="fas fa-minus"></i>
                </div>

              </div>
              <div class="grid gap-3 grid-cols-1 md:grid-cols-2">
                <div v-for="(id, index) in numadj" :key="index" class="grid gap-3 grid-cols-1">
                  <label for="url">Url (no necesria)</label>
                  <input class="inputs" type="text" id="url">
                  <label for="fil"></label>
                  <input class="inputs" type="file" id="fil">
                </div>
              </div>
            </div>
            <div class="mt-10">
              <input class="text-gray-200 bg-gray-700 hover:bg-gray-500 py-2 px-4 rounded w-20" type="submit" value="enviar">
            </div>

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
import {VueEditor} from "vue2-editor";

export default {
  name: "createpqr",
  components: {
    userHeader,
    task,
    VueEditor,
  },
  data() {
    return {
      content: '',
      numadj: 0,
      affair: '',

      //content: `&#60script&#62${alert("hola")}&#60/script&#62`,
      customToolbar: [
        [{font: []}],
        [{header: [false, 1, 2, 3, 4, 5, 6]}],
        [{size: ["small", false, "large", "huge"]}],
        ["bold", "italic", "underline", "strike"],
        [
          {align: ""},
          {align: "center"},
          {align: "right"},
          {align: "justify"}
        ],
        [{list: "ordered"}, {list: "bullet"}],
        [{color: []}, {background: []}],
        ["video"],
      ],
    }
  },
  validation: {

  },
  created() {
    this.getBusName()
  },
  /*computed: {

  },*/
  methods: {
    ...mapActions('b', ['getBusName']),
    sanitize(event) {
      event.preventDefault();
      const html = this.$sanitize(event.clipboardData.getData('text/html'));
      //or
      //const html = this.$sanitize(
      //  event.clipboardData.getData('text/html'),
      //  {
      //    allowedTags: ['b', 'br']
      //  }
      //);
      document.execCommand('insertHTML', false, (html));
    },
    sum() {
      this.numadj++
    },
    less() {
      this.numadj--
    }
  }
}
</script>

<style scoped>

</style>