<!-- Template -->
<template>
  <div>
    <BrandBanner />
  </div>
  <main>
    <!-- New arrivals -->
    <div class="new-arrivals">
      <h1>NEW ARRIVALS</h1>
      <button @click="goToBackpacks">SHOP NOW</button>
    </div>
    <!-- End of New arrivals -->
    <!-- Sale banner -->
    <RouterLink to="/backpacks?brand=All&sale=true">
      <div class="sale-banner">
        <div id="slideshow-sale">
          <div
            v-for="(slide, index) in img"
            :key="index"
            class="slide"
            :class="{ active: index === currentSlide }"
            :style="{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(' + slide.image + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }"
          >
            <h1 id="sale">SALE</h1>
          </div>
        </div>
      </div>
    </RouterLink>

    <!-- End of Sale banner -->
    <!-- Hero Slide -->
    <div class="hero-products">
      <div id="slideshow">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="slide"
          :class="{ active: index === currentSlide }"
          :style="{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(' + slide.image + ')'
          }"
        >
          <h1>{{ slide.title }}</h1>
        </div>
      </div>
    </div>
    <!-- End of Hero Slide -->
    <!-- Sale banner 2 -->

    <!-- End of Sale banner 2 -->
    <!-- Inspo div -->
    <div class="inspo-div">
      <h1>
        "Fuel your wanderlust <br />
        with our stylish and durable backpacks. <br />
        Where will you go next?"
      </h1>
    </div>
    <!-- End of Inspo div -->
  </main>
</template>
<!-- End of Template -->

<!-- Script -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import BrandBanner from '@/components/BrandBanner.vue'

/* Auto slide Urban / Nature */
const slides = ref([
  { image: 'imgs/urban.webp', title: 'Urban' },
  { image: 'imgs/nature.webp', title: 'Nature' },
  { image: 'imgs/urban.webp', title: 'Urban' },
  { image: 'imgs/nature.webp', title: 'Nature' }
])

/* Sale banner imgs */
const img = ref([
  { image: '/backpackImg/dbL.webp', title: 'db' },
  { image: '/backpackImg/adidasXL.webp', title: 'adidas' },
  { image: '/backpackImg/nikeXL.webp', title: 'nike' },
  { image: '/backpackImg/fjallravenXL.webp', title: 'fjell' }
])

const currentSlide = ref(0)

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % img.value.length
}

onMounted(() => {
  const interval = setInterval(nextSlide, 5000)
  onUnmounted(() => {
    clearInterval(interval)
  })
})
const router = useRouter()
function goToBackpacks() {
  router.push('/backpacks?category=All')
}
</script>
<!--  End of Script -->

<!-- Style -->
<style scoped>
/* Directions
1. Text style
2. New arrivals section
3. Sale Banner
4. Slideshow
5. Inspo div
 */
main {
  background-color: #ffefe0;
}
/* 1. Text style */

h1 {
  letter-spacing: 2px;
  text-shadow: 5px 5px 5px black;
}

/* End of text style */

/* 2. New arrivals section */
.new-arrivals {
  color: white;
  display: flex;
  flex-direction: column;
  height: 282px;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url('../imgs/new-arrivals3.webp');
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
button {
  background-color: #d9a87e;
  border: none;
  border-radius: 5px;
  height: 43px;
  width: 280px;
  transition: ease 0.6s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Koulen', sans-serif;
  font-size: larger;
}
button:hover {
  background-color: #ffc48d;
}

/* End of New arrivals section */

/* 3. Sale Banner */
.sale-banner {
  color: #ff0000;
  font-size: 3vh;
  height: 30vh;
  width: 100%;
  text-align: center;
  margin: 7vh 0 7vh 0;
}
.sale-banner:hover {
  cursor: pointer;
}
#slideshow-sale {
  position: relative;

  height: 100%;
}

/* End of Sale Banner */

/* 4. SlideShow */
.hero-products {
  color: white;
  font-size: 30px;
  height: 30vh;
  width: 100%;
  text-align: center;
  margin: 7vh 0 7vh 0;
}

#slideshow {
  position: relative;
  overflow: hidden;
  height: 100%;
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity 1s ease-in-out;
  opacity: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.slide.active {
  opacity: 1;
}

.slide h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
/* End of Slide */

/* 5. Inspo div */
.inspo-div {
  position: relative;
  height: 40vh;
  color: white;

  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
  margin: 7vh 0 7vh 0;
}

.inspo-div::before,
.inspo-div::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transition: opacity 3s ease;
}

.inspo-div::before {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('../imgs/inspo.webp');
  opacity: 1;
}

.inspo-div h1 {
  position: relative;
  z-index: 2;
  color: white;
  margin: 1rem;
  text-align: center;
}

/* End of Inspo div */

/* Media-queries desktop*/
@media only screen and (min-width: 992px) {
  .inspo-div::after {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url('../imgs/winter-inspo.webp');
    opacity: 0;
  }
  .inspo-div:hover::after {
    opacity: 1;
  }

  .inspo-div:hover::before {
    opacity: 0;
  }

  .hero-products,
  .inspo-div,
  .sale-banner {
    height: 60vh;
  }
  .new-arrivals {
    height: 40vh;
  }
}
</style>
<!-- End of Style -->
