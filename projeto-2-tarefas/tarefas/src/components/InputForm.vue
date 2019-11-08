<template>
  <div class="input-form">
    <form class="input-form__form" @submit.prevent="addTask">
      <input
        class="input-form__field"
        type="text"
        placeholder="Incluir tarefa"
        autofocus
      />
      <button class="input-form__submit">&plus;</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "InputForm",
  methods: {
    addTask({ target }) {
      const { getTask } = this.$eventBus;
      const text = target[0].value;
      if(!getTask(text).length && text !== "") {
        this.$eventBus.addTask({ text, status: "pending" })
        target.reset()
      }
    }
  },
  created() {
    this.$eventBus.onTaskAdded(() => this.$eventBus.saveLocalTasks())
  }
};
</script>
<style>
  .input-form {
    max-width: 100%;
    margin: 20px auto;
  }
  .input-form__form {
    display: flex;
    justify-content: center;
  }
  .input-form__field {
    width: 300px;
    max-width: 70%;
    padding: 5px 10px;
    color: #ffffff;
    background-color: transparent;
    border: 1px solid #ffffff;
    border-radius: 3px 0 0 3px;
    outline: none;
  }
  .input-form__field::placeholder {
    color: #ffffff;
  }
  .input-form__submit {
    width: 35px;
    height: 35px;
    font-size: 25px;
    color: #ffffff;
    background-color: #2594f0;
    border: 1px solid #2594f0;
    border-radius: 0 3px 3px 0;
    outline: none;
    cursor: pointer;
  }
</style>