<template>
  <div
    class="task-item"
    :class="{ done: status === 'done' }"
    :data-id="text"
    :data-status="status"
    @click="toggleStatus"
  >
    {{ text }}
    <button
      class="task-item__remove"
      @click.stop="removeItem"
    >&times;</button>
  </div>
</template>
<script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      },
      status: {
        type: String,
        required: true
      }
    },
    methods: {
      toggleStatus({ target }) {
        const { id } = target.dataset
        const status = target.dataset.status === "pending" ? "done" : "pending"
        this.$eventBus.setStatus(id, status)
      },
      removeItem({ target }) {
        const { id } = target.parentElement.dataset
        this.$eventBus.removeTask(id)
      }
    },
    created() {
      this.$eventBus.onTaskRemoved(() => this.$eventBus.saveLocalTasks())
    }
  }
</script>
<style>
  .task-item {
    display: flex;
    width: 100%;
    padding: 15px;
    justify-content: space-between;
    align-items: center;
    color: #000000;
    background-color: #ffffff;
    border-left: 5px solid #ec485f;
    border-radius: 10px;
    line-height: 20px;
    transition: all 300ms ease-in-out;
    user-select: none;
    cursor: pointer;
  }
  .task-item.done {
    text-decoration: line-through;
    border-left: 5px solid #49b057;
  }
  .task-item.done .task-item__remove {
    text-decoration: none;
  }
  .task-item__remove {
    width: 20px;
    height: 20px;
    margin-left: 10px;
    color: #ffffff;
    background-color: #ec485f;
    border: none;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
  }

</style>