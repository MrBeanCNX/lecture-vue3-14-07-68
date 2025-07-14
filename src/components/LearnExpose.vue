<!-- Component ลูก -->
<template>
  <p> A: {{ numberExpose }}</p>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  
  const numberExpose = ref(0)
  
  function countExpose () {
    numberExpose.value += 1
  }

  defineExpose({ numberExpose, countExpose })
</script>

<style scoped>
</style>