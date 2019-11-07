<template>
  <div class="progress-bar">
    <span class="progress-bar__value"></span>
    <div class="progress"></div>
  </div>
</template>
<script>
export default {
  name: "ProgressBar"
};
</script>
<style>
.progress-bar {
  width: 80%;
  height: 20px;
  border: 1px solid #ffffff;
  border-radius: 6px;
}
</style>