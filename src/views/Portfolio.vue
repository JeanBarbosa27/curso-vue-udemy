<template>
  <div class="portfolio">
    <h3 class="portfolio__empty-list" v-if="!portfolio.length">Você não possui nenhuma ação!</h3>
    <ul class="portfolio__list" v-else>
      <li class="portfolio__item" v-for="item in portfolio" :key="item.name">
        <Card module="portfolio">
          <span slot="title">{{ item.name }}</span>
          <span slot="subtitle">
            (Preço: {{ item.price | currencyFormat }} | Qtde: {{ item.boughtQuantity }})
          </span>
          <Form
            module="portfolio"
            :hasError="item.hasError"
            label="Quantidade"
            :inputName="item.name"
            :inputValue="+item.quantity"
            :onInput="setQuantity"
            submitText="Vender"
            :formSubmit="sellPortfolio"
            slot="content"
          />
        </Card>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Card from '../components/fragments/Card';
import Form from '../components/fragments/Form';

export default {
  name: 'Portfolio',
  data() {
    return {
      totalGain: 0,
    }
  },
  components: {
    Card,
    Form
  },
  computed: {
    ...mapGetters(['getBalance', 'getPortfolio', 'getStockItem']),
    portfolio() {
      return this.getPortfolio;
    } 
  },
  methods: {
    ...mapMutations([
      'sellPortfolio',
      'updateItemError',
      'updateQuantity',
      'updateStockSum'
    ]),
    setQuantity({ target: { name, value }}) {
      const { commit } = this.$store;
      const { boughtQuantity, price } = this.getStockItem(name);
      let payload = { name }      
      commit('updateStockSum', +value * price);

      if(value <= boughtQuantity) {
        payload = {
          ...payload,
          quantity: value,
          hasError: false,
        }

        commit('updateQuantity', payload);
      } else {
        payload.hasError = true;
      }

      commit('updateItemError', payload);
    },
    sellPortfolio(event, payload) {
      this.$store.commit('sellPortfolio', payload);
      this.$store.commit('updateBalance', 'sell');
    }
  }
}
</script>

<style lang="scss">
  .portfolio {
    &__empty-list {
      height: 300px;
      text-align: center;
      line-height: 300px;
    }

    &__list {
      display: flex;
      width: 90%;
      max-width: 1230px;
      margin: 0 auto;
      padding: 20px;
      flex-wrap: wrap;
      align-items: center;
      list-style: none;
    }

    &__item {
      width: calc(33% - 12px);
      margin-right: 7.5px;
      margin-bottom: 15px;
      margin-left: 7.5px;
    }
  }
</style>