<template>
  <h1>{{ message }}</h1>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const message = ref("Hello world!");
</script>
<style lang="scss">
h1 {
  color: red;
  width: 750px;
  transform: translateX(30px);
}
</style>