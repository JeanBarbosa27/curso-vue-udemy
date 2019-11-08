<template>
  <div class="progress-bar">
    <span class="progress-bar__value">{{ progressPercentage }}%</span>
    <div :style="{width: progressPercentage + '%'}" class="progress-bar__progress"></div>
  </div>
</template>
<script>
export default {
  name: "ProgressBar",
  data() {
    return {
      progressPercentage: 0
    }
  },
  methods: {
    calculateProgress() {
      const { getTasks } = this.$eventBus;
      const stateTasks = getTasks();
      const totalTasks = stateTasks.length;

      if(totalTasks) {
        const doneTasks =  stateTasks.filter(task => task.status === "done");
        this.progressPercentage = parseInt(doneTasks.length / totalTasks * 100);
      } else {
        this.progressPercentage = 0
      }
    }
  },
  created() {
    this.calculateProgress();
    this.$eventBus.onTaskAdded(() => this.calculateProgress());
    this.$eventBus.onStatusChanged(() => this.calculateProgress());
    this.$eventBus.onTaskRemoved(() => this.calculateProgress());
  }
};
</script>
<style>
.progress-bar {
  position: relative;
  width: 80%;
  height: 20px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  overflow: hidden;
}
  .progress-bar__value {
    position: absolute;
    top: 50%;
    left: 50%;
    line-height: 1;
    transform: translate(-50%, -50%);
  }
  .progress-bar__progress {
    height: 100%;
    background-color: #42b983;
    border-radius: 6px;
    transition: width 300ms ease-in-out;
  }
</style>