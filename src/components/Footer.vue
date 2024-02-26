<script>
export default {
  name: 'FooterComponent'
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <!-- Help and contact column -->
        <div class="col">
          <h3><img id="wallet" src="/imgs/question.png" alt="" />Help and contact</h3>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/faq">Returns</a></li>
            <li><a href="/faq">Orders</a></li>
          </ul>
        </div>
        <!-- Payment options column -->
        <div class="col">
          <h3><img id="wallet" src="/imgs/wallet.png" alt="" />Payment options</h3>
          <div class="payment-methods">
            <img src="/imgs/visa.png" alt="Visa" />
            <img class="swish" src="/imgs/swish.png" alt="Swish" />
            <img id="master" src="/imgs/master.png" alt="MasterCard" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #152618;
  color: #ffefe0;
  max-height: 200px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  margin: 0;
  padding: 0 15px;
}

.row {
  display: flex;
}

.col {
  flex: 1;
}

.col ul {
  list-style: none;
}

.col ul li a {
  color: #ffefe0;
  text-decoration: none;
  font-size: larger;
  transition: ease 0.5s;
}

.col ul li a:hover {
  color: #d9a87e;
}

h3 {
  font-size: larger;
}

img {
  margin-right: 10px;
  width: 60px;
}
.swish {
  width: 100px;
}

#wallet {
  width: 30px;
}
</style>
