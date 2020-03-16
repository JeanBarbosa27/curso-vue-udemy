<template>
  <div class="message">
    <div class="message__overlay" @click="closeMessage" ></div>
    <div class="message__modal">
      <h3 class="message__title">{{ title }}</h3>
      <button class="message__close" @click="closeMessage">+</button>
      <div class="message__content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>

import { mapMutations } from 'vuex';

export default {
  name: 'Message',
  props: {
    title: {
      type: String,
      default: 'Stock Trader Message'
    }
  },
  methods: {
    ...mapMutations['toggleMessageShow'],
    closeMessage() {
      this.$store.commit('toggleMessageShow', false);
    }
  }
}
</script>

<style lang="scss">
.message {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  &__overlay {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }

  &__modal {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    max-height: 90%;
    background: #ffffff;
    border-radius: 6px;
    transform: translate(-50%, -50%);

    @media (min-width: 1025px) {
      width: 50%;
      max-height: 50%;
    }
  }

  &__close {
    position: absolute;
    top: 5px;
    right: 10px;
    padding: 0 7px;
    font-size: 1.5em;
    background: transparent;
    border: 1px solid #000000;
    border-radius: 50%;
    outline: none;
    transform: rotate(45deg);
  }

  &__title {
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
    background: #dddddd;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }

  &__content {
    padding: 20px;
  }
}
</style>
