<template>
  <div class="home">
    <h1 class="home__title">Negocie e Consulte suas Ações</h1>
    <v-app class="home__content">
      <v-alert class="home__alert" :value="true"  type="info">Você pode Salvar & Carregar os Dados</v-alert>
      <v-alert class="home__alert" :value="true" type="info" color="success">Clique em 'Finalizar dia' para iniciar um novo dia!</v-alert>
      <v-divider class="home__divider" />
    <h3 class="home__subtitle">Seu Saldo: {{ saldo | formatarMoeda }}</h3>
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
<style>
  .home {
    padding: 20px;
  }

  .home .home__content {
    background: none;
  }

  .home__title {
    margin-bottom: 15px;
    font-size: 2.5em;
    color: #333333;
    font-weight: 300;
  }

  .home__alert {
    width: 100%;
    margin: 0;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 1.1em;
    border: 0;
    box-shadow: 0 3px 6px rgba(0,0,0,0.3);
  }
  
  .home .home__alert .v-alert__icon {
    color: #ffffff;
  }

  .home__divider {
    margin: 10px 0;
  }

  .home__subtitle {
    margin: 10px 0;
    font-size: 1.5em;
  }
</style>
