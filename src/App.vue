<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<NomeCompleto
					:nome="usuario.nome"
					:sobrenome="usuario.sobrenome"
					v-model="usuario"
				/>
				<Rotulo nome="e-mail">
					<input type="email" v-model="email">
				</Rotulo>
				<Rotulo nome="senha">
					<input type="password" v-model="senha" />
				</Rotulo>
				<Rotulo nome="Armazenar dados">
					<Label>
						<input type="radio" :value="true" v-model="armazenar" />
						<span>Sim</span>
					</Label>
					<Label>
						<input type="radio" :value="false" v-model="armazenar" />
						<span>Não</span>
					</Label>
				</Rotulo>
				<button @click.prevent="enviado = true">Enviar</button>
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
					<Rotulo nome="Nome completo">
						<span>{{ usuario.nome }} {{ usuario.sobrenome }}</span>
					</Rotulo>
				<Rotulo nome="e-mail">
					<span>{{ email }}</span>
				</Rotulo>
				<Rotulo nome="senha">
					<span>{{ senha }}</span>
				</Rotulo>
				<Rotulo nome="Armazenar Dados">
					<span>{{ armazenar ? "Sim" : "Não" }}</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import NomeCompleto from './components/NomeCompleto'

export default {
	name: 'app',
	components: {NomeCompleto, Rotulo },
	data() {
		return {
			usuario: {
				nome: "",
				sobrenome: ""
			},
			email: "",
			senha: "",
			armazenar: false,
			enviado: false
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
