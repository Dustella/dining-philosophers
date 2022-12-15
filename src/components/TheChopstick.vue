<script setup lang="ts">
const props = defineProps({
  ind: Number,
})
const offset = `${0.2 * props.ind! + 0.105}turn`
</script>

<template>
  <div class="translate-y--4">
    <div class="chop" />
  </div>
</template>

<style scoped>
.chop{
    position: absolute;
    height: 2rem;
    width: 0;
    background-color: black;
    border: 1px solid;
    transform: rotate(v-bind(offset)) translateY(6rem);
}
</style>
