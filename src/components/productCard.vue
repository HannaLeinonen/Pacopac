<template>
  <div class="product-card" @click="goToProduct()">
    <img class="card-img" :src="imgUrl" />
    <div class="title">
      <h4>{{ brand }}</h4>
      <p><span style="color: goldenrod">&#9733;</span>{{ rating }}</p>
    </div>

    <p id="size">Size: {{ size }}</p>

    <div class="card-text">
      <p>${{ price }}</p>
      <button>+</button>
    </div>
    <div class="colors">
      <button style="background-color: rgb(178, 151, 0)"></button>
      <button style="background-color: rgb(248, 206, 176)"></button>
      <button style="background-color: rgb(87, 0, 0)"></button>
      <button style="background-color: rgb(0, 0, 0)"></button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: Number,
    imgUrl: String,
    brand: String,
    rating: Number,
    size: String,
    price: Number
  },
  methods: {
    goToProduct() {
      if (this.id) {
        this.$router.push({ name: 'product', params: { productId: this.id } })
      }
    }
  }
}
</script>
<style scoped>
.product-card {
  font-family: 'Roboto Condensed', sans-serif;
  width: 45%;
  padding: 0 0 0.5rem 0;
  border-radius: 6px;
  margin: 0.5rem;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.364);
  height: auto;
  background-color: white;
}
#logo img {
  height: 2rem;
  width: 4rem;
  object-fit: contain;
  margin-left: 0.5rem;
}
.card-img {
  max-width: 100%;
}
#size {
  font-size: small;
  padding-left: 0.5rem;
  margin: 0;
}
.colors button {
  border-radius: 50%;
  height: 12px;
  width: 12px;
  border: none;
  margin: 0 0 0 0.5rem;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
}
.title p {
  font-weight: 500;
}
.product-card h4 {
  font-size: 1.1rem;
  margin: 0.5rem 0 0.2rem 0.5rem;
}

.card-text button {
  background-color: black;
  color: white;
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  margin: 0.5rem 1rem 0 0;
  cursor: pointer;
}
.card-text button:active {
  background-color: rgb(223, 223, 223);
  color: black;
}
.card-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.5rem;
  font-weight: 500;
}
@media (min-width: 760px) {
  .product-card {
    width: 30%;
  }
  .title h4 {
    font-size: 150%;
  }
  .title p,
  span {
    font-size: 130%;
  }
  #size {
    font-size: 120%;
  }
  .card-text {
    font-size: 140%;
  }
  .card-text button {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 120%;
  }
  .colors button {
    height: 15px;
    width: 15px;
  }
}
@media (min-width: 1024px) {
  .product-card {
    width: 20%;
  }
}
@media (min-width: 1500px) {
  .product-card {
    width: 15%;
  }
}
</style>
