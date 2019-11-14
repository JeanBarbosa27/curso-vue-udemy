<template>
  <div>
    <b-button
      variant="success"
      class="mb-4"
      @click="exibir = !exibir"
    >
      Rodar animação
    </b-button>
    <transition
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"

        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
    >
      <div class="caixa" v-if="exibir"></div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "AlternarTamanho",
    data() {
      return {
        exibir: true,
        larguraBase: 0
      }
    },
    methods: {
      animacao(el, done, modo) {
        let rodada = 1;
        const temporizador = setInterval(() => {
          let largura = modo === 'aumentar'
            ? this.larguraBase + rodada * 10
            : modo === 'reduzir'
              && this.larguraBase - rodada * 10
          el.style.width = `${largura}px`;
          rodada++;

          if(rodada > 30) {
            clearInterval(temporizador);
            done();
          }

        }, 20)
      },
      beforeEnter(el) {
        this.larguraBase = 0;
        el.style.width = `${this.larguraBase}px`;
      },
      enter(el, done) {
        this.animacao(el, done, "aumentar")
      },
      afterEnter(el) {
        // console.log("afterEnter el: ", el)
      },
      enterCancelled(el) {
        // console.log("enterCancelled el: ", el)
      },
      beforeLeave(el) {
        this.larguraBase = 300;
        el.style.width = `${this.larguraBase}px`;
      },
      leave(el, done) {
        this.animacao(el, done, "reduzir")
      },
      afterLeave(el) {
        // console.log("afterLeave el: ", el)
      },
      leaveCancelled(el) {
        // console.log("leaveCancelled el: ", el)
      }
    }
  }
</script>

<style scoped>

</style>