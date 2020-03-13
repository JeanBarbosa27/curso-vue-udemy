<template>
  <div class="portfolio">
    <h3 class="portfolio__empty-list" v-if="!portfolio.length">Você não possui nenhuma ação!</h3>
    <ul class="portfolio__list" v-else>
      <li class="portfolio__item" v-for="item in portfolio" :key="item.name">
        <Card module="portfolio">
          <span slot="title">{{ item.name }}</span>
          <span slot="subtitle">
            (Preço: {{ item.price | currencyFormat }})
          </span>
          <Form
            module="portfolio"
            label="Quantidade"
            :inputName="item.name"
            :inputValue="+item.quantity"
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
import { mapGetters } from 'vuex';
import Card from '../components/fragments/Card';
import Form from '../components/fragments/Form';

export default {
  name: 'Portfolio',
  components: {
    Card,
    Form
  },
  computed: {
    ...mapGetters(['getListFrom']),
    portfolio() {
      return this.getListFrom('portfolio');
    } 
  },
  methods: {
    sellPortfolio() {
      console.log('Fazer a lógica para "vender" a ação') //eslint-disable-line
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