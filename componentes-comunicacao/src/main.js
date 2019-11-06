import Vue from 'vue'
import App from './App.vue'
import Barramento from "@/barramento"

Vue.config.productionTip = false
Vue.prototype.$barramento = Barramento

new Vue({
  render: h => h(App),
}).$mount('#app')
