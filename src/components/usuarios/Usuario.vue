<template>
  <div>
    <h2>Usuario</h2>
    <hr/>
    <p><strong>Código: {{ id }} </strong></p>
    <button sucesso @click="irParaInicio">Voltar para início</button>
  </div>
</template>

<script>
export default {
  name: "Usuario",
  props: ["id"],
  // Essa forma abaixo é a forma antiga e mais verbosa de fazer essa leitura dos parâmetros. A forma mais simples e mais recente suportada pelo vue router é através de props, que precisa ter o mesmo nome que for definido na configuração da rota.
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // },
  // watch: {
  //   $route(to, from) {
  //     this.id = to.params.id
  //   }
  // },
  methods: {
    irParaInicio() {
      this.$router.push({ path: "/" })
    }
  }
}
</script>
<style>

</style>