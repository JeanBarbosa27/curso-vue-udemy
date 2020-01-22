<template>
  <div class="contador">
    <span class="contador__valor">{{ contador }}</span>
    <button class="contador__acao contador__acao--aumentar" @click="alterarContador('aumentar')">+</button>
    <button class="contador__acao contador__acao--diminuir" @click="alterarContador('diminuir')">-</button>
  </div>
</template>

<script>
  export default {
    name: "Contador",
    data() {
      return {
        contador: 0
      }
    },
    methods: {
      alterarContador: function(acao, fator) {
        if (acao === "aumentar") {
          return fator ? this.contador + fator : this.contador++;
        } else if (acao === "diminuir") {
          return this.contador > 0 && fator ? this.contador - fator : this.contador--;
        }
      }
    }
  }
</script>

<style scoped>
  .contador {
    display: flex;
    align-items: center;
  }
  .contador__valor {
    width: 50px;
    margin-right: 20px;
    text-align: center;
    border-bottom: 2px solid #ccc;
    font-size: 30px;
  }
  .contador__acao {
    width: 30px;
    height: 30px;
    margin: 0 5px;
    padding: 5px;
    font-size: 18px;
    font-weight: 700;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
  }
  .contador__acao--aumentar {
    color: #ffffff;
    background-color: deepskyblue;
  }
  .contador__acao--diminuir {
    color: #ffffff;
    background-color: crimson;
  }
</style>