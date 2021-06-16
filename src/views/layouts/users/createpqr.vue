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
          <form v-on:submit.prevent="submit" class="flex flex-col w-full">
            <label for="affair" class="text-2xl">Asunto</label>
            <input type="text" :class="{ 'postin': $v.asunto.$error }"
                   class=" w-1/3 p-1 border focus:outline-none focus:ring-2 focus:border-transparent rounded-lg shadow-2xl"
                   id="affair" v-model.trim="$v.asunto.$model">
            <div class="py-10 grid gap-10 grid-cols-1 md:grid-cols-3 flex justify-between">
              <div class="divin">
                <label for="empresa" class="text-2xl">Empresa destinataria</label>
                <p>Recuerde revisar el correo correcto</p>
                <select
                    class=" z-0 lg:z-10 p-1 border focus:outline-none focus:ring-2 focus:border-transparent rounded-lg shadow-2xl"
                    name="" id="empresa" v-model.trim="$v.empresa.$model" :class="{ 'postin': $v.empresa.$error }">
                  <option disabled value="">Seleccione un elemento</option>
                  <option v-for="(item, index) in this.$store.getters['b/getNamesBusi']" :key="index"
                          v-bind:value=item.id>
                    {{ item.bussiness_name }}, {{ item.mail }}
                  </option>
                </select>
              </div>
              <div class="divin">
                <label for="pqrtype" class="text-2xl">Tipo de PQR</label>
                <p></p>
                <select name="" id="pqrtype"
                        class=" z-0 lg:z-10 p-1 border focus:outline-none focus:ring-2 focus:border-transparent rounded-lg shadow-2xl"
                        v-model.trim="$v.type.$model" :class="{ 'postin': $v.type.$error }">
                  <option disabled value="">Seleccione un elemento</option>
                  <option value="1">pregunta</option>
                  <option value="2">queja</option>
                  <option value="3">reclamo</option>
                </select>
              </div>
              <div class="divin">
                <label for="d" class="text-2xl">Fecha del momento</label>
                <p>fechas antes de hoy.</p>
                <input type="date" id="d" class="inputs" :class="{ 'postin': $v.fecha.$error }"
                       v-model.trim="$v.fecha.$model">
              </div>
            </div>
            <label for="desc" class="text-2xl">Descripcion</label>
            <p>Recuerda ser lo mas puntual posible</p>
            <vue-editor :editorToolbar="customToolbar" v-model.trim="$v.content.$model" id="desc"
                        :class="{ 'postin': $v.content.$error }"></vue-editor>
            <p>Caracteres maximos 60.000 usted lleva ({{ content.length }})</p>
            <div class="mt-10">
              <div>
                <p class="text-2xl" v-on:click="prueba">Adjuntos</p>
                <p>Solo se permiten archivos jpeg, png, pdf de maximo 1000KB.</p>
                <p v-if="ar.length>0">Archivos subidos: {{ ar.length }} </p>
                <div class="grid grid-colos-1 w-1/2">
                  <label for="url">Url (no necesaria)</label>
                  <input class="inputs" type="url" id="url" :class="{ 'postin': $v.ur.$error }" v-model.trim="$v.ur.$model">
                </div>

                <div class="text-3xl">
                  <i v-on:click="sum" class="fas fa-plus"></i><br>
                  <i v-on:click="less" class="fas fa-minus"></i>
                </div>

              </div>
              <div class="grid gap-3 grid-cols-1 md:grid-cols-2">
                <div v-for="(id, index) in numadj" :key="index" class="grid gap-3 grid-cols-1">

                  <label for="file"></label>
                  <!--                  v-bind:value="$v.ar.$model"-->
                  <input class="inputs" :class="{ 'postin': $v.ar.$error }" type="file" id="file"
                         @change="onFilePicked">
                </div>
              </div>
            </div>
            <div class="mt-10">
              <input class="text-gray-200 bg-gray-700 hover:bg-gray-500 py-2 px-4 rounded w-20" type="submit"
                     value="enviar">
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
import {required, maxLength, requiredIf} from 'vuelidate/lib/validators';
import Swal from "sweetalert2";

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
      asunto: '',
      empresa: '',
      type: '',
      fecha: '',
      ar: [],
      ur: '',
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
  validations: {
    asunto: {
      required,
      maxLength: maxLength(54)
    },
    empresa: {
      required,
    },
    type: {
      required,
    },
    fecha: {
      required,
    },
    content: {
      required,
      maxLength: maxLength(59999)
    },
    ur: {
      maxLength: maxLength(354)
    },
    ar: {
      required: requiredIf(function () {
        return this.numadj > 0;

      })
      // maxLength: maxLength(254)
    }
  },
  created() {
    this.getBusName()
  },
  methods: {
    ...mapActions('b', ['getBusName']),
    ...mapActions('d', ['savePqrs']),
    sum() {
      this.numadj++
    },
    onFilePicked(event) {
      const files = event.target.files
      let filesize = files[0].size
      // console.log(filename)
      if (filesize >= 1000000) {
        Swal.fire("Error", 'El archivo es demaciado pesado.', 'error');
        this.numadj--
      } else {
        /*const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result
        })
        fileReader.readAsDataURL(files[0])*/

        if (files[0].type === 'image/jpeg' || files[0].type === 'application/pdf' || files[0].type === 'image/png') {
          // console.log('hola')
          console.log('holabueno')
          console.log(this.ar)
          // let fd = new FormData()
          // fd.append('file', files[0])
          this.ar.push({
            archive: files[0],
            url: this.ur
          })
        } else {
          this.numadj--
          console.log('hola malo')
        }
      }

    },
    prueba() {
      console.log(this.ar.length)
      console.log(this.ar)
    },
    less() {
      this.numadj--
    },
    savePqr() {
      // let pqr = {
      //   affair: this.asunto,
      //   description: this.content,
      //   date: this.fecha,
      //   fk_user_id: JSON.parse(localStorage.getItem("user")).id,
      //   fk_bussiness_id: this.empresa,
      //   fk_pqr_Type_id: this.type,
      //   attachment: this.ar
      // }
      let fd = new FormData();
      fd.append('affair', this.asunto)
      fd.append('description', this.content)
      fd.append('date',this.fecha)
      fd.append('fk_user_id', JSON.parse(localStorage.getItem("user")).id)
      fd.append('fk_bussiness_id', this.empresa)
      fd.append('fk_pqr_Type_id', this.type)
      for (let i = 1; i<=this.ar.length; i++) {
        //console.log(this.ar[i-1].archive)
        fd.append(`attachment[${i}][archive]`, this.ar[i-1].archive)
        fd.append(`attachment[${i}][url]`, this.ar[i-1].url)
      }
      // fd.append('attachment', this.ar['archive'])
      // fd.append('attachment', this.ar['url'])

      this.savePqrs(fd)
    },
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.savePqr()
        console.log('submit!')
      }
    }
  }
}
</script>

<style scoped>

</style>