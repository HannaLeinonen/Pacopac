<script setup>
import SearchIcon from '@/components/icons/SearchIcon.vue'
import DropdownMenu from '@/components/DropdownMenu.vue'
import ShoppingCartComponent from './ShoppingCartComponent.vue'
</script>

<template>
  <header>
    <nav>
      <div class="navBar">
        <!-- Searchbar component onClick -->
        <SearchIcon class="search" />

        <RouterLink to="/" class="brandName">
          <h1>
            <!-- Using span elements to emphasize the P's -->
            <span class="largeLetter">P</span>aco<span class="largeLetter">P</span>ac
          </h1>
        </RouterLink>

        <div class="container">
          <!-- RouterLink to ShoppingBag page -->
          <ShoppingCartComponent class="cart" />

          <!-- DropDownMenu onClick -->
          <DropdownMenu class="menu" />
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navBar {
  display: flex;
  justify-content: space-between;
  margin: 0 0 auto;
  padding: 0.5rem;
  height: 6rem;
  background-color: var(--darkGreen);
}
/* Styling the letters P in brandName
    to be bigger then the rest of the letters */
.largeLetter {
  font-size: 40px;
}
.brandName {
  text-align: center;

  font-family: 'Koulen', sans-serif;
  text-decoration: none;
  color: #f9dac0;
}
.brandName h1 {
  margin: 0 auto;
  width: fit-content;
}

.search {
  width: 130px;
}

.container {
  width: 130px;
  display: flex;
  padding-left: 2rem;
}
</style>
