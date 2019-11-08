<template>
  <div id="app">
    <h1>Tarefas</h1>
    <progress-bar />
    <input-form />
    <tasks-list />
  </div>
</template>

<script>
import progressBar from "@/components/ProgressBar";
import inputForm from "@/components/InputForm";
import tasksList from "@/components/TasksList";

export default {
  components: {
    progressBar,
    inputForm,
    tasksList
  },
  created() {
    const { setTasks, getLocalTasks } = this.$eventBus;
    const localTasks = getLocalTasks();

    if(localTasks.length) {
      setTasks(localTasks);
    }
  }
};
</script>

<style>
  * {
    box-sizing: border-box;
  }
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
