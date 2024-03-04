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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(1fr);
  grid-gap: 1rem;
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
  grid-column: 2;

  font-family: 'Koulen', sans-serif;
  text-decoration: none;
  color: #f9dac0;
}
.brandName h1 {
  margin: 0 auto;
  width: fit-content;
}

.search {
  grid-column: 1;
}

.container {
  grid-column: 3;

  display: flex;
  padding-left: 2rem;
}
/* Media-queries tablet and small laptops */
@media only screen and (min-width: 798px) {
  .navBar {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(1fr);
    grid-gap: 1rem;
  }

  .brandName {
    grid-column: 3/5;
    grid-row: 1;
  }
  .search {
    grid-column: 1/4;
    grid-row: 1;
    margin-left: 1rem;
  }
  .container {
    grid-column: 6;
    grid-row: 1;
  }
}
/* Media-queries larger desktops */
@media only screen and (min-width: 1200px) {
  .navBar {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(1fr);
    grid-gap: 1rem;
  }
  .brandName {
    grid-column: 5/7;
    grid-row: 1;
  }
  .search {
    grid-column: 1/4;
    grid-row: 1;
    margin-left: 2rem;
  }
  .container {
    grid-column: 10;
    grid-row: 1;
    margin-left: 1.5rem;
    padding: 0;
  }
}
</style>
