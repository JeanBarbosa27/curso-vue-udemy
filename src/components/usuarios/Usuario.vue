<template>
  <div>
    <h2>Usuario</h2>
    <hr/>
    <p><strong>Código: {{ id }} </strong></p>
    <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
  name: "Usuario",
  data() {
    return {
      id: this.$route.params.id
    }
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id
    }
  },
  methods: {
    irParaInicio() {
      this.$router.push({ path: "/" })
    }
  }
}
</script>
<style>

</style>