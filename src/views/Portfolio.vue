<template>
  <div class="portfolio">
    <ul class="portfolio__list">
      <li class="portfolio__item" v-for="item in portfolio" :key="item.name">
        <v-card class="portfolio__card" tile="true">
          <v-card-title class="portfolio__card-title">
            {{ item.name }}
            <span class="portfolio__card-price">
              (Preço: {{ item.price | currencyFormat }})
            </span>
          </v-card-title>
          <v-card-text>{{ item.quantity }}</v-card-text>
        </v-card>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Portfolio',
  computed: {
    ...mapGetters(['getListFrom']),
    portfolio() {
      return this.getListFrom('stocks');
    } 
  }
}
</script>

<style lang="scss">
  .portfolio {
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
      width: calc(33% - 6.5px);
      margin-bottom: 15px;

      &:not(:nth-child(3n)) {
        margin-right: 15px
      }
    }

    &__card {
      &-title {
        padding: 10px;
        color: #ffffff;
        background: #487a3e;
        line-height: 1em;
      }

      &-price {
        padding-left: 1ch;
        font-size: 0.8em;
      }
    }
  }
</style>