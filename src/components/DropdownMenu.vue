<template>
  <div class="dropdown">
    <button class="dropdown-toggle" @click="toggleDropdown">
      <span>&#9776;</span>
    </button>
    <div class="dropdown-content" :class="{ open: isOpen }">
      <div class="categories">
        <button id="size-button">MEDIUM BAGS</button>
        <button id="size-button">LARGE BAGS</button>
        <button id="size-button">XL BAGS</button>
      </div>

      <div class="products">
        <a href="#">
          <div class="product-image">HOME</div>
        </a>

        <a href="#">
          <div class="product-image">HELLY HANSEN</div>
        </a>

        <a href="#">
          <div class="product-image">DOUCHEBAGS</div>
        </a>

        <a href="#">
          <div class="product-image">NIKE</div>
        </a>

        <a href="#">
          <div class="product-image">ADIDAS</div>
        </a>

        <a href="#">
          <div class="product-image">FJELLREVEN</div>
        </a>
      </div>
      <a href="#">
        <div class="sale">
          <div>SALE</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: fixed;
  top: 100px;
  bottom: 0;
  left: -100%;
  transition: left 0.6s;
  background-color: #ffefe0;
  width: 390px;
  height: 531px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}
.dropdown-content.open {
  left: 0;
}
.dropdown-toggle {
  background-color: #ffefe0;
  color: white;
  padding: 24px;
  font-size: 30px;
  border: none;
  cursor: pointer;
  z-index: 2000;
  transition: ease 0.7s;
}
.dropdown-toggle:hover {
  color: #d9a87e;
}

.dropdown-content {
  display: block;
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
  font-size: 14px;
  font-weight: bold;
  border: none;
  height: 31px;
  width: 114px;
  transition: ease 0.5s;
}

#size-button:hover {
  background-color: #35583b;
  color: #d9a87e;
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
}

.sale {
  background-color: #ff0000;
  color: #fff7f1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 99px;
  width: 370px;
  margin: 10px;
  font-size: 24px;
}

.product-image {
  background-color: #d9a87e;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 99px;
  margin: 0;
  padding: 0;
}
a {
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  color: #fff7f1;
}
</style>
