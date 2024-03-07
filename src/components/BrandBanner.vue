<template>
  <div class="brand-banner">
    <div
      v-for="(logo, index) in logos"
      :key="index"
      class="eclipse"
      @mouseover="pop(index)"
      @mouseleave="reset(index)"
      @click="viewBrand(logo.brand)"
    >
      <router-link :to="`/backpacks`">
        <img
          :src="logo.src"
          :alt="logo.alt"
          :class="{ hhlogo: index === 3, dblogo: index === 4 }"
          class="brand-logo"
        />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const viewBrand = (brand) => {
  // Navigate to the BackpacksView component and pass the brand as a query parameter
  router.push({ name: 'backpacks', query: { brand: brand } })
}
const logos = ref([
  { src: '/src/assets/nikeLogo1.png', alt: 'Nike', brand: 'Nike' },
  { src: '/src/assets/fjallravenLogo2.png', alt: 'Fjällräven', brand: 'Fjällräven' },
  { src: '/src/assets/adidasLogo1.png', alt: 'Adidas', brand: 'Adidas' },
  { src: '/src/assets/hhLogo.png', alt: 'Helly Hansen', brand: 'Helly Hansen' },
  { src: '/src/assets/dbLogo.png', alt: 'Douchebags', brand: 'Douchebags' }
])

const pop = (index) => {
  const eclipse = document.querySelectorAll('.eclipse')[index]
  eclipse.classList.add('pop')
}

const reset = (index) => {
  const eclipse = document.querySelectorAll('.eclipse')[index]
  eclipse.classList.remove('pop')
}
</script>

<style scoped>
.brand-banner {
  background-color: #ffefe0;
  display: flex;
  justify-content: space-around;
  padding: 10px;
}
.eclipse {
  width: 60px;
  height: 60px;
  border: solid rgba(0, 0, 0, 0.127);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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
  object-fit: contain;
}
.hhlogo {
  object-fit: contain;
}

.pop {
  transform: scale(1.3);
  transition: transform 0.3s ease;
}
</style>
