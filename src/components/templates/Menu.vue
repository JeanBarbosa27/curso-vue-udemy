<template>
  <nav class="menu">
    <ul>
      <router-link
        v-for="link in links"
        :key="link.path"
        tag="li"
        :to="link.path"
        exact
        active-class="active"
      >
        <a>{{ link.text }}</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>

export default {
  name: "Menu",
  data() {
    return {
      links: [
        {
          path: "/",
          text: "Início"
        },
        {
          path: "/usuario/1",
          text: "Usuário 1"
        },
        {
          path: "/usuario/2",
          text: "Usuário 2"
        },
      ]
    }
  }
}
</script>

<style>

</style>