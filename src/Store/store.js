import { defineStore } from 'pinia'

export const useStore = defineStore('cartStore', {
  state: () => {
    return {
      cartItems: []
    }
  },
  actions: {
    addToCart(product, quantity = 1) {
      const existingItem = this.cartItems.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        this.cartItems.push({ ...product, quantity })
      }
      this.saveCart()
    },
    removeItem(itemId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== itemId)
    },
    incrementItemQuantity(itemId) {
      const cartItem = this.cartItems.find((item) => item.id === itemId)
      if (cartItem) {
        cartItem.quantity++
      }
    },
    decrementItemQuantity(itemId) {
      const cartItem = this.cartItems.find((item) => item.id === itemId)
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--
      } else {
        this.removeItem(itemId)
      }
    },
    saveCart() {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    },
    loadCart() {
      const cartItems = localStorage.getItem('cartItems')
      if (cartItems) {
        this.cartItems = JSON.parse(cartItems)
      }
    },
    clearCart() {
      localStorage.removeItem('cartItems')
    }
  },
  getters: {
    totalCost: (state) => {
        return state.cartItems.reduce((sum, item) => {
            const effectivePrice = item.sale ?? item.price;
            return sum + effectivePrice * item.quantity;
          }, 0);
    }
  }
})
