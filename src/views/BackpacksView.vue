<template>
  <p class="breadcrumbs">
    <a href="/">Home</a>
    /Backpacks
  </p>
  <div class="filterMenu">
    <button
      v-for="brand in brands"
      :class="{ active: activeCategory === brand }"
      :key="brand"
      @click="filterProducts(brand)"
    >
      {{ brand }}
    </button>
    <button id="saleButton" :class="{ active: activeSale }" @click="filterBySale">Sale</button>
  </div>
  <div class="filterMenu">
    <button
      v-for="size in sizes"
      :class="{ active: activeSize === size }"
      :key="size"
      @click="filterBySize(size)"
    >
      {{ size }}
    </button>
  </div>

  <div class="productCards">
    <ProductCard
      v-for="product in filteredProducts"
      :key="product.id"
      :id="product.id"
      :brand="product.brand"
      :rating="product.rating"
      :price="product.price"
      :imgUrl="product.imgUrl"
      :size="product.size"
    />
  </div>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue'
import ProductCard from '@/components/productCard.vue'
import { useRoute, useRouter } from 'vue-router'

const brands = ref(['All', 'Fjällräven', 'Helly Hansen', 'Douchebags', 'Adidas', 'Nike'])

const sizes = ref(['All', 'Medium', 'Large', 'XL'])
const products = ref([])
const filteredProducts = ref([])
const activeCategory = ref('All')
const activeSize = ref('All')
const activeSale = ref(false)
const router = useRouter()
const route = useRoute()

const fetchProducts = async () => {
  const response = await fetch('../products.json')
  const result = await response.json()
  products.value = result
  const brand = route.query.brand
  activeCategory.value = brand || 'All'
  activeSale.value = route.query.sale === 'true'
  applyFilters()
}
const filterBySale = () => {
  activeSale.value = !activeSale.value // Toggle the sale filter status
  applyFilters()
  router.push({
    path: '/backpacks',
    query: { ...route.query, sale: activeSale.value ? 'true' : undefined }
  })
}

const filterProducts = (brand) => {
  activeCategory.value = brand
  applyFilters()
  router.push({ path: '/backpacks', query: { brand: brand } })
}

const filterBySize = (size) => {
  activeSize.value = size
  applyFilters()
}

const applyFilters = () => {
  filteredProducts.value = products.value.filter((product) => {
    const matchesBrand = activeCategory.value === 'All' || product.brand === activeCategory.value
    const matchesSize = activeSize.value === 'All' || product.size.includes(activeSize.value)
    const isOnSale = !activeSale.value || product.sale !== undefined
    return matchesBrand && matchesSize && isOnSale
  })
}

onMounted(fetchProducts)

watch(
  () => route.query,
  (query) => {
    activeCategory.value = query.brand || 'All'
    activeSale.value = query.sale === 'true'
    applyFilters()
  },
  { immediate: true }
)
</script>

<style scoped>
.breadcrumbs {
  margin-left: 1rem;
  font-family: 'Kulim Park', sans-serif;
}
.productCards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#saleButton {
  background-color: rgb(213, 25, 25);
  color: white;
  padding: 0.3rem 1rem 0.3rem 1rem;
  margin-left: 1rem;
}
.filterMenu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0.5rem;
}
.filterMenu button {
  font-family: 'Kulim Park', sans-serif;
  font-weight: 400;
  cursor: pointer;
  border-style: none;
  border-width: 0.05rem;
  border-color: rgb(209, 144, 74);
  border-radius: 6px;
  padding: 0.3rem 0.7rem 0.3rem 0.7rem;
  background-color: rgb(250, 226, 202);
  margin: 0 0.05rem 0.5rem 0.05rem;
  font-size: 1.2rem;
}
.filterMenu .active {
  background-color: rgb(227, 177, 113);
  font-weight: 600;
  box-shadow: 0rem 0.2rem 0.5rem rgba(0, 0, 0, 0.444);
}
@media (min-width: 760px) {
  .filterMenu button {
    font-size: 1.5rem;
  }
}
</style>
