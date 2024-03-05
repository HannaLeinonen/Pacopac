<template>
  <div class="dropdown">
    <!-- OnClick show DropDownMenu -->
    <!-- <HamburgerMenu  class="dropdown-toggle" @click="toggleDropdown"/> -->
    <!-- Show HamburgerMenu always -->
    <HamburgerMenuIcon v-show="!isOpen" class="dropdown-toggle" @click="toggleDropdown" />
    <!-- Show CloseMenu when isOpen is true -->
    <CloseMenu v-show="isOpen" class="dropdown-toggle" @click="toggleDropdown" />

    <!-- <button class="dropdown-toggle" @click="toggleDropdown">
      <span>&#9776;</span>
    </button> -->

    <div class="dropdown-content" :class="{ open: isOpen }">
      <div class="categories">
        <button id="size-button">MEDIUM BAGS</button>
        <button id="size-button">LARGE BAGS</button>
        <button id="size-button">XL BAGS</button>
      </div>

      <div class="products">
        <a href="/" id="home">
          <div class="product-image">HOME</div>
        </a>

        <a href="#" id="helly">
          <div class="product-image">HELLY <br />HANSEN</div>
        </a>

        <a href="#" id="douche">
          <div class="product-image">DOUCHEBAGS</div>
        </a>

        <a href="#" id="nike">
          <div class="product-image">NIKE</div>
        </a>

        <a href="#" id="adidas">
          <div class="product-image">ADIDAS</div>
        </a>

        <a href="#" id="fjell">
          <div class="product-image">FJELLREVEN</div>
        </a>
      </div>
      <a href="#" id="sale">
        <div class="sale">
          <div>SALE</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import HamburgerMenuIcon from './icons/HamburgerMenuIcon.vue'
import CloseMenu from './icons/CloseMenuIcon.vue'
import { ref } from 'vue'

const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.dropdown-content {
  text-shadow: 5px 5px 5px black;
  position: fixed;
  top: 100px;
  right: -100%;
  transition: ease-in-out right 0.8s;
  background-color: #ffefe0;
  width: 390px;
  height: 531px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  border-radius: 10px;
  overflow-y: auto;
}
.dropdown-content.open {
  right: 0;
}
.dropdown-toggle {
  z-index: 2000;
}

.dropdown-content {
  display: show;
}

.categories {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;
}

button {
  background-color: #2b3d2e;
  color: #fff7f1;
  font-size: 13px;
  font-weight: bold;
  border: none;
  height: 31px;
  width: 114px;
  transition: ease 0.5s;
  border-radius: 10px;
  border: 2px solid black;
}

#size-button:hover {
  background-color: #222e24;
}

.products {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 5px 10px;
  color: #fff7f1;
  text-align: center;
  margin: 0 auto;
  max-width: 390px;
  font-size: 24px;
  letter-spacing: 1px;
}

.sale {
  color: #ff0000;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 99px;
  width: 370px;
  margin: 10px;
  font-size: 35px;
  border-radius: 10px;
  cursor: pointer;
  transition: ease-in-out 0.7s;
  background-position: bottom left;

  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url('/backpackImg/nikeL.webp');
  background-position: center;
  background-size: 50%;
  letter-spacing: 2px;
}
.sale:hover {
  background-position: top left;
  font-size: 50px;
}
.product-image {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 99px;
  margin: 0;
  padding: 0;
  transition: ease-in-out 0.5s;

  border-radius: 10px;
}
.product-image:hover {
  color: #d9a87e;
  font-size: 35px;
}
#home {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('../imgs/home.webp');
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 10px;
  background-position: center;
  transition: ease-in-out 0.7s;
  background-position: right left;
}
#home:hover {
  background-position: top left;
}
#nike {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('/backpackImg/nikeM.webp');
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 10px;
  transition: ease-in-out 0.7s;
  background-position: top left;
}
#nike:hover {
  background-position: bottom left;
}
#adidas {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('/backpackImg/adidasL.webp');
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 10px;
  transition: ease-in-out 0.7s;
  background-position: top left;
}
#adidas:hover {
  background-position: bottom left;
}
#douche {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('/backpackImg/dbL.webp');
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 10px;
  transition: ease-in-out 0.7s;
  background-position: top left;
}
#douche:hover {
  background-position: bottom left;
}
#helly {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('/backpackImg/hhXL.webp');
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 10px;
  transition: ease-in-out 0.7s;
  background-position: top left;
}
#helly:hover {
  background-position: bottom left;
}
#fjell {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('/backpackImg/fjallravenL.webp');
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 10px;
  transition: ease-in-out 0.7s;
  background-position: top left;
}
#fjell:hover {
  background-position: bottom left;
}

a {
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  color: #fff7f1;
}
</style>
