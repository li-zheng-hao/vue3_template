<script setup lang="ts">
// import { ref } from 'vue'
import router from '../router'

const path = import.meta.env.VITE_NAME
// const count = ref(0)
const clicked = ():void => {
  router.push({ name: 'Login', params: { msg: 'this is passed msg' } })
}
</script>

<template>

  <h1>{{path}}</h1>
  <button @click="clicked"> click change to login</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
