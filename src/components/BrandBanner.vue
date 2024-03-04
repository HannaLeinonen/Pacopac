<template>
  <div class="brand-banner">
    <div v-for="(logo, index) in logos" :key="index" class="eclipse">
      <a :href="logo.link">
        <img
          :src="logo.src"
          :alt="logo.alt"
          :class="{ hhlogo: index === 3, dblogo: index === 4 }"
          class="brand-logo"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const logos = ref([
  { src: '/src/assets/nikeLogo.png', alt: 'Logo 1', link: '/backpacks/nike' },
  { src: '/src/assets/fjallravenLogo2.png', alt: 'Logo 3', link: '/backpacks/fjällräven' },
  { src: '/src/assets/adidasLogo.png', alt: 'Logo 2', link: '/backpacks/adidas' },
  { src: '/src/assets/hhLogo.png', alt: 'Logo 5', link: '/backpacks/hellyhansen' },
  { src: '/src/assets/dbLogo.png', alt: 'Logo 4', link: '/backpacks/douchebags' }
])
</script>

<style scoped>
* {
  overflow-x: visible;
}
.brand-banner {
  background-color: #fdebe2;
  display: flex;
  justify-content: space-around;
  padding: 10px;
}
.eclipse {
  /*   width: 48px;
  height: 48px; */
  width: 60px;
  height: 60px;
  background-color: #fdebe2;
  border: solid rgba(0, 0, 0, 0.127);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-width: 2px;
}
.eclipse:hover {
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.438);
  transform: translateY(-4px);
}
.brand-logo {
  margin-top: 10px;
  max-width: 100%;
  max-height: 100%;
}

.dblogo {
  /*  margin-left: 4px;
  margin-top: 6px;
  max-width: 80%;
  max-height: 80%; */
  object-fit: contain;
}
.hhlogo {
  /* margin-top: 7px; */
  object-fit: contain;
}
</style>
