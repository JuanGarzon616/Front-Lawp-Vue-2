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
          <form class="flex flex-col">
            <label for="affair">Asunto</label>
            <input type="text" class="" id="affair">
            <label for="">Descripcion</label>
            <!--            <textarea name="" id="desc" cols="30" rows="10"></textarea>-->
<!--            <vue-editor  :editorToolbar="customToolbar"></vue-editor>-->
            <p @paste="sanitize">{{ content }}</p>
<!--            <p>Caracteres maximos 60.000 usted lleva ({{ content.length }})</p>-->
            <select class="z-0 lg:z-10" name="" id="">
              <option disabled value="">Seleccione un elemento</option>
              <option v-for="(item, index) in this.$store.getters['b/getNamesBusi']" :key="index" value="">
                {{ item.bussiness_name }}, {{ item.mail }}
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
// import {VueEditor} from "vue2-editor";

export default {
  name: "createpqr",
  components: {
    userHeader,
    task,
    // VueEditor,
  },
  data() {
    return {
      content: `&#60script&#62${alert("hola")}&#60/script&#62`,
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
        [{list: "ordered"}, {list: "bullet"}, {list: "check"}],
        [{color: []}, {background: []}],
        ["video"],
      ],
    }
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
    }
  }
}
</script>

<style scoped>

</style>