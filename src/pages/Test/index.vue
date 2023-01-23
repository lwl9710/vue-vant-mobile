<template>
  <div class="test">
    <BasicContainer top="15">
      <h3>{{ message }}</h3>
    </BasicContainer>
  </div>
  </template>
  <script name="Test" lang="ts" setup>
  const message = ref("Welcome to Test.");

  onMounted(() => {
    console.log("触发页面加载...");
  });
  </script>
<style scoped>
  .test {
    height: 3000Px;
  }
</style>