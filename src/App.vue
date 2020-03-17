<template>
  <div id="app" class="stock-trader">
    <Header />
    <transition-group 
      mode="out-in"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view key="router-view" />
      <Message v-if="this.getMessage.show" key="message" :title="this.getMessage.title">
        <div v-html="this.getMessage.content" slot="content"></div>
      </Message>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Header from './components/layouts/Header.vue';
import Message from './components/fragments/Message';

export default {
  name: 'App',
  components: {
    Header,
    Message
  },
  computed: {
    ...mapGetters([
      'getMessage',
      'getPortfolio'
    ]),
    portfolio() {
      return this.getPortfolio;
    }
  },
  methods: {
    ...mapMutations([
      'loadStocks',
      'updateBalance',
      'updateStockSum',
    ]),
  },
  created() {
    const { commit } = this.$store;
    let newStockSum = 0;

    this.$http('stocks.json').then(response => {
      commit('loadStocks', response.data);
      if(this.portfolio.length) {
        this.portfolio.map(item => {
          newStockSum += item.boughtQuantity * item.price;
        });
        commit('updateStockSum', newStockSum);
        commit('updateBalance', 'buy');
      }
    }).catch(error => {
      console.error('error: ', error); // eslint-disable-line  
    })
    
  }
}
</script>

<style lang="scss">
.stock-trader {
  font-family: 'Roboto', sans-serif, Arial;
}
</style>

