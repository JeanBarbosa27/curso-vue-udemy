<template>
  <div>
    <p class="nome">Citações</p>
    <p class="versao">Versão {{ versao }}</p>
  </div>
</template>

<script>
import { version } from "../../package.json";
export default {
  data() {
    return {
      versao: version
    };
  }
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  height: 200px;
  width: 200px;
  border-radius: 100px;
}

p {
  margin: 0;
}

.nome {
  font-size: 2.1rem;
  font-weight: bold;
}

.versao {
  font-size: 1.4rem;
}
</style>
