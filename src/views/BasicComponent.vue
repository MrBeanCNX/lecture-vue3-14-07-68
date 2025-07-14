<template>
  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> -------------------- Prop </b> </p>
  <learn-prop :title :subtitle />
  <hr>

  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> -------------------- Emit </b> </p>
  <learn-emit @update="updateCount" />
  <p>Number {{ number }}</p>
  <hr>

  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> -------------------- Slot </b> </p>
  <learn-slot>
    <template #body>
      <li style="background-color: red;"> + </li>
    </template>
  </learn-slot>

  <p> <b> -------------------- Expose </b> </p>
  <!-- ไม่มีการเรียก Slot -->
  <learn-expose ref="learn-expose" />
  <button @click="count"> +aa </button>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import LearnProp from '@/components/LearnProp.vue'
  import LearnEmit from '@/components/LearnEmit.vue'
  import LearnSlot from '@/components/LearnSlot.vue'
  import LearnExpose from '@/components/LearnExpose.vue'

  const title = ref('Test Title')
  const subtitle = ref('Test Subtitle')

  // ---------- Emit ----------
  const number = ref(0)
  function updateCount (params: number) {
    number.value += params
  }

  // ---------- Expose ----------
  const expose = useTemplateRef('learn-expose')
  function count () {
    expose.value!.countExpose()
  }
</script>

<style scoped>

</style>