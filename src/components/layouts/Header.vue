<template>
  <v-app-bar
    class="header"
    :dense="true"
    :short="true"
    height="50px"
  >
    <div class="logo">
      <router-link class="logo__link" to="/">
        <strong>stock</strong><span>trader</span>
      </router-link>
    </div>
    <div class="header__menu">
      <Menu />
      <ActionMenu />
    </div>
    <span class="header__balance">saldo {{ getBalance | currencyFormat }}</span>
  </v-app-bar>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Menu from './Menu';
  import ActionMenu from './ActionMenu';

  export default {
    name: 'Header',
    components: {
      Menu,
      ActionMenu,
    },
    computed: {
      ...mapGetters(['getBalance']),
    }
  }
</script>

<style lang="scss">
  .header {
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;

    &__menu {
      display: flex;
      flex: 1 1 100%;
      padding: 0 10px;
      justify-content: space-between;
    }
    
    &__balance {
      display: block;
      white-space: nowrap;
    }

   .logo {
      font-size: 1.5em;
      text-transform: uppercase;

      &__link {
        color: #333333;
        text-decoration: none;  
        cursor: pointer;
      }
    }   
  }

  

</style>
