<template>
  <p>Product {{ route.params.id }}</p>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';
  const route = useRoute()
</script>

<style scoped>
</style>