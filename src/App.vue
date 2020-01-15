<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group labe="Nome:">
				<b-form-input
					type="text"
					size="lg"
					v-model="usuario.nome"
					placeholder="Informe o nome"
				></b-form-input>
			</b-form-group>
			<b-form-group labe="E-mail:">
				<b-form-input
					type="text"
					size="lg"
					v-model="usuario.email"
					placeholder="Informe o e-mail"
				></b-form-input>
			</b-form-group>
			<hr>
			<b-button
				size="lg"
				variant="primary"
				@click="salvar"
			>
				Salvar
			</b-button>
		</b-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			usuario: {
				nome: "",
				email: ""
			}
		}
	},
	methods: {
		salvar() {
			this.$http.post("usuarios.json", this.usuario).then(
				res => {
					this.usuario.nome = "";
					this.usuario.email = "";
				}
			)
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
