<script setup>
import { useStore } from '@/Store/store.js'
const cartStore = useStore()
const incrementItemQuantity = cartStore.incrementItemQuantity
const decrementItemQuantity = cartStore.decrementItemQuantity
</script>

<template>
  <div class="cartItems">
    <div class="item">
      <img class="cardImg" :src="imgUrl" />
      <div class="itemInfo">
        <h4>{{ brand }}</h4>
        <p>Size: {{ size }}</p>

        <div class="quantitySelect">
          <p>Qty:</p>
          <div class="increase-decrease">
            <button class="increase-decrease-button" @click="decrementItemQuantity(id)">-</button>
            <p>{{ quantity }}</p>
            <button class="increase-decrease-button" @click="incrementItemQuantity(id)">+</button>
          </div>
        </div>
      </div>
      <h4 class="totalPrice">${{ totalPrice.toFixed(2) }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    imgUrl: String,
    brand: String,
    size: String,
    price: Number,
    sale: Number,
    quantity: Number
  },
  computed: {
    // Calculating the total price of an item
    totalPrice() {
      return (this.sale ?? this.price) * this.quantity
    }
  }
}
</script>

<style>
.cartItems {
  margin-top: 1rem;
}
.item {
  display: flex;
  background-color: white;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.24);
  -webkit-box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.24);
}
.item h4 {
  margin-bottom: 0.3rem;
}
.itemInfo {
  flex-grow: 1;
}
.itemInfo p {
  margin-bottom: 0.3rem;
}
.cardImg {
  width: 88px;
  margin-right: 1rem;
}
.totalPrice {
  align-self: flex-end;
  width: 70px;
}
.quantitySelect {
  display: flex;
}
.increase-decrease {
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  margin-left: 0.2rem;
  border: 1px solid lightgray;
  border-radius: 5px;
}
.increase-decrease button {
  border: none;
  padding: 0.2rem;
  margin: 0 0.1rem 0;
  background-color: white;
}
</style>
