<template>
  <p><a href="/">home</a>/cart</p>
  <div class="product-wrapper">
    <div class="cart-items">
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <button class="increase-decrease-button" @click="removeItem(item.id)">Remove ✕</button>

        <h3>{{ item.name }}</h3>
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
    <h3>Total cost : ${{ totalCost }}</h3>
    <h4>Shippment added in checkout</h4>
  </div>
  <div class="checkout-button">
    <button><h3>CHECKOUT</h3></button>
  </div>

  <div class="cart-wrapper">
    <img src="/imgs/visa.png" alt="visa" />
    <img src="/imgs/swish.png" alt="swish" />
    <img src="/imgs/master.png" alt="master" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: []
    }
  },
  computed: {
    totalCost() {
      return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }
  },
  methods: {
    addItem(newItem) {
      const existingItem = this.cart.find((item) => item.id === newItem.id)
      if (existingItem) {
        existingItem.quantity += newItem.quantity
      } else {
        this.cart.push({ ...newItem, quantity: newItem.quantity || 1 })
      }
    },
    removeItem(itemId) {
      this.cart = this.cart.filter((item) => item.id !== itemId)
    },
    incrementItemQuantity(itemId) {
      const cartItem = this.cart.find((item) => item.id === itemId)
      if (cartItem) {
        cartItem.quantity++
      }
    },
    decrementItemQuantity(itemId) {
      const cartItem = this.cart.find((item) => item.id === itemId)
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--
      }
    }
  },
  mounted() {
    this.addItem({ id: 1, name: 'Product 1', price: 100, quantity: 1 })
    this.addItem({ id: 2, name: 'Product 2', price: 200, quantity: 2 })
  }
}
</script>

<style scoped>
/* Wrappers */

.cart-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px; /* Adjust padding to your preference */
  margin-bottom: 20px; /* This adds space between each card */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 390px;
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
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 39px;
  width: 89px;
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
  font-family: 'Koulen', sans-serif;
  font-size: larger;
}
button:hover {
  background-color: #ffc48d;
}

.increase-decrease-button {
  background-color: transparent;
  font-size: large;
}
.increase-decrease-button:hover {
  background-color: transparent;
}
.remove-button:hover {
  background-color: #ffc48d;
}
/* End of button */
/* Text style */
h3,
h4 {
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
