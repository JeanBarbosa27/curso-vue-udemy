<template>
  <div>
    <div class="row d-flex align-items-center justify-content-center mb-3">
      <h2 class="col-7">Selecione o tipo de animação:</h2>
      <b-select v-model="tipoAnimacao" class="col-3">
        <option value="fade">Fade</option>
        <option value="slide">Slide</option>
      </b-select>
      <b-button
          class="mt-2 col-4"
          variant="primary"
          @click="rodarAnimacao"
      >
        Rodar animação
      </b-button>
    </div>
    <transition :name="tipoAnimacao" appear>
      <b-alert
          variant="warning"
          show v-if="exibir"
      >
        Mensagem exibida via {{ tipoAnimacao === "Fade" ? "transição com fade" : "animação de slide" }}
      </b-alert>
    </transition>


  </div>
</template>

<script>
  export default {
    name: "AnimacaoDinamica",
    data() {
      return {
        tipoAnimacao: "fade",
        exibir: true
      }
    },
    methods: {
      rodarAnimacao() {
        this.exibir = !this.exibir;
        setTimeout(() => this.exibir = !this.exibir, 1000)
      }
    }
  }
</script>

<style scoped>

</style>