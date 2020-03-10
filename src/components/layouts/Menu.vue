<template>
  <nav class="menu">
    <ul class="menu__list">
      <router-link
        v-for="(item, index) in items"
        :key="index"
        :to="item.path"
        class="menu__item"
        tag="li"
        exact
        active-class="active"
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
            path: '/',
            text: 'Início'
          },
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

  &__item {
    padding: 17px 10px;
    font-size: 0.8em;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 300ms ease-in;

    &.active,
    &:hover,
    &:focus {
      background: #dddddd;
    }
  }
}
</style>
