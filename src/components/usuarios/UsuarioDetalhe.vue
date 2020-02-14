<template>
  <div class="usuario-detalhe">
      <h3>Detalhe do usuário {{ id }}</h3>
      <p><strong>Nome:</strong> {{ $route.params.user }}</p>
      <p><strong>Cadastro completo:</strong> {{ $route.query.completo ? "Sim" : "Não" }}</p>
      <p><strong>Língua:</strong> {{ $route.query.lingua }}</p>
      <router-link
        tag="button"
        primario
        :to="{
          name: 'editarUsuario',
          params: { id: id, user: $route.params.user }
        }"
      >
        Editar
      </router-link>
  </div>
</template>

<script>
export default {
  name: "UsuarioDetalhe",
  props: ["id"],
  // Essa forma abaixo é a forma antiga e mais verbosa de fazer essa leitura dos parâmetros. A forma mais simples e mais recente suportada pelo vue router é através de props, que precisa ter o mesmo nome que for definido na configuração da rota.
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // },
  // watch: {
  //   $route(to, from) {
  //     this.id = to.params.id
  //   }
  // },
}
</script>

<style>

</style>