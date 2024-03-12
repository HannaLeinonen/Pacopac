<script setup>

import PaymentMethods from '@/components/PaymentMethods.vue'
import BreadCrumbs from '@/components/BreadCrumb.vue'
import CartItems from '@/components/CartItems.vue'
import CheckoutForm from '@/components/CheckoutForm.vue'
import { useStore } from '@/Store/store.js'
import { useRouter } from 'vue-router'
import { ref, computed, watch } from 'vue'


const router = useRouter()
const cartStore = useStore()
const cartItems = computed(() => cartStore.cartItems)
const totalCost = computed(() => cartStore.totalCost)
const clearCart = computed(() => cartStore.clearCart)
const totalCostWithShipping = computed(() => cartStore.totalCost + shippingCost.value)
const priceSummary = ref(0)
const shippingCost = ref(10)

// Function to clear cart with items and routing user to confirmation page
function completeOrder() {
    clearCart;
    cartStore.cartItems = [];
    router.push('/')
}
// Watch for changes when user adds or removes items in checkout and update price ' quantity of items'
watch(cartItems, (newItems) => {
  priceSummary.value = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
})
</script>

<template>
  <!-- Breadcrumbs for user availability -->
  <BreadCrumbs :crumbs="breadcrumbs" />
  <div class="container">
    <h3>REVIEW YOUR ORDER (X ITEMS)</h3>
    <CartItems
      v-for="item in cartItems"
      :key="item.id"
      :id="item.id"
      :price="item.price"
      :brand="item.brand"
      :imgUrl="item.imgUrl"
      :size="item.size"
      :quantity="item.quantity"
      :item="item"
      :priceSummary="priceSummary"
    />
    <div class="itemsSum">
      <h3>SUB TOTAL</h3>
      <h3>${{ totalCost.toFixed(2) }}</h3>
    </div>

    <h3>DELIVERY ADDRESS</h3>
    <div class="checkoutForm">
      <CheckoutForm @goToPayment="goToPaymentAndSummary"/>
    </div>

    <div v-show="showDiv">
      <div class="paymentMethods">
        <h3>CHOOSE PAYMENT METHOD</h3>
        <!-- Payment methods component -->
        <PaymentMethods />
      </div>

      <div class="order">
        <h3>ORDER SUMMARY</h3>

        <div v-for="item in cartItems" :key="item.id" class="products">
          <p>{{ item.quantity }}x {{ item.brand }}</p>
          <p>${{ item.price }}</p>
        </div>
        <div class="shipping">
          <p>Shipping</p>
          <p>${{ shippingCost }}</p>
        </div>

        <div class="summary">
          <h3>ORDER TOTAL</h3>
          <p>${{ totalCostWithShipping.toFixed(2) }}</p>
        </div>
        <button @click="completeOrder">COMPLETE ORDER</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        { label: 'Home', path: '/' }, // home link
        { label: '/Checkout', path: '/checkout' } // Current page
      ],
      showDiv: false
    }
  },
  methods: {
    // Displaying the rest of checkout and payment page
    goToPaymentAndSummary() {
        this.showDiv = true;
    }

  }
}
</script>

<style scoped>
.container,
.order {
  margin: 0 auto;
  width: 95%;
  font-family: 'Kulim Park', sans-serif;
  font-weight: 400;
  font-style: normal;
}
.container {
  margin-top: 2rem;
}
.itemsSum {
  display: flex;
  justify-content: space-between;
  margin-right: 0.4rem;
  margin-bottom: 5rem;
}
.checkoutForm {
  margin: 0 1rem 0;
}

.paymentMethods h3 {
  margin: 2rem 0 2rem 0;
}
.order {
  margin-top: 15vh;
  margin-bottom: 15vh;
  padding: 1rem;
  background-color: white;
}
.products,
.shipping {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 1rem 0;
}
.summary {
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 2rem 0;
}
.shipping {
  border-bottom: 1px solid black;
  padding-bottom: 2rem;
}

button {
  margin: 6%;
  height: 43px;
  width: 280px;
  background-color: #d9a87e;
  border: none;
  border-radius: 5px;
  font-family: 'Koulen', sans-serif;
  font-size: 22px;
  cursor: pointer;
}
button:hover {
  background-color: #ffc48d;
}

/* Media-queries tablet and small laptops */
@media only screen and (min-width: 798px) {
  .paymentMethods {
    width: 45vw;
    margin: 0 auto;
  }
  .container,
  .order {
    width: 55vw;
  }
  button {
    margin-left: 4rem;
  }
}

/* Media-queries larger desktops */
@media only screen and (min-width: 1200px) {
  .paymentMethods {
    width: 20vw;
    margin: 0 auto;
  }
  .container,
  .order {
    width: 30vw;
  }
  .order {
    padding: 1.5rem;
  }
  button {
    margin-left: 23%;
  }
}
</style>
