<template>
  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> -------------------- Directive </b> </p>
  <p>
    <b> Event Handling </b>
  </p>
  <p>Number is {{ number }}</p>
  <button @click="number++"> Add </button>
  <hr>

  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> Two Way Binding </b> </p>
  <div>
    <span> First Name </span>
    <input v-model="firstName" />
  </div>
  <div>
    <span> Last Name </span>
    <input v-model="lastName" />
  </div>
  <p>firstName => {{ firstName }}</p>
  <p>lastName => {{ lastName }}</p>
  <button @click="firstName = ''"> Clear First Name </button>
  <hr>

  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> Attribute Binding </b> </p>
  <div>
    <img :src style="width: 200px;">
  </div>
  <hr>

  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> Conditional Rendering </b> </p>
  <p v-if="type === 'A'"> if A </p>
  <p v-else-if="type === 'B'"> else-if B </p>
  <p v-else> else Other </p>
  <p v-show="type === 'A'"> show A </p>
  <hr>

  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> List Rendering </b> </p>
  <li v-for="(item, index) in items" :key="index">
    {{ item.message }}
  </li>
  <hr>

  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> -------------------- Functions </b> </p>
  <button @click="defining"> Defining Function </button>
  <button @click="arrow"> Arrow Function </button>
  <hr>

  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> -------------------- Computed </b> </p>
  <p> <b> Computed Refs </b> </p>
  <!-- Computed Ref -->
  <p> 
    <span>Has published books: </span>
    <span>{{ book }}</span>
  </p>
  <hr>

  <!-- ----------------------------------------------------------------------------------------------- -->
  <!-- Writable Computed -->
  <p> <b> Writable Computed </b> </p>
  <input v-model="fullName" placeholder="ชื่อ-สกุล" />
  <p>First Name: {{ fName }}</p>      
  <p>Last Name: {{ lName }}</p>  
  <p>Full Name: {{ fullName }}</p>
  <hr>

  <!-- ----------------------------------------------------------------------------------------------- -->
  <!-- เปรียบเทียบการ Cache ค่า -->
  <p> <b> Computed VS Function </b> </p>
  <div>
    <p>Main Number: {{ mainNumBer }}</p>
    <p>ETC Number: {{ etcNumber }}</p>
    <p>Computed ×2: {{ doubleComputed }}</p>
    <p>Function ×2: {{ doubleFunction() }}</p>
    <button @click="incrementMain"> incrementMain </button>
    <button @click="incrementETC"> incrementETC </button>
  </div>
  <hr>

  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> -------------------- Watcher </b> </p>
  <input v-model="watch1" />  
  <input v-model="watch2" />
  <hr>

  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> -------------------- Template Refs </b> </p>
  <input ref="my-input">
  <button @click="logInput"> Reference Input </button>
  <hr>
</template>

<script setup lang="ts">
  import { ref, reactive, computed, watch, watchEffect, useTemplateRef, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

  // ---------- Directive ----------
  // Event Handling
  const number = ref(0)

  // Two Way Binding
  const firstName = ref('')
  const lastName = ref('')

  // Attribute Binding
  const src = ref('https://job.science.cmu.ac.th/upload/company/1-2024-01-24-926040289.png')

  // Conditional Rendering
  const type = ref('B')

  // List Rendering
  const items = ref([
    { message: 'Foo' },
    { message: 'Bar' }
  ])

  // ---------- Functions ----------
  function logName (name: string) {
    console.log('name: ', name)
  }
  function returnName (name: string): string {
    return name
  }
  function defining () {
    logName('Test')
    // alert('Hello Defining Function')
  }
  const arrow = () => {
    const name = returnName('Test2')
    console.log(name)
    // alert('Hello Arrow Function')
  }

  // ---------- Computed ----------
  // Computed Ref
  const author = reactive({     
    name: 'John Doe',
    books: ['test']
  })
  const book = computed(() => {    
    return author.books.length ? 'Y' : 'N'
  })

  // Writable Computed
  // มี input อันเดียว แต่ต้องการผูก 2 ตัวแปร
  const fName = ref('John')
  const lName = ref('Doe')
  const fullName = computed({
    get () {
      return `${fName.value} ${lName.value}`
    },
    set (newValue) {
      fName.value = newValue.split(' ')[0]
      lName.value = newValue.split(' ')[1]
    }
  })

  // Computed VS Function
  const mainNumBer = ref(0)
  const etcNumber = ref(0)

  // computed ทำงานเฉพาะเมื่อ state ของตัวเองมีการ reactive
  const doubleComputed = computed(() => {
    console.log('Computed Run')
    return mainNumBer.value * 2
  })
  // function ทำงานทุกครั้งที่ state ใด ๆ มีการ reactive
  function doubleFunction() {
    console.log('Function Run')
    return mainNumBer.value * 2
  }
  function incrementMain() {
    mainNumBer.value++
  }
  function incrementETC() {
    etcNumber.value++
  }

  // ---------- Watcher ----------
  const watch1 = ref('watch1')
  const watch2 = ref('watch2')
  // Watch
  watch(watch1, (newValue, oldValue) => {
    console.log('ทำงานเมื่อ watch1 เปลี่ยน')
    console.log('เปลี่ยนจาก', oldValue, 'เป็น', newValue)
  })

  // Watch Effect 
  watchEffect(() => {
    console.log('watchEffect watch1', watch1.value)
    console.log('watchEffect watch2', watch2.value)
  })

  // ---------- Template Refs ----------
  const input = useTemplateRef('my-input') 
  function logInput () {
    // non‑null assertion แน่ใจว่ายังไงก็มีค่า Input
    input.value!.style.backgroundColor = 'red'
    console.log('my input', input)
  }

  // ---------- Lifecycle Hook ----------
  onBeforeMount(() => {
    console.log('onBeforeMount')
  })
  onMounted(() => {
    console.log('onMounted')
  })
  onBeforeUpdate(() => {
    console.log('onBeforeUpdate')
  })
  onUpdated(() => {
    console.log('onUpdated')
  })
  onBeforeUnmount(() => {
    console.log('onBeforeUnmount')
  })
  onUnmounted(() => {
    console.log('onUnmounted')
  })
</script>

<style scoped>

</style>