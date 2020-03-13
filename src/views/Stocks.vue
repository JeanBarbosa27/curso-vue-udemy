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
            label="Quantidade"
            :inputName="item.name"
            :inputValue="+item.quantity"
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
  components: {
    Card,
    Form
  },
  computed: {
    ...mapGetters(['getListFrom']),
    stocks() {
      return this.getListFrom('stocks');
    } 
  },
  methods: {
    buyStock() {
      console.log('Fazer a lógica para "comprar" a ação') //eslint-disable-line
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