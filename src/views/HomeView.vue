<!-- Template -->
<template>
  <div>
    <BrandBanner />
  </div>
  <main>
    <!-- New arrivals -->
    <div class="new-arrivals">
      <h1>NEW ARRIVALS</h1>
      <button>SHOP NOW</button>
    </div>
    <!-- End of New arrivals -->
    <!-- Sale banner 1 -->
    <div class="sale-banner">
      <h1 id="sale">SALE</h1>
      <h1 id="sale">SALE</h1>
      <h1 id="sale">SALE</h1>
    </div>

    <!-- End of Sale banner 1 -->
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
    <div class="sale-banner" id="sale2">
      <h1 id="sale">SALE</h1>
      <h1 id="sale">SALE</h1>
      <h1 id="sale">SALE</h1>
    </div>
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
import BrandBanner from '@/components/BrandBanner.vue'

import { ref, onMounted, onUnmounted } from 'vue'

const slides = ref([
  { image: 'imgs/urban.webp', title: 'Urban' },
  { image: 'imgs/nature.webp', title: 'Nature' }
])

const currentSlide = ref(0)

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

onMounted(() => {
  const interval = setInterval(nextSlide, 5000)
  onUnmounted(() => {
    clearInterval(interval)
  })
})
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

/* 1. Text style */

h1 {
  letter-spacing: 2px;
  text-shadow: 5px 5px 5px black;
}
#sale {
  margin-left: 1rem;

  transition: ease, 0.7;
  font-size: 50px;
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
  border-radius: 10px;
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
  display: flex;
  height: 154px;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('/backpackImg/nikeL.webp');
  background-position: bottom left;
  background-position: center;
  background-size: contain;
  transition: ease-in-out 1s;
  overflow: hidden;
}

#sale2 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('/backpackImg/fjallravenXL.webp');
}
/* End of Sale Banner */

/* 4. SlideShow */
.hero-products {
  color: white;
  font-size: 30px;
  height: 207px;
  width: 100%;
  text-align: center;
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
}

.slide.active {
  opacity: 1;
}
.slide img {
  width: 100%;
  height: 207px;
  object-fit: cover;
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
  height: 400px;
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
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

.inspo-div:hover::after {
  opacity: 1;
}

.inspo-div:hover::before {
  opacity: 0;
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
  #sale {
    margin: 100px;
    transition: ease, 0.7;
    font-size: 80px;
  }

  .inspo-div::after {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url('../imgs/winter-inspo.webp');
    opacity: 0;
  }
  .sale-banner:hover {
    background-position: top left;
  }
}
</style>
<!-- End of Style -->
