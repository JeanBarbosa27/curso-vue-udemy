<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ cpf | cpf | inverter }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			cpf: "12345678900"
		}
	},
	filters: {
		cpf(valor) {
			const cpf = `${valor}`.split("")
			cpf.splice(3,0,".")
			cpf.splice(7,0,".")
			cpf.splice(11,0,"-")
			return cpf.join("")
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
</style>
