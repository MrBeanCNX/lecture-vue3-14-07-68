<template>
  <h1>Pinia {{ counterStore.count }}</h1>
  <button v-on:click="counterStore.increment()"> add number</button>

  <h1>Composable {{ counter.count }}</h1>
  <button v-on:click="counter.increment()"> add number</button>
</template>

<script setup lang="ts">
  import { useCounter } from '@/composables/useCounter'
  import { useCounterStore } from '@/stores/counter'
  
  const counterStore = useCounterStore()
  const counter = useCounter()
</script>

<style scoped>

</style>