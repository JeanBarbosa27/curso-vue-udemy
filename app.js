new Vue({
  el: '#desafio',
  data: {
    valor: 0,
  },
  computed: {
    resultado: function() {
      if (this.valor === 37) {
        return this.resultado = "Valor Igual"
      } else {
        return this.resultado = "Valor Diferente"
      }
    },
  },
  watch: {
    resultado: function() {
      const SELF = this;
      return setTimeout(function() {
        SELF.valor = 0;
      }, 5000)
    }
  }
});