<template>
  <div id="app" class="stock-trader">
   <Header />
    <router-view />
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

