<template>
  <div id="app" class="stock-trader">
    <Header />
    <transition 
      mode="out-in"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view />
   </transition>
  </div>
</template>

<script>

import Header from './components/layouts/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
.stock-trader {
  font-family: 'Roboto', sans-serif, Arial;
}
</style>

