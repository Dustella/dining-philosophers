<script setup lang="ts">
import TheChopstick from './components/TheChopstick.vue'
import ThePhilosopher from './components/ThePhilosopher.vue'
import { chopsticks, eat, philosopher } from './logic'

setInterval(() => {
  // random philosopher picks up chopsticks
  const phiIndex = Math.floor(Math.random() * 5)
  // random time, from 1 to 5 seconds
  const time = Math.floor(Math.random() * 10) + 1
  eat(phiIndex, time, false)
}, 2000)
</script>

<template>
  <div class="table" />
  <ThePhilosopher v-for="i in 5" :key="i" :ind="i" :status="philosopher[i - 1]" />
  <TheChopstick v-for="i in 5" :key="i" :ind="i" :occupied="chopsticks[i - 1]" />
</template>

<style scoped>
.table{
  position: absolute;
  transform: translate(-50%,-50%);
  border-radius: 100%;
  height: 17rem;
  width: 17rem;
  border: 1px solid;
}
</style>
