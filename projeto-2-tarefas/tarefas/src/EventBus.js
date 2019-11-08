import Vue from "vue";
export default new Vue({
  data() {
    return {
      tasks: [
        {
          text: "bla bla",
          status: "done"
        },
        {
          text: "ble ble",
          status: "pending"
        },

      ]
    };
  },
  methods: {
    getTasks() {
      return this.tasks;
    },
    getTask(taskId) {
      return this.tasks.filter(task => task.id === taskId);
    },
    setTasks(tasks) {
      return this.tasks = tasks;
    },
    getLocalTasks() {
      if (localStorage.todoVueUdemy) {
        return JSON.parse(localStorage.todoVueUdemy);
      }
    },
    saveLocalTasks() {
      localStorage.setItem("todoVueUdemy", JSON.stringify(this.tasks));
    },
    addTask(task) {
      this.tasks.push(task);
      this.$emit("taskAdded", task);
    },
    onTaskAdded(callback) {
      this.$on("taskAdded", () => {
        this.saveLocalTasks();
        callback();
      });
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      this.$emit("taskRemoved");
    },
    onTaskRemoved(callback) {
      this.$on("taskRemoved", () => {
        this.saveLocalTasks();
        callback();
      });
    }
  }
});
