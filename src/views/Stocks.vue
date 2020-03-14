<template>
  <div class="stocks">
    <h3 class="stocks__empty-list" v-if="!stocks.length">Você não possui nenhuma ação!</h3>
    <ul class="stocks__list" v-else>
      <li class="stocks__item" v-for="item in stocks" :key="item.name">
        <Card module="stocks">
          <span slot="title">{{ item.name }}</span>
          <span slot="subtitle">
            (Preço: {{ item.price | currencyFormat }})
          </span>
          <Form
            module="stocks"
            :hasError="item.hasError"
            label="Quantidade"
            :inputName="item.name"
            :inputValue="+item.quantity"
            :onInput="setQuantity"
            submitText="Comprar"
            :formSubmit="buyStock"
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
  name: 'Stocks',
  data() {
    return {
      totalCost: 0
    }
  },
  components: {
    Card,
    Form
  },
  computed: {
    ...mapGetters(['getBalance', 'getStocks', 'getStockItem']),
    balance() {
      return this.getBalance;
    },
    stocks() {
      return this.getStocks;
    } 
  },
  methods: {
  ...mapMutations([
    'buyStock',
    'updateBalance',
    'updateItemError',
    'updateQuantity'
  ]),
    setQuantity({ target: { name, value }}) {
      const { price } = this.getStockItem(name);
      let payload = { name };
      this.totalCost = +value * price;

      if(this.totalCost < this.balance) {
        payload = {
          ...payload,
          quantity: value,
          hasError: false
        }

        this.$store.commit('updateQuantity', payload);

      } else {
        payload.hasError = true;
      }
      this.$store.commit('updateItemError', payload)
    },
    
    buyStock(event, payload) {
      const newBalance = this.balance - this.totalCost;
      this.$store.commit('buyStock', payload);
      this.$store.commit('updateBalance', newBalance);
    }
  }
}
</script>

<style lang="scss">
  .stocks {
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