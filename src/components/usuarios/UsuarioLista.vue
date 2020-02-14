<template>
  <div class="usuario-lista">
    <h3>Lista de usuários</h3>
    <ul class="lista">
      <router-link
        v-for="usuario in usuarios"
        :key="usuario.id"
        tag="li"
        exact
        class="item-lista"
        :to="{ name: 'detalheUsuario', params: {id: usuario.id, user: usuario.nome}}"
      >
        {{ usuario.nome }}
      </router-link>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: "UsuarioLista",
  data() {
    return {
      usuarios: [
        {
          id: 1,
          nome: "Maria"
        },
        {
          id: 2,
          nome: "João"
        },
        {
          id: 3,
          nome: "Jesus"
        },
      ]
    }
  }
}
</script>

<style>

</style>