<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/Footer.vue'
import { useStore } from '@/Store/store.js'
const cartStore = useStore()

onMounted(() => {
  cartStore.loadCart()
})
</script>

<template>
  <body>
    <div id="app">
      <NavBar />
      <main>
        <RouterView :key="$route.fullPath" />
      </main>

      <FooterComponent />
    </div>
  </body>
</template>

<style scoped>
main {
  flex: 1;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
