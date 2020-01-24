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
			<b-button
				size="lg"
				variant="success"
				class="ml-2"
				@click="obterUsuarios"
			>
				Obter usuários
			</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario) in usuarios" :key="usuario.id">
				<p><strong>Nome: </strong> {{usuario.nome}}</p>
				<p><strong>E-mail: </strong> {{usuario.email}}</p>
				<p><strong>ID: </strong> {{usuario.id}}</p>
				<hr>
				<b-button
					variant="warning"
					size="lg"
					@click="carregar(usuario.id)"
				>
					Carregar
				</b-button>
				<b-button
					variant="danger"
					size="lg"
					class="ml-2"
					@click="excluir(usuario.id)"
				>
					Excluir
				</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			usuarios: [],
			usuario: {
				id: null,
				nome: "",
				email: ""
			}
		}
	},
	methods: {
		limpar() {
			this.usuario = {
				id: null,
				nome: "",
				email: ""
			}
		},
		salvar() {
			const { id } = this.usuario;
			const metodo = id ? "patch" : "post";
			const finalUrl = id ? `/${id}.json` : ".json";
			this.$http[metodo](`usuarios${finalUrl}`, this.usuario)
				.then(() => { 
					this.limpar();
					this.obterUsuarios();
				});
		},
		obterUsuarios() {
			this.$http.get("usuarios.json").then(
				res => {
					this.usuarios = res.data;
				}
			)
		},
		carregar(id) {
			const usuario = this.usuarios.filter(usuario => usuario.id === id);
			this.usuario = { ...usuario[0] };
		},
		excluir(id) {
			this.$http.delete(`usuarios/${id}.json`).then(
				() => { 
					this.limpar();
					this.obterUsuarios();
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
