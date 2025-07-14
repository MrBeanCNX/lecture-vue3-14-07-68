<template>
  <p>{{ props.title }}</p>
  <p>{{ props.subtitle }}</p>
</template>

<script setup lang="ts">
  interface Prop {
    title?: string
    subtitle?: string
  }
  const props = withDefaults(defineProps<Prop>(), {
    title: 'Title',
    subtitle: 'Subtitle'
  })
</script>

<style scoped>

</style>