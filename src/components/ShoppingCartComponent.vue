<template>
  <div class="dropdown">
    <ShoppingBagIcon v-show="!isOpen" class="dropdown-toggle" @click="toggleDropdown" />
    <!-- Show CloseMenu when isOpen is true -->
    <CloseMenu v-show="isOpen" class="dropdown-toggle" @click="toggleDropdown" />
    <div class="dropdown-content" :class="{ open: isOpen }">
      <div class="product-wrapper">
        <div class="cart-items">
          <div v-for="item in cartItems" :key="item.id" class="cart-item">
            <button class="remove-button" @click="removeItem(item.id)">
              <h3>Remove ✕</h3>
            </button>

            <h3>{{ item.brand }}</h3>
            <div class="increase-decrease">
              <button class="increase-decrease-button" @click="incrementItemQuantity(item.id)">
                +
              </button>
              <p>{{ item.quantity }}</p>
              <button
                class="increase-decrease-button"
                @click="decrementItemQuantity(item.id)"
                :disabled="item.quantity <= 1"
              >
                -
              </button>
            </div>
            <h3>${{ item.price }}</h3>
          </div>
        </div>
      </div>
      <div class="text-wrapper">
        <h3>Total cost : ${{ totalCost.toFixed(2) }}</h3>
        <h4>Shippment added in checkout</h4>
      </div>
      <div class="checkout-button">
        <button><h3>CHECKOUT</h3></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '@/Store/store.js'
import ShoppingBagIcon from './icons/ShoppingBagIcon.vue'
import CloseMenu from './icons/CloseMenuIcon.vue'
import { ref, computed } from 'vue'
const cartStore = useStore()

const isOpen = ref(false)
const cartItems = computed(() => cartStore.cartItems)

const removeItem = cartStore.removeItem
const incrementItemQuantity = cartStore.incrementItemQuantity
const decrementItemQuantity = cartStore.decrementItemQuantity

const totalCost = computed(() => cartStore.totalCost)
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
/* Dropdown */
.dropdown-content {
  position: fixed;
  top: 100px;
  bottom: 0;
  right: -390px;
  transition: ease-in-out right 0.6s;

  background-color: #ffefe0;
  width: 390px;
  height: max-content;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  border-radius: 10px;
}
.dropdown-content.open {
  position: absolute;
  right: 0;
}
.dropdown-toggle {
  z-index: 2000;
}

.dropdown-content {
  display: show;
}
/* End of Dropdown */

/* Wrappers */

.cart-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
}
.product-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.text-wrapper {
  text-align: center;
}
.cart-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.checkout-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
.increase-decrease {
  overflow-y: hidden;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 39px;
  width: 109px;
  margin: 30px;
  border: 1px solid #000;
  border-radius: 10px;
}
/* End of Wrappers */
/* Img */
img {
  margin-right: 10px;
  width: 60px;
}
/* End of Img */
/* Button */
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
  margin-bottom: 20px;
  font-size: larger;
}
button:hover {
  background-color: #ffc48d;
}

.increase-decrease-button {
  background-color: transparent;
  border: none;
  margin: 0px;
  border-radius: 10px;
  height: 43px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
}
.remove-button {
  background-color: transparent;
  width: 200px;
}
.remove-button:hover {
  background-color: #ffc48d;
}
/* End of button */
/* Text style */
h3,
p,
h4,
a {
  font-family: 'Koulen', sans-serif;
  margin-left: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin-left: 10px;
}
</style>
