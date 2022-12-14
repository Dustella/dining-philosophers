<script setup lang="ts">
import TheChopstick from './components/TheChopstick.vue';
import ThePhilosopherVue from './components/ThePhilosopher.vue';
</script>

<template>
  <div class="table"></div>
  <ThePhilosopherVue v-for="i in 5" class="phi-box" :ind="i" />
  <TheChopstick v-for="i in 5" :ind="i"/>
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
.phi-box{
  position: absolute;
}
</style>