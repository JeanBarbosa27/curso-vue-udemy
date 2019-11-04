<template>
  <div id="app">
    <h1>{{ titulo }}</h1>
    <button @click="titulo += '#'">Alterar</button>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      titulo: "Testa Data usando Vue JS!!"
    }
  }
}
</script>

<style>
#app {
  color: #ffffff;
  background-color: chocolate;
}
</style>
