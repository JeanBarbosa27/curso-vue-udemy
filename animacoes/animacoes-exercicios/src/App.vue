<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" @click="exibir = !exibir" class="mb-4">Mostrar mensagem</b-button>
		<transition name="fade">
			<b-alert variant="success" show v-if="exibir">Mensagem exibida via animação</b-alert>
		</transition>
		<transition name="slide">
			<b-alert variant="success" show v-if="exibir">Mensagem exibida via animação</b-alert>
		</transition>

	</div>
</template>

<script>

export default {
	data() {
		return {
			exibir: false,
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
	font-size: 1.5rem;
}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}

	.fade-enter-active, .fade-leave-active {
		transition: opacity 1s;
	}

	@keyframes slide-in {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(0);
		}
	}
	@keyframes slide-out {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(100%);
		}
	}
	.slide-enter-active {
		animation: slide-in 1s ease;
	}
	.slide-leave-active {
		animation: slide-out 1s ease;
	}

</style>
