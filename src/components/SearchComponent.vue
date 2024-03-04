<template>
  <div class="search-container">
    <div class="search-wrapper">
      <input
        type="text"
        v-model="query"
        @input="search"
        @keydown.enter="handleSearch"
        @keydown="handleKeyDown"
        placeholder="Search"
        class="search-bar"
      />
      <button class="search-button" @click="handleSearch">
        <img src="@/assets/searchIcon.png" alt="search icon" />
      </button>
    </div>
    <ul v-show="query && results.length" class="search-results">
      <li
        v-for="(product, index) in results"
        :key="index"
        :class="{ selected: index === selectedIndex }"
        @click="navigate(product)"
      >
        {{ product.brand }} - {{ product.id }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const query = ref('')
const results = ref([])
const router = useRouter()
let selectedIndex = ref(0)

let products = []

onMounted(async () => {
  try {
    const response = await fetch('products.json')
    products = await response.json()
  } catch (error) {
    console.error('Error fetching products:', error)
  }
})

const search = () => {
  results.value = []

  if (query.value.length > 0) {
    results.value = products.filter(
      (product) =>
        product.id.toString().includes(query.value) ||
        product.brand.toLowerCase().includes(query.value.toLowerCase())
    )
  }
}

const handleSearch = () => {
  if (results.value.length > 0) {
    navigate(results.value[selectedIndex.value])
    query.value = ''
  }
}

const navigate = (product) => {
  router.push(`/product/${product.id}`)
  query.value = ''
}

const handleKeyDown = (event) => {
  if (event.key === 'ArrowDown') {
    event.preventDefault()
    selectedIndex.value = Math.min(selectedIndex.value + 1, results.value.length - 1)
    updateQuery()
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    selectedIndex.value = Math.max(selectedIndex.value - 1, 0)
    updateQuery()
  }
}

const updateQuery = () => {
  if (results.value.length > 0) {
    const selectedProduct = results.value[selectedIndex.value]
    query.value = `${selectedProduct.brand} - ${selectedProduct.id}`
  }
}
</script>

<style scoped>
* {
  overflow-x: visible;
}
<<<<<<< HEAD
=======

.selected {
  background-color: #f0f0f0;
}
>>>>>>> ae1aa9775462c354330d53b594d54f32f4948815
.search-container {
  position: relative;
}

.search-wrapper {
  display: flex;
}

.search-bar {
  width: 100%;
  height: 36px;
  border: 1px;
  border-radius: 5px;
  font-size: 22px;
}
.search-button {
  background-color: #592020;
  color: #fff;
  border: none;
  border-radius: 0 5px 5px 0;
  font-size: 18px;
  padding: 0 10px;
  cursor: pointer;
}

.search-bar:focus {
  outline: none;
  border-color: transparent;
}

.search-results {
  font-size: 22px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid black;
  border-top: none;
  list-style-type: none;
  border-radius: 5px;
  padding: 0;
  margin: 0;
}

.search-results li {
  padding: 10px;
  cursor: pointer;
}

.search-results li:hover {
  background-color: #f0f0f0;
}

.search-button {
  display: none;
}

@media screen and (min-width: 770px) {
  .search-bar {
    width: 215px;
    height: 30px;
    border-radius: 5px 0 0 5px;
  }

    .search-button {
    display: inline-block;
  }

  .search-results {
    width: 215px;
  }
}
</style>
