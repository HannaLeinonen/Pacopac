
<script setup>
    import SearchComponent from '../SearchComponent.vue';
</script>
<template>
  <div class="searchIcon">
    <!-- OnClick open SearchBar  -->
    <button @click="openSearchBar">
      <svg
        width="35px"
        height="35px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
            stroke="#F9DAC0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
    </button>

    <!-- SearchBar component -->
    <SearchComponent v-if="showSearchBar"/>
  </div>
</template>

<script>
export default {
    data() {
        return {
            showSearchBar: false
        }
    },
    methods: {
        openSearchBar() {
            this.showSearchBar = !this.showSearchBar
        }
    }
}
</script>

<style scoped>
svg {
  padding: 0.2rem;
}

button {
  background-color: var(--darkGreen);
  border: none;
  cursor: pointer;
}
</style>
