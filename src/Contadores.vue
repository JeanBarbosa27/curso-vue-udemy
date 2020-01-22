<template>
  <div class="contadores">
    <h1>Contadores:</h1>
    <app-contador v-for="c in 5" :key="c"></app-contador>
  </div>
</template>

<script>
  import contador from "./Contador"
  export default {
    name: "Contadores",
    components: {
      "app-contador": contador
    }
  }
</script>

<style scoped>

</style>