<template>
  <div class="question">
    <h2 class="title">{{ questionNumber }}) {{ question.text }}</h2>
    <ul class="answers">
      <li
        v-for="(answer, n) in question.answers"
        :key="answer.text"
        @click="$emit('answerChoosen', answer.correct)"
      >
        <span class="number">{{ n + 1 }}</span>
        <span class="text">{{ answer.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true
    },
    questionNumber: {
      type: Number,
      required: true
    }
  }
};
</script>

<style>
.question {
  height: 400px;
  color: #000;
  background-color: #fff;
  width: 70%;
  border-radius: 20px;
  font-size: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.title {
  margin-bottom: 20px;
  line-height: 1;
}
ul.answers {
  font-size: 2rem;
  padding: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.answers li {
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: #89c454;
  border-radius: 8px;
  width: 40%;

  display: flex;
  cursor: pointer;
}

.answers .number {
  padding: 10px;
  background-color: #1e9c31;
  color: #fff;
  flex-basis: 30px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.answers .text {
  flex: 1;
  align-self: center;
}
</style>
