<template>
  <div class="usuario-editar">
    <h3>Editar: {{ $route.params.user }}</h3>
  </div>
</template>

<script>
export default {
  name: "UsuaioEditar",
  props: ["id"]
}
</script>

<style>

</style>