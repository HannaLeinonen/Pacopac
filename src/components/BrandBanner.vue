<template>
  <div class="brand-banner">
    <div v-for="(logo, index) in logos" :key="index" class="eclipse">
      <a :href="logo.link">
        <img
          :src="logo.src"
          :alt="logo.alt"
          :class="{ dblogo: index === 3, hhlogo: index === 4 }"
          class="brand-logo"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const logos = ref([
  { src: '/src/assets/Nike.png', alt: 'Logo 1', link: '/backpacks/nike' },
  { src: '/src/assets/adidasLogo.png', alt: 'Logo 2', link: '/backpacks/adidas' },
  { src: '/src/assets/Foxtail.png', alt: 'Logo 3', link: '/backpacks/fjällräven' },
  { src: '/src/assets/dbLogo.png', alt: 'Logo 4', link: '/backpacks/douchebags' },
  { src: '/src/assets/hellyhansen.png', alt: 'Logo 5', link: '/backpacks/hellyhansen' }
])
</script>

<style scoped>
.brand-banner {
  background-color: #fdebe2;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.eclipse {
  width: 48px;
  height: 48px;
  background-color: #fdebe2;
  border: solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.brand-logo {
  margin-top: 10px;
  max-width: 100%;
  max-height: 100%;
}

.dblogo {
  margin-left: 4px;
  margin-top: 6px;
  max-width: 80%;
  max-height: 80%;
}
.hhlogo {
  margin-top: 7px;
}
</style>
