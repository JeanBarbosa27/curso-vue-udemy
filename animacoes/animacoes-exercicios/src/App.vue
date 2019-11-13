<template>
  <transition name="fade" appear>
    <div id="app" class="container-fluid">
      <h1>Animações</h1>
      <hr>
      <b-button variant="primary" @click="exibir = !exibir" class="mb-4">Mostrar mensagem</b-button>
      <transition name="fade">
        <b-alert variant="success" show v-if="exibir">Mensagem exibida via animação (Fade)</b-alert>
      </transition>
      <transition name="slide">
        <b-alert variant="success" show v-if="exibir" type="transition">Mensagem exibida via animação (Fade e Slide)</b-alert>
      </transition>
			<transition enter-active-class="animated bounce" leave-active-class="animated shake">
        <b-alert variant="success" show v-if="exibir" type="transition">Mensagem exibida via animação (Bounce e Shake)</b-alert>
      </transition>
			<hr>
			<b-select v-model="tipoAnimacao">
				<option value="fade">Fade</option>
				<option value="slide">Slide</option>
			</b-select>
			<transition :name="tipoAnimacao" >
        <b-alert variant="warning" show v-if="exibir">Mensagem exibida via animação (Selecionado)</b-alert>
      </transition>
    </div>
  </transition>

</template>

<script>

  export default {
    data() {
      return {
        exibir: false,
				tipoAnimacao: "fade"
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
    transition: opacity 2s;
  }

  .slide-leave-active {
    animation: slide-out 1s ease;
    transition: opacity 0.5s;
  }

  .slide-enter, .slide-leave-to {
    opacity: 0;
  }

</style>
