<script setup>
import PaymentMethods from '@/components/PaymentMethods.vue'
import BreadCrumbs from '@/components/BreadCrumb.vue'
import CartItems from '@/components/CartItems.vue'
import CheckoutForm from '@/components/CheckoutForm.vue'
</script>

<template>
  <!-- Breadcrumbs for user availability -->
  <BreadCrumbs :crumbs="breadcrumbs" />
  <div class="container">
    <h3>REVIEW YOUR ORDER (X ITEMS)</h3>
    <CartItems /><!-- v-for="item in cart" :key="item.id" -->

    <div class="checkoutForm">
      <CheckoutForm />
    </div>

    <div class="paymentMethods">
      <h3>CHOOSE PAYMENT METHOD</h3>
      <!-- Payment methods component -->
      <PaymentMethods />
    </div>

    <div class="order">
      <h3>ORDER SUMMARY</h3>

      <div class="products">
        <p>1x Product name</p>
        <p>$139</p>
      </div>
      <div class="products">
        <p>1x Product name</p>
        <p>$199</p>
      </div>
      <div class="shipping">
        <p>Shipping</p>
        <p>$10</p>
      </div>

      <div class="summary">
        <h3>ORDER TOTAL</h3>
        <p>
          $348
          <!-- {{ summary }} -->
        </p>
      </div>
      <button @click="completeOrder">COMPLETE ORDER</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        { label: 'Home', path: '/' }, // home link
        // { label: '/Path category before', path: '/path' }, add path before the current path (if there is any)

        { label: '/Checkout', path: '/checkout' } // Add current page
      ]
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
