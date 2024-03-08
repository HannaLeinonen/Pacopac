<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/Footer.vue'
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
