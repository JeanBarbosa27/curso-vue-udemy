<template>
  <div class="home">
    <h1 class="home__title">Negocie e Consulte suas Ações</h1>
    <v-app class="home__content">
      <v-alert class="home__alert" :value="true" color="info" :tile="true" >
        <v-icon>info</v-icon>
        Você pode Salvar & Carregar os Dados
      </v-alert>
      <v-alert class="home__alert" :value="true" color="success" :tile="true">
        <v-icon>info</v-icon>
        Clique em 'Finalizar dia' para iniciar um novo dia!
      </v-alert>
      <v-divider class="home__divider" />
      <h3 class="home__subtitle">Seu Saldo: {{ saldo | currencyFormat }}</h3>
    </v-app>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    name: "Home",
    computed: {
      ...mapGetters(["getBalance"]),
      saldo: {
        get() {
          return this.getBalance;
        }
      }
    }
  }
</script>

<style lang="scss">
  .home {
    padding: 20px;
    &__content {
      background: none;
    }

    &__title {
      margin-bottom: 15px;
      font-size: 2.5em;
      color: #333333;
      font-weight: 300;
    }

    &__alert {
      width: 100%;
      margin: 0;
      margin-bottom: 10px;
      padding: 10px;
      font-size: 1.1em;
      border: 0;
      box-shadow: 0 3px 6px rgba(0,0,0,0.3);
      
      .v {
        &-alert__content {
          display: flex;
        }

         &-icon {
          margin-right: 10px;
        }

        &-alert__content,
        &-icon {
          color: #ffffff;
        }

      }
    }
  
    &__divider {
      margin: 10px 0;
    }

    &__subtitle {
      margin: 10px 0;
      font-size: 1.5em;
    }
  }
</style>
