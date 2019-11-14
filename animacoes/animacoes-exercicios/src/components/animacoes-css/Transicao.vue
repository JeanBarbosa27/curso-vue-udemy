<template>
  <transition name="fade" appear>
    <b-alert variant="success" show >
      Mensagem exibida via transição definida via CSS com a classe fade.
    </b-alert>
  </transition>
</template>

<script>
  export default {
    name: "Transicao"
  }
</script>
