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
        console.log(product.length)
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
        // Optionally remove the item if its quantity is 1 or less
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
    }
  },
  getters: {
    totalCost: (state) => {
      return state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }
  }
})
