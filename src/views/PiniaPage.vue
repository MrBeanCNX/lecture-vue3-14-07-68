<template>
  <h1>Pinia {{ counterStore.count }}</h1>
  <button v-on:click="counterStore.increment()"> add number</button>
</template>

<script setup lang="ts">
  import { useCounterStore } from '@/stores/counter'
  
  const counterStore = useCounterStore()
</script>

<style scoped>

</style>