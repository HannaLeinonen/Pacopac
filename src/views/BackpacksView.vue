<template>
  <ProductCard
    v-for="product in products"
    :key="product.id"
    :brand="product.brand"
    :rating="product.rating"
    :price="product.price"
    :imgUrl="product.imgUrl"
  />
</template>
<script>
import ProductCard from '@/components/productCard.vue'

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      products: []
    }
  },
  created() {
    this.fetchProducts()
  },
  methods: {
    fetchProducts() {
      fetch('../products.json')
        .then((response) => response.json())
        .then((result) => {
          this.products = result
        })
    }
  }
}
</script>
