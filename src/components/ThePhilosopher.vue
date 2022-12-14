<script lang="ts" setup>
import { computed } from 'vue';

const props= defineProps({
    isActive:Boolean,
    ind: Number
})
const offset = computed(()=>`${props.ind!*0.2}turn`)
console.log(offset.value)
</script>

<template>
    <div class="phi-box"></div>
</template>

<style scoped>
.phi-box{
    height: 2rem;
    width: 2rem;
    border:1px solid;
    transform:rotate(v-bind(offset)) translate(-1rem,9rem);
}
</style>