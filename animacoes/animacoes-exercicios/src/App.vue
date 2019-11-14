<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr>
    <div class="row d-flex align-items-center mb-5">
      <h2 class="col-7">Selecione o componente:</h2>
      <b-select class="col-4" v-model="componenteSelecionado">
        <optgroup label="Feito com CSS">
          <option value="Animacao">Animação</option>
          <option value="AnimacaoDinamica">Animação Dinâmica</option>
          <option value="ComponenteDinamico">Componente Dinâmico</option>
          <option value="GrupoTransicao">Grupo com Transição</option>
          <option value="MultiplosElementos">Multiplos Elementos</option>
          <option value="Transicao">Transição</option>
        </optgroup>
        <optgroup label="Feito com JS">
          <option value="AlternarTamanho">Alternar Tamanho</option>
        </optgroup>
      </b-select>
    </div>

    <component :is="componenteSelecionado"></component>
  </div>
</template>

<script>
  import AlternarTamanho from "./components/animacoes-js/AlternarTamanho"
  import Animacao from "./components/animacoes-css/Animacao"
  import AnimacaoDinamica from "./components/animacoes-css/AnimacaoDinamica"
  import ComponenteDinamico from "./components/animacoes-css/ComponenteDinamico"
  import GrupoTransicao from "./components/animacoes-css/GrupoTransicao"
  import MultiplosElementos from "./components/animacoes-css/MultiplosElementos"
  import Transicao from "./components/animacoes-css/Transicao"

  export default {
    components: {
      AlternarTamanho,
      Animacao,
      AnimacaoDinamica,
      ComponenteDinamico,
      GrupoTransicao,
      MultiplosElementos,
      Transicao
    },
    data() {
      return {
        componenteSelecionado: "Transicao",
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
    font-size: 1.5rem;
    overflow-x: hidden;
  }

  .caixa {
    width: 300px;
    height: 100px;
    margin: 30px auto;
    background-color: lightgreen;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }

  .slide-enter-active {
    animation: slide-in 1s ease;
    transition: opacity 2s;
  }

  .slide-leave-active {
    position: absolute;
    width: 100%;
    animation: slide-out 1s ease;
    transition: opacity 0.5s;
  }

  .slide-enter, .slide-leave-to {
    opacity: 0;
  }
  .slide-move {
    transition: transform 1s;
  }
</style>
