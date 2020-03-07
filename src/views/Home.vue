<template>
  <div class="home">
    <h1 class="home__title">Negocie e consulte suas Ações</h1>
    <v-app class="home__content">
      <v-alert class="home__alert" :value="true"  type="info">Você pode Salvar & Carregar os Dados</v-alert>
      <v-alert class="home__alert" :value="true" type="info" color="success">Clique em 'Finalizar dia' para iniciar um novo dia!</v-alert>
      <v-divider />
    <h3 class="home__subtitle">Seu saldo: R$ {{ getBalance }}</h3>
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
  }

  .home__alert {
    width: 100%;
    margin-bottom: 15px;
    padding: 10px;
    border: 0;
    box-shadow: 0 2px 3px rgba(0,0,0,0.5);
  }

</style>
