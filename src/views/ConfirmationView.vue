<template>
  <main>
    <h1>
      Thank you for your purchase, <br />
      keep exploring!
    </h1>
    <button @click="goToBackpacks">continue shopping</button>
    <h1>Don´t miss a thing <br />Sign up for our newsletter!</h1>
    <input
      type="text"
      placeholder="Write your email here!"
      v-model="email"
      @keyup.enter="showModal"
    />

    <div v-if="isModalVisible" class="modal" :class="{ 'modal-visible': isModalVisible }">
      <p>You are now subscribed!</p>
    </div>
  </main>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isModalVisible = ref(false)
const email = ref('')

function goToBackpacks() {
  router.push('/backpacks?category=All')
}

function showModal() {
  isModalVisible.value = true
  setTimeout(hideModal, 3000)
}

function hideModal() {
  isModalVisible.value = false
  email.value = ''
}
</script>
<style scoped>
main {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
/* Modal */
.modal {
  position: fixed;
  right: -100%;
  top: 0;
  width: 100%;
  height: 100%;
  transition: 1s ease-in-out;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.modal-visible {
  right: 0;
}
/* End of Modal */
h1 {
  margin: 9vh 0 0 0;
}
input {
  text-align: center;
  height: 30px;
  width: 20rem;
  margin-bottom: 15vh;
}
button {
  background-color: #d9a87e;
  border: none;
  border-radius: 5px;
  height: 43px;
  width: 280px;
  transition: ease 0.6s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Koulen', sans-serif;
  font-size: larger;
  margin: 5vh 0 10vh 0;
}
button:hover {
  background-color: #ffc48d;
}
</style>
