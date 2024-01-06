<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style>
html,
body {
  padding: 0 !important;
  margin: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;

  #app {
    width: 100%;
    height: 100%;
  }
}
</style>
