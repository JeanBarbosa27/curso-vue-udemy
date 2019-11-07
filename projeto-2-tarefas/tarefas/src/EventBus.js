import Vue from "vue";
export default new Vue({
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    getTasks() {
      return this.tasks;
    },
    getTask(taskId) {
      return this.tasks.filter(task => task.id === taskId);
    },
    addTask(task) {
      this.tasks.push(task);
      this.$emit("taskAdded", task);
    },
    onTaskAdded(callback) {
      this.$on("taskAdded", callback);
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      this.$emit("taskRemoved");
    },
    onTaskRemoved(callback) {
      this.$on("taskRemoved", callback);
    }
  }
});
