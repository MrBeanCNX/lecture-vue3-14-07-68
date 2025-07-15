<template>
  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> -------------------- Router View & Router Link </b> </p>
  <div>
    <router-link to="/basic-essential"> Basic Essentials </router-link>
  </div>
  <div>
    <router-link to="/basic-component"> Basic Components </router-link>
  </div>
  <div>
    <button @click="goToEssential"> Go To Basic Essentials </button>
  </div>
  <div>
    <button @click="goToComponent"> Go To Basic Essentials </button>
  </div>

  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> -------------------- Dynamic Route </b> </p>
  <button @click="goToProductID(456)">
    Go To Product
  </button>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'

  // Router
  const router = useRouter()
  function goToEssential () {
    router.push('/basic-essential')
  }
  function goToComponent () {
    router.push('/basic-component')
  }

  // ---------- Dynamic Route ----------
  function goToProductID (productId: number) {
    router.push({
      name: 'ProductPage',
      params: { id: productId }
    })
  }
</script>

<style scoped>

</style>