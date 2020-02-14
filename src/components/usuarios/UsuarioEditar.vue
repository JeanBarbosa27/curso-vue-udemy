<template>
  <div class="usuario-editar">
    <h3>Editar: {{ $route.params.user }}</h3>
    <footer id="rodape">Curso Vue</footer>
  </div>
</template>

<script>
export default {
  name: "UsuaioEditar",
  props: ["id"]
}
</script>

<style scoped>
#rodape {
  margin-top: 1000px;
}
</style>