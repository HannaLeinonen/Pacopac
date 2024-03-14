<template>
  <div class="dropdown">
    <ShoppingBagIcon v-show="!isOpen" class="dropdown-toggle" @click="toggleDropdown" />

    <CloseMenu v-show="isOpen" class="dropdown-toggle" @click="toggleDropdown" />
    <div class="dropdown-content" :class="{ open: isOpen }">
      <div class="product-wrapper">
        <div class="cart-items">
          <div v-for="item in cartItems" :key="item.id" class="cart-item">
            <img :src="item.imgUrl" alt="Product Image" class="product-image" />

            <div class="item-details">
              <h3 class="item-brand">{{ item.brand }}</h3>
              <p class="item-size">Size: {{ item.size }}</p>

              <div class="increase-decrease">
                <button class="increase-decrease-button" @click="decrementItemQuantity(item.id)">
                  -
                </button>
                <p>{{ item.quantity }}</p>
                <button class="increase-decrease-button" @click="incrementItemQuantity(item.id)">
                  +
                </button>
              </div>
            </div>

            <div class="item-action">
              <button class="remove-button" @click="removeItem(item.id)">
                <h3>✕</h3>
              </button>

              <h3>${{ item.price }}</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="text-wrapper">
        <h3>Total cost : ${{ totalCost.toFixed(2) }}</h3>
        <h4>Shippment added in checkout</h4>
      </div>
      <div class="checkout-button">
        <button @click="goToCheckout"><h3>CHECKOUT</h3></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '@/Store/store.js'
import ShoppingBagIcon from './icons/ShoppingBagIcon.vue'
import CloseMenu from './icons/CloseMenuIcon.vue'
/* Theo was here */
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'

const cartStore = useStore()
const router = useRouter()
const isOpen = ref(false)
const cartItems = computed(() => cartStore.cartItems)

const removeItem = cartStore.removeItem
const incrementItemQuantity = cartStore.incrementItemQuantity
const decrementItemQuantity = cartStore.decrementItemQuantity

const totalCost = computed(() => cartStore.totalCost)
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

function goToCheckout() {
  router.push('/checkout')
  isOpen.value = false
}
</script>

<style scoped>
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
  display: block;
}

.cart-item {
  display: flex;
  align-items: stretch;
  justify-content: start;
  flex-direction: row;
  padding: 15px;
  margin-bottom: 10px;
  margin-top: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 340px;
  background-color: #fff;
}

.item-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item-brand,
.item-size {
  display: flex;
  margin-left: 15px;
}

.item-action {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  align-items: flex-end;
}

.product-wrapper,
.checkout-button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.increase-decrease {
  overflow-y: hidden;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 39px;
  margin-left: 10px;
  width: 75px;
  border: 1px solid #000;
  border-radius: 10px;
}

.product-image {
  width: 125px;
  height: auto;
  margin-right: 20px;
  border-radius: 10px;
  /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); */
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
  width: 30px;
}

.remove-button:hover {
  background-color: #ffc48d;
}

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
