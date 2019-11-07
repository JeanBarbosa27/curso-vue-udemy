<template>
  <div class="citacao">
    <slot name="fonte"></slot>
    <slot></slot>
    <slot name="autor"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.citacao {
  max-width: 450px;
  margin-bottom: 15px;
  padding: 25px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
}
</style>
