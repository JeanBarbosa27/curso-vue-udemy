<template>
  <ul class="tasks-list">
    <li v-for="task in this.$eventBus.tasks" :key="task.text" class="tasks-list__item">
      <task-item :text="task.text" :status="task.status" />
    </li>
  </ul>
</template>
<script>
  import taskItem from "@/components/TaskItem";
export default {
  name: "TasksList",
  components: {
    taskItem
  }
};
</script>
<style>

  .tasks-list {
    display: flex;
    width: 80%;
    margin: 0;
    padding: 0;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;

  }
  .tasks-list__item {
    width: 100%;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 1025px) {
    .tasks-list {
      justify-content: flex-start;
    }
    .tasks-list__item {
      max-width: 200px;
    }
  }
</style>