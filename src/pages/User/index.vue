<template>
<div class="user">
  <BasicContainer top="15">
    <h3>{{ message }}</h3>
  </BasicContainer>
</div>
</template>
<script name="User" lang="ts" setup>
const message = ref("Welcome to User.");
</script>