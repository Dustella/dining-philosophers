<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  ind: Number,
  occupied: Boolean,
})
const offset = `${0.2 * props.ind! - 0.105}turn`

const color = computed(() => props.occupied ? 'black' : 'grey')
</script>

<template>
  <div class="translate-y--4">
    <div class="chop">
      {{ props.ind! - 1 }}
    </div>
  </div>
</template>

<style scoped>
.chop{
    position: absolute;
    height: 2rem;
    width: 0;
    border: 1px solid v-bind(color);
    transform: rotate(v-bind(offset)) translateY(6rem);
}
</style>
