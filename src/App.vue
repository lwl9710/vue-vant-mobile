<template>
  <router-view #="{ Component }">
    <keep-alive include="TabBarLayout">
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>