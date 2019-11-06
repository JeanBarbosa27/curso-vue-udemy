import Vue from "vue"
export default new Vue({
  data() {
    return {
      mensagem: ""
    }
  },
  methods: {
    teste() {
      this.$on("alteraSobrenome", sobrenome => this.mensagem = 'Sobrenome alterado para: ' + sobrenome)
    }
  },
  created() {
    this.teste()
  }
})