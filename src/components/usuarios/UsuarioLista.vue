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
        :to="{
          name: 'detalheUsuario',
          params: {id: usuario.id, user: usuario.nome },
          query: { completo: usuario.completo, lingua: usuario.lingua }
        }"
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
          nome: "Mary",
          completo: false,
          lingua: "en-us"
        },
        {
          id: 2,
          nome: "João",
          completo: true,
          lingua: "pt-pt"
        },
        {
          id: 3,
          nome: "Rafael",
          completo: false,
          lingua: "pt-br"
        },
      ]
    }
  }
}
</script>

<style>

</style>