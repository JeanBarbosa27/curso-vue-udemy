import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el, binding, vnode) {
		const { arg, modifiers, value } = binding;
		let atraso = 0;

		// el.style.backgroundColor = "lightgreen"

		if(modifiers['atrasar']) atraso = 3000;
		setTimeout(() => {
			if(arg === "fundo") {
				el.style.backgroundColor = value;
			} else {
				el.style.color = value;
			}
		}, atraso)

	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
