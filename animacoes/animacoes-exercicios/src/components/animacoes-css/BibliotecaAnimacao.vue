<template>
  <transition
    enter-active-class="animated bounce"
    leave-active-class="animated shake"
    appear
  >
    <b-alert variant="success" show type="transition">
      Mensagem exibida via biblioteca de animação de terceiros. Nesse caso é o Animate CSS com as opções Bounce e Shake.
    </b-alert>
  </transition>
</template>

<script>
  export default {
    name: "BibliotecaAnimacao"
  }
</script>
