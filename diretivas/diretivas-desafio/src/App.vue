<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<p v-if="resultado !== ''">{{ resultado }}</p>
		<button v-quando:click="preencheResultado">
			Mostrar resultado
		</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			resultado: ""
		}
	},
	directives: {
		quando: {
			bind(el, binding) {
				const { arg, value } = binding;
				if(typeof value !== "function") {
					return console.error("Diretiva quando deve receber uma função")
				} else {
					el.addEventListener(arg, () => {
						value()
					})
				}
			}
		}
	},
	methods: {
		preencheResultado() {
			this.resultado = "Botão clicado"
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
	cursor: pointer;
}
</style>
