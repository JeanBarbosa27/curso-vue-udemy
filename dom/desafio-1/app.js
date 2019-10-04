new Vue({
  el: "#desafio",
  data: {
    nome: "Jean Barbosa",
    imagemGoogle:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Shotokan_japanese.svg/1200px-Shotokan_japanese.svg.png"
  },
  methods: {
    calculaIdade: function() {
      return new Date().getFullYear() - new Date("1987-01-27").getFullYear();
    },
    idadeMultiplicada(fator) {
      return this.calculaIdade() * fator;
    },
    numeroAleatorio() {
      return Math.random();
    }
  }
});
