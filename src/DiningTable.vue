<script setup lang="ts">
import TheChopstick from './components/TheChopstick.vue'
import ThePhilosopherVue from './components/ThePhilosopher.vue'
</script>

<template>
  <!-- <div class="table" /> -->
  <ThePhilosopherVue v-for="i in 5" :key="i" :ind="i" />
  <TheChopstick v-for="i in 5" :key="i" :ind="i" />
</template>

<style scoped>
.table{
  position: absolute;
  transform: translate(-50%,-50%);
  border-radius: 100%;
  height: 15rem;
  width: 15rem;
  border: 1px solid;
}
</style>
