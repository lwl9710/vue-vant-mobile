<template>
  <router-view></router-view>
</template>
<style lang="scss">
html, body, #app {
  width: 100%;
  height: 100%;
}
body #nprogress {
  .bar {
    background-color: #4EC9B0;
  }
  .spinner-icon {
    display: none;
    background-color: #4EC9B0; 
  }
}
</style>