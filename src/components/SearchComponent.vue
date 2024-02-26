<template>
  <div class="search-container">
    <div class="search-wrapper">
      <input
        type="text"
        v-model="query"
        @input="search"
        @keydown.enter="handleSearch"
        placeholder="Search"
        class="search-bar"
      />
      <button class="search-button" @click="handleSearch">Search</button>
    </div>
    <ul v-show="query && results.length" class="search-results">
      <li v-for="(results, index) in results" :key="index" @click="navigate(results.path)">
        {{ results.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const query = ref('')
const results = ref([])
const router = useRouter()

const search = () => {
  results.value

  if (query.value.length > 0) {
    const pages = [
      { title: 'home', path: '/' },
      { title: 'about', path: '/about' }
    ]

    results.value = pages.filter((page) =>
      page.title.toLowerCase().includes(query.value.toLocaleLowerCase())
    )
  }
}

const navigate = (path) => {
  router.push(path)
}

const handleSearch = () => {
  search()
  if (results.value.length > 0) {
    navigate(results.value[0].path)
  }
}
</script>

<style scoped>
.search-container {
  position: relative;
}

.search-wrapper {
  display: flex;
}

.search-bar {
  width: 100%;
  height: 36px;
  border: 2px solid;
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

.search-results {
  font-size: 22px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
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
