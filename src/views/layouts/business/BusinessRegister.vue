<template>
  <div>


  </div>
</template>

<script>
//import links from "@/components/links";

export default {
  name: "BusinessRegister",
  components: {

  },
  data(){
    return {
      nit: '',
      business_name: '',
      legal_name: '',
      tellephone1: '',
      tellephone2: '',
      mail: '',
      esector: '',
      fk_municipality_id: '',
      cdate: '',
      id: '',
    }
  },
  validations: {
    nit: {

    },
    business_name: {

    },
    legal_name:{

    },
    tellephone1: {

    },
    tellephone2: {

    },
    mail: {

    },
    esector: {

    }
  }
}
</script>

<style scoped>

</style>