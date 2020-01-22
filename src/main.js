import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter( 'contadorLetras', 	frase => {
		const palavas =  frase.trim().split(/\s/);
		return palavas.map(palavra => {
			return `${palavra} (${palavra.length}) `
		}).join("")
	}
)

new Vue({
	render: h => h(App),
}).$mount('#app')
