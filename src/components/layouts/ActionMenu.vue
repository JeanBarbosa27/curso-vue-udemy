<template>
  <div class="action-menu">
    <ul class="action-menu__list">
      <li class="action-menu__item" @click="finishDay">
        finalizar dia
      </li>
      <li class="action-menu__item">
        Salvar &#38; Carregar
        <ul class="action-menu__submenu-list">
          <li class="action-menu__submenu-item" @click="saveData">
            Salvar dados
          </li>
          <li class="action-menu__submenu-item" @click="loadData">
            Carregar dados
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'ActionMenu',
  computed: {
    ...mapGetters(['getStocks']),
  },
  methods: {
    ...mapMutations(['updateItemPrice']),
    finishDay() {
      this.getStocks.map((item, index) => {
        const percentage = Math.random(0,2) * 2;

        if(percentage > 0.6 && percentage < 1.4 ) {
          const newPrice = item.price * percentage;
          this.$store.commit('updateItemPrice', { index, newPrice });
        }
      })
    },
    saveData() {
      console.log('Inserir requisição para salvar dados no Firebase');  // eslint-disable-line
    },
    loadData() {
      console.log('Inserir requisição para carregar dados do Firebase');  // eslint-disable-line
    }
  }
}
</script>

<style lang="scss">
.action-menu {
  display: flex;

  &__list {
    display: flex;
    list-style: none;
  }

  &__item {
    position: relative;
    padding: 17px 10px;
    font-size: 0.8em;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 300ms ease-in;

    &.active,
    &:hover,
    &:focus {
      background: #dddddd;
    }

    &:hover {
      .action-menu {
        &__submenu-list {
          opacity: 1;
          visibility: visible;
        }

      }
      
    }
  }

  &__submenu {
    &-list {
      position: absolute;
      top: 100%;
      left: 50%;
      width: 100%;
      background: #ffffff;
      list-style: none;
      box-shadow: 0 3px 6px rgba(0,0,0,0.3);
      transform: translateX(-50%);
      opacity: 0;
      visibility: hidden;
      transition: opacity 300ms ease-in, visibility 300ms ease-in;
    }

    &-item {
      padding: 10px;
      font-size: 0.8em;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 300ms ease-in;

      &:hover,
      &:focus {
        background: #dddddd;
      }
    }
  }
}
</style>