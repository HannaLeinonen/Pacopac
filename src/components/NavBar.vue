<script setup>
import ShoppingBagIcon from '@/components/icons/ShoppingBagIcon.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import DropdownMenu from '@/components/DropdownMenu.vue'
import ShoppingCartComponent from './ShoppingCartComponent.vue'
</script>

<template>
  <header>
    <nav>
      <div class="navBar">
        <!-- Searchbar component onClick -->
        <SearchIcon />

        <RouterLink to="/" class="brandName">
          <h1>
            <!-- Using span elements to emphasize the P's -->
            <span class="largeLetter">P</span>aco<span class="largeLetter">P</span>ac
          </h1>
        </RouterLink>

        <!-- RouterLink to ShoppingBag page -->
        <ShoppingCartComponent />

        <!-- DropDownMenu onClick -->
        <DropdownMenu />
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Importing the font KOULEN for the brandName */
@import url('https://fonts.googleapis.com/css2?family=Koulen&display=swap');

* {
  overflow-x: visible;
}
.navBar {
  display: flex;
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
  /* Setting flex-grow so that it
        takes more place then the other components */
  flex-grow: 1;
  font-family: 'Koulen', sans-serif;
  text-decoration: none;
  color: var(--peach);
}
.brandName h1 {
  margin: 0 auto;
  width: fit-content;
}
</style>
