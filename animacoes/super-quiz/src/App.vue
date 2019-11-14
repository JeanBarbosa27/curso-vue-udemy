<template>
  <div id="app">
    <h1>Super Quiz</h1>
    <transition name="flip" mode="out-in" style="display: block; text-align: center">
      <Question
          v-if="choosenAnswer === null"
          :question="questions[question]"
          key="question"
          @answerChoosen="answerChoosen"
      />
      <Result
          v-else
          :correct="choosenAnswer"
          key="result"
          @nextQuestion="nextQuestion"
      />
    </transition>
  </div>
</template>

<script>
  import util from "@/util/questions"
  import Question from "@/components/Question"
  import Result from "@/components/Result"

  export default {
    name: "App",
    components: {
      Question,
      Result
    },
    data() {
      return {
        question: 0,
        questions: util,
        choosenAnswer: null
      }
    },
    methods: {
      answerChoosen(correct) {
        this.choosenAnswer = correct
      },
      nextQuestion() {
        this.question++
        this.choosenAnswer = null
      }
    }
  }
</script>

<style>
  body {
    background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
    font-family: 'Oswald', sans-serif;
    color: #FFF;
    height: 100vh;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #app h1 {
    font-weight: 200;
    font-size: 4rem;
  }

  @keyframes flip-out {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(90deg);
    }
  }

  @keyframes flip-in {
    from {
      transform: rotateY(90deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }

  .flip-enter-active {
    animation: flip-in 0.3s ease;
  }

  .flip-leave-active {
    animation: flip-out 0.3s ease;
  }
</style>
