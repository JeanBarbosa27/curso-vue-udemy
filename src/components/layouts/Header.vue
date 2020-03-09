<template>
  <v-app-bar
    class="header"
    :dense="true"
    :short="true"
    height="50px"
  >
    <div class="logo">
      <strong>stock</strong><span>trader</span>
    </div>
    <div class="header__menu">
      <span>Inserir menu de rotas</span>
      <span>Inserir menu de ações</span>
    </div>
    <span class="header__balance">saldo {{ getBalance | currencyFormat }}</span>
  </v-app-bar>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'Header',
    computed: {
      ...mapGetters(['getBalance']),
    }
  }
</script>

<style lang="scss">
  .header {
    
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
    }   
  }

  

</style>
