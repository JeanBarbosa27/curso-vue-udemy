import Vue from "vue"
export default new Vue({
  data() {
    return {
      mensagem: ""
    }
  },
  methods: {
    alteraSobrenome(sobrenome) {
        this.$emit('alteraSobrenome', sobrenome)
        this.mensagem = 'Sobrenome alterado para: ' + sobrenome
    },
    alerta(callback) {
      this.$on("alteraSobrenome", callback)
    }
  },
  created() {
    this.alerta()
  }
})