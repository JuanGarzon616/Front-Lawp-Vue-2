<template>
<div>
  <links></links>
  <UserCreate></UserCreate>
</div>
</template>


<script>
import links from "@/components/links"
import UserCreate from "@/components/UserComponents/UserRegisterComponent"

export default {
  name: 'UserRegister',
  components: {
    links,
    UserCreate
  }
}
</script>