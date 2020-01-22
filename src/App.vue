<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr>
    <input type="text" :value="cpf | cpf">
    <p>{{ cpf | cpf | inverter }}</p>
    <hr>
    Vindo do componente:
    <Frutas/>
    <hr>
    Direto em App:
    <div>
      <ul>
        <li v-for="(fruta, f) in frutas" :key="f">{{ fruta }}</li>
      </ul>
      <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
  </div>
</template>

<script>
  import Frutas from "./Frutas"
  import mixins from "./mixins"

  export default {
    components: {Frutas},
    data() {
      return {
        cpf: "12345678900"
      }
    },
		mixins: mixins,
    filters: {
      cpf(valor) {
        const cpf = `${valor}`.split("")
        cpf.splice(3, 0, ".")
        cpf.splice(7, 0, ".")
        cpf.splice(11, 0, "-")
        return cpf.join("")
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 2.5rem;
  }
</style>
