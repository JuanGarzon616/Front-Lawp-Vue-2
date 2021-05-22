<template>
  <div class="">
    <links></links>
    <button v-on:click="hola">click</button>
  </div>
</template>

<script>

import links from '@/components/links'
import store from "@/store";
console.log(store.getters.rol)


export default {
  name: 'About',
  components: {
    links
  },
  methods: {
    hola(){
      let holas = JSON.parse(JSON.stringify(store.getters.rol)).is_admin
      alert(holas)
    }
  }
}
</script>
