<template>
  <div>
    <ul>
      <li v-for="(fruta, f) in frutas" :key="f">{{ fruta }}</li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add">
  </div>
</template>

<script>
  import { frutas } from "./mixins";
  export default {
    name: "Frutas",
    mixins: [frutas]
  }
</script>

<style scoped>

</style>