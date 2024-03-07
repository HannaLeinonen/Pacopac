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
/* * {
  overflow: visible;
} */

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
  color: var(--peach);
}
.brandName h1 {
  margin: 0 auto;
  width: fit-content;
  padding: 0;
}

.search {
  grid-column: 1;
}

.container {
  grid-column: 3;

  display: flex;
  padding-left: 2rem;
}
/* Media-queries desktop */
@media only screen and (min-width: 992px) {
  .navBar {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(1fr);
    grid-gap: 1rem;
  }

  .brandName {
    grid-column: 6/8;
  }
  .search {
    grid-column: 1/4;
  }
  .container {
    grid-column: 12/13;
  }
  .cart {
    margin-right: 1rem;
  }
}
</style>
