<template>
  <div class="d-flex row justify-content-center">
    <span class="col-4">Total de tokes: {{ tokens.length }}</span>
    <transition-group
      class="col-4"
      style="height: 372px; user-select: none; overflow-y: auto"
    >
      <b-list-group
        v-for="(token, i) in tokens"
        :key="i"
      >
        <b-list-group-item style="cursor: pointer" @click="removerToken(i)">
          {{ token }}
        </b-list-group-item>
      </b-list-group>
    </transition-group>
    <b-button variant="primary" style="height: 50px" class="col-2" @click="adicionarToken">
      Adicionar token
    </b-button>
  </div>
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
      adicionarToken() {
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