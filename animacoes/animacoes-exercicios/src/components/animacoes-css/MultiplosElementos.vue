<template>
  <div>
    <b-button
        class="mb-3 col-4"
        variant="primary"
        @click="rodarAnimacao"
    >
      Rodar animação
    </b-button>
    <transition name="fade" mode="out-in">
      <b-alert variant="info" key="info" show v-if="exibir">
        Mensagem de informação exibida via transição fade para múltiplos elementos.
      </b-alert>
      <b-alert variant="warning" key="warn" show v-else>
        Mensagem de alerta exibida via transição fade para múltiplos elementos.
      </b-alert>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "MultiplosElementos",
    data() {
      return {
        exibir: true
      }
    },
    methods: {
      rodarAnimacao() {
        this.exibir = !this.exibir;
      }
    }
  }
</script>
