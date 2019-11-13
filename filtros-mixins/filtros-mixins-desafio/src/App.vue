<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<hr>
		<h2>Exercício 1:</h2>
		<h3>Construir um filtro local que troca espaços por vírgula</h3>
		<p>{{ frase | separadorPalavras }}</p>
		<hr>
		<h2>Exercício 2:</h2>
		<h3>Filtro global que conta o tamanho de cada palavra e adiciona o
			valor na string final</h3>
		<p>{{ frase | contadorLetras }}</p>
		<hr>
		<h2>Exercício 3:</h2>
		<h3>Implementar os exercicios 1 e 2 com propriedade computada</h3>
		<p>Ex1: {{ separador }}</p>
		<p>Ex2: {{ contador }}</p>
		<hr>
		<h2>Exercício 4:</h2>
		<h3>Compartilhe a propriedade computada via mixin</h3>
		<p>{{ separadorGlobal }}</p>
		<p>{{ contadorGlobal }}</p>
	</div>
</template>

<script>
	import mixins from "./mixins";
export default {
	data() {
    return {
      frase: "Lorem ipsum dolor sit amet consectetur"
    }
  },
	computed: {
		separador() {
      return this.frase.trim().replace(/\s/g, ", ")
    },
		contador() {
      const palavas = this.frase.trim().split(/\s/)
      return palavas.map(palavra => {
        return `${palavra} (${palavra.length}) `
      }).join("");
    }
	},
	filters: {
		separadorPalavras(frase) {
			return frase.trim().replace(/\s/g, ", ")
		}
	},
	mixins: [mixins]
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
