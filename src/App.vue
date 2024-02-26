<template>
  <div id="app">
    <header>
      <SearchComponent />
    </header>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SearchComponent from './components/SearchComponent.vue'
</script>
