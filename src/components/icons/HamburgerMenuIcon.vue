<script setup>
import DropdownMenu from '@/components/DropdownMenu.vue'
</script>

<template>
  <div class="menuIcon" >
    <!-- OnClick show DropDownMenu -->
    <button @click="openMenu">
        <svg
      width="40px"
      height="40px"
      viewBox="0 0 24.00 24.00"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <title>Menu</title>
        <g id="Page-1" stroke-width="2.016" fill="none" fill-rule="evenodd">
          <g id="Menu">
            <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"></rect>
            <line
              x1="5"
              y1="7"
              x2="19"
              y2="7"
              id="Path"
              stroke="#F9DAC0"
              stroke-width="2.016"
              stroke-linecap="round"
            ></line>
            <line
              x1="5"
              y1="17"
              x2="19"
              y2="17"
              id="Path"
              stroke="#F9DAC0"
              stroke-width="2.016"
              stroke-linecap="round"
            ></line>
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
              id="Path"
              stroke="#F9DAC0"
              stroke-width="2.016"
              stroke-linecap="round"
            ></line>
          </g>
        </g>
      </g>
    </svg>
    </button>

    <!-- DropDownMenu component -->
    <DropdownMenu v-if="showMenu"/>
  </div>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false
        }
    },
    methods: {
        openMenu() {
            this.showMenu = true
        }
    }
}
</script>

<style scoped>
    button {
        background-color: var(--darkGreen);
        border: none;
    }
</style>
