<template>
  <div class="summary">
    <h2 class="title">Resumindo</h2>
    <p class="text">{{ message }}</p>
    <button
      class="button"
      :class="{improve: hitPercentage < 30}"
      @click="$emit('restartQuiz')"
    >Refazer quiz</button>
  </div>
</template>

<script>
export default {
  name: "Summary",
  props: ["correctAnswers", "totalQuestions"],
  computed: {
    hitPercentage() {
      return parseInt((this.correctAnswers / this.totalQuestions) * 100);
    },
    metrics() {
      return `${this.correctAnswers} das ${this.totalQuestions} perguntas! Teve um aproveitamento de ${this.hitPercentage}%.`;
    },
    message() {
      if (this.hitPercentage > 80) {
        return `Uau você acertou ${this.metrics}`;
      } else if (this.hitPercentage > 50) {
        return `Parabéns, você acertou ${this.metrics}`;
      } else if (this.hitPercentage > 30) {
        return `Poxa, você só acertou ${this.metrics}`;
      } else if (this.hitPercentage > 10) {
        return `Mais sorte na próxima vez, você acertou somente ${this.metrics}`;
      } else if (this.hitPercentage === 0) {
        return "Infelizmente você não acertou nenhuma pergunta, o que acha de tentar de novo?";
      }
    }
  }
};
</script>

<style scoped>
.summary {
  display: flex;
  width: 70%;
  height: 400px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 2.5rem;
  color: #000000;
  background-color: #ffffff;
  border-radius: 20px;
}
.title {
  margin: 15px 0;
}

.text {
  margin: 10px 0;
}
.button {
  padding: 10px 20px;
  align-self: center;
  font-size: 1.7rem;
  color: #30863d;
  background-color: #fff;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
}
.button.improve {
  color: #bb2814;
}
</style>