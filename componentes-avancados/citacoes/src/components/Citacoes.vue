<template>
  <div class="citacoes">
    <span>
      <button @click="numero--">&lt;</button>
      <button @click="numero++">&gt;</button>
    </span>
    <p>{{ numero }} {{ indice }}</p>
    <citacao>
      <h1 slot="autor">Autor: {{ citacoes[indice].autor }}</h1>
      <p>{{ citacoes[indice].texto }}</p>
      <h6 slot="fonte">Fonte: {{ citacoes[indice].fonte }}</h6>
    </citacao>
  </div>
</template>

<script>
import citacao from "@/components/Citacao";
export default {
  data() {
    return {
      numero: 0,
      citacoes: [
        {
          fonte: "Jornal do Empreendedor",
          texto:
            "Lembre-se sempre que você é absolutamente único. Assim como todos os outros.",
          autor: "Margaret Mead"
        },
        {
          fonte: "Frases de Mãe",
          texto: "Isso não é um quarto, é um chiqueiro.",
          autor: "Roberta"
        },
        {
          fonte: "Frases de Pai",
          texto: "Vou contar até 3! 1, 2, 2...",
          autor: "Gustavo"
        }
      ]
    };
  },
  components: {
    citacao
  },
  computed: {
    indice() {
      return Math.abs(this.numero % 3);
    }
  }
};
</script>

<style scoped>
.citacoes {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
