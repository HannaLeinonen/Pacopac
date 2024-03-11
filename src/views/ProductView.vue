<template>
  <p><a href="/">home</a><a href="/backpacks">/Backpacks</a>/{{ product.brand }}</p>

  <div id="product-container" v-if="product">
    <div id="productImg">
      <img :src="product.imgUrl" />
    </div>
    <div id="info-wrapper">
      <div id="productInfo">
        <div id="brand-rating">
          <h4>{{ product.brand }}</h4>
          <p><span>&#9733;</span>{{ product.rating }}</p>
        </div>

        <h3>{{ product.size }} {{ product.brand }} backpack</h3>
        <p id="price">${{ product.price }}</p>

        <div class="colors">
          <button style="background-color: rgb(178, 151, 0)"></button>
          <button style="background-color: rgb(248, 206, 176)"></button>
          <button style="background-color: rgb(87, 0, 0)"></button>
          <button style="background-color: rgb(0, 0, 0)"></button>
        </div>
      </div>

      <div id="cartButton">
        <button @click="addToCart(product)">ADD TO CART</button>
      </div>

      <p>In stock: <span id="inStore"></span> (50+ available)</p>
      <p style="padding-top: 0.5rem">Free shipping over $899</p>

      <div id="paymentMethods">
        <img id="master" src="/imgs/master.png" />
        <img id="visa" src="/imgs/visa.png" />
        <img id="swish" src="/imgs/swish.png" />
      </div>
      <div id="description">
        <h3>Description</h3>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/Store/store.js'
const cartStore = useStore()
const product = ref('')

const route = useRoute()

onMounted(async () => {
  await fetchData()
})

async function fetchData() {
  const productId = route.params.productId
  const products = await fetch('/products.json').then((res) => res.json())
  product.value = products.find((p) => p.id === parseInt(productId))
}

function addToCart(product) {
  cartStore.addToCart(product)
}
</script>
<style scoped>
#product-container {
  font-family: 'Roboto Condensed', sans-serif;
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: rgb(255, 255, 255);
}
#productImg {
  margin: 0.5rem;
}
#productImg img {
  width: 100%;
  border-radius: 6px;
}
h3 {
  font-size: larger;
}
#price {
  float: right;
  font-weight: 600;
  font-size: large;
}
#brand-rating {
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  align-items: center;
}
#brand-rating h4 {
  font-size: 1.4rem;
}
#brand-rating p {
  font-size: 20px;
}
#brand-rating span {
  color: goldenrod;
  font-size: larger;
}
.colors {
  margin: 1rem 0 0.6rem 0;
}
.colors button {
  border-radius: 50%;
  height: 12px;
  width: 12px;
  border: none;
  margin: 0 0 0 0.5rem;
  cursor: pointer;
}
.colors button:hover {
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.329);
  transform: translateY(-2px);
}
#cartButton {
  display: flex;
  justify-content: center;
}
#cartButton button {
  font-family: 'Koulen', sans-serif;
  letter-spacing: 0.05rem;
  padding: 0.3rem 2.5rem 0.2rem 2.5rem;
  margin: 0.5rem 0.5rem 1.5rem 0.5rem;
  border: none;
  background-color: rgb(206, 168, 102);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.329);
  border-radius: 6px;
  font-size: 1.2rem;
  transition: 0.2s;
  cursor: pointer;
}
#cartButton button:hover {
  background-color: rgb(206, 168, 102);
  color: rgb(0, 0, 0);
  transform: translateY(-2px);
}
#cartButton button:active {
  background-color: #376e39;
  color: white;
  box-shadow: 0 5px 5px #acababa5;
  transform: translateY(3px);
}
#paymentMethods {
  display: flex;
  align-items: center;
  height: 3.5rem;
  margin-top: 0.5rem;
  overflow: hidden;
}

#master {
  width: 3rem;
}
#visa {
  width: 3rem;
  margin-left: 0.5rem;
}
#swish {
  width: 6rem;
  object-fit: cover;
}
#inStore {
  height: 10px;
  width: 10px;
  background-color: #00d627;
  border-radius: 50%;
  display: inline-block;
  margin-top: 1.5rem;
}
#description h3 {
  padding: 1rem 0 1rem 0;
}
#description p {
  font-size: 18px;
}

@media (min-width: 760px) {
  #product-container {
    display: flex;
    gap: 1rem;
    width: 80%;
    margin: auto;
    justify-content: center;
  }
  #productImg img {
    border-radius: 6px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.364);
  }
  #productImg {
    width: 50%;
    padding: 1rem;
  }
  #info-wrapper {
    width: 50%;
    margin: 0.5rem;
    padding-top: 1.5rem;
  }

  #brand-rating h4 {
    font-size: 200%;
  }
  h3 {
    padding-top: 1rem;
    font-size: 150%;
  }

  #description p {
    font-size: 16px;
  }
  #description h3 {
    font-size: 140%;
  }
  #price {
    float: left;
    margin-top: 1rem;
    font-size: 150%;
  }

  .colors {
    margin-top: 3rem;
    padding: 0.2rem;
    justify-content: left;
  }
  .colors button {
    height: 14px;
    width: 14px;
  }
  #cartButton {
    justify-content: right;
  }
}
</style>
