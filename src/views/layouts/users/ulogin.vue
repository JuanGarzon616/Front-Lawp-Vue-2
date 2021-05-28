<template>
  <div class="max-w-screen flex md:flex-row-reverse flex-col ">


    <div class="w-full">
      <span>
        <userHeader></userHeader>
      </span>
      <span>
        <h1>user login asdasd</h1>
      </span>
    </div>
    <span class="md:static fixed inset-x-0 top-16">
      <task v-if="this.$store.getters.bar"></task>
    </span>
  </div>
</template>

<script>
import userHeader from "@/components/UserComponents/header";
import task from "@/components/UserComponents/task";

export default {
  name: 'ulogin',
  components: {
    userHeader,
    task//
  }
}
</script>

<style scoped>

</style>