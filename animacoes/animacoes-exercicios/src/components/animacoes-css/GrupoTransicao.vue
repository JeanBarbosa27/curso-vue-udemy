<template>
  <div class="d-flex row justify-content-center">
    <span class="col-4">Total de tokes: {{ tokens.length }}</span>
    <transition-group
      name="slide"
      class="col-4 grupo-listas"
    >
      <b-list-group
        v-for="(token, i) in tokens"
        :key="i"
      >
        <b-list-group-item class="item-lista" @click="removerToken(i)">
          {{ token }}
        </b-list-group-item>
      </b-list-group>
    </transition-group>
    <b-button
      variant="primary"
      class="col-2 botao-adicionar"
      @click="adicionarToken"
    >
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
  .fade-enter-active, .slide-enter-active {
    background-color: #42b983;
    transition: all 1s ease 0.5s;
  }

  .grupo-listas {
    height: 372px;
    user-select: none;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .item-lista {
    position: relative;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 0.5s;
  }
  .item-lista:before {
    content: "Remover item";
    position: absolute;
    top: 5px;
    left: 5px;
    padding: 5px;
    font-size: 12px;
    color: transparent;
    font-weight: bold;
    text-transform: uppercase;
    transition: border-radius 1s, color 1s;
  }
  .item-lista:hover {
    color: #ffffff;
    background-color: firebrick;
  }
  .item-lista:hover:before {
    color: firebrick;
    background-color: #ffffff;
    border-radius: 20px;
  }
  .botao-adicionar {
    height: 50px;
    font-weight: bold;
    text-transform: uppercase;
  }
</style>