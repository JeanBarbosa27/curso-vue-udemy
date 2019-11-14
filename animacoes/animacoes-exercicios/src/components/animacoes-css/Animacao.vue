<template>
  <transition name="slide" appear>
    <b-alert variant="success" show type="transition">
      Mensagem exibida via animação (Fade e Slide)
    </b-alert>
  </transition>
</template>

<script>
  export default {
    name: "Animacao"
  }
</script>
