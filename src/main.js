import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import router from './router'

import vuetify from './plugins/vuetify'
import './plugins/axios'

Vue.filter('currencyFormat', valor => valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) )

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
	render: h => h(App),
}).$mount('#app')
