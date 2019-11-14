<template>
  
</template>

<script>
  export default {
    name: "GrupoTransicao",
    data() {
      return {
        tokens: ["433knv9m3", "gskfj443d", "654frt3", "324rekvgdr"]
      }
    },
    methods: {
      adicionarTokens() {
        const token = Math.random().toString(36).substring(2);
        this.tokens.push(token);
      },
      removerToken(indice) {
        this.tokens.splice(indice, 1);
      }
    }
  }
</script>

<style scoped>

</style>