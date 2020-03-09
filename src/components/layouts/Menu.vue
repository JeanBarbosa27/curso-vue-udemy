<template>
  <nav class="menu">
    <ul class="menu__list">
      <router-link
        v-for="(item, index) in items"
        :key="index"
        :to="item.path"
        class="menu__item"
        tag="li"
      >{{ item.text }}</router-link>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Menu',
    data() {
      return {
        items: [
          {
            path: '/stocks',
            text: 'Stocks'
          },
          {
            path: '/portfolio',
            text: 'Portfolio'
          },
        ]
      }
    }
  }
</script>
<style lang="scss">
.menu {
  &__list {
    display: flex;
    list-style: none;
  }
}
</style>
