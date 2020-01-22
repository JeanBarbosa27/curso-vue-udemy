<template>
  <div id="app">
    <keep-alive>
      <component :is="componente" />
    </keep-alive>
    <div class="grupo__botoes">
      <button @click="componente='Citacoes'">Citações</button>
      <button @click="componente='Sobre'">Versão</button>
    </div>
  </div>
</template>

<script>
import Citacoes from "./components/Citacoes";
import Sobre from "./components/Sobre";

export default {
  data() {
    return {
      componente: "Citacoes"
    };
  },
  components: { Citacoes, Sobre }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.6rem;
}

button {
  outline: none;
  padding: 5px 15px 10px;
  margin: 10px 5px;
  border-radius: 3px;
  font-size: 2rem;
  font-weight: 300;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
.grupo__botoes {
  margin: 15px 0;
}
</style>