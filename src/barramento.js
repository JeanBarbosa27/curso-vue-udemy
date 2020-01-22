import Vue from 'vue';
export default new Vue({
  data() {
    return {
      usuarioSelecionado: null
    }
  },
  methods: {
    selecionaUsuario(usuario) {
      this.$emit("usuarioSelecionado", usuario);
      this.usuarioSelecionado = usuario.id;
    },
    alertaUsuarioSelecionado(callback) {
      this.$on("usuarioSelecionado", callback)
    }
  }
})