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
          path: "/usuarios",
          text: "Usuários"
        },
      ]
    }
  }
}
</script>

<style>

</style>