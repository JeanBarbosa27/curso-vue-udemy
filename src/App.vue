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
import { mapGetters } from 'vuex';
import Header from './components/layouts/Header.vue';
import Message from './components/fragments/Message';

export default {
  name: 'App',
  components: {
    Header,
    Message
  },
  computed: {
    ...mapGetters(['getMessage']),
  }
}
</script>

<style>
.stock-trader {
  font-family: 'Roboto', sans-serif, Arial;
}
</style>

