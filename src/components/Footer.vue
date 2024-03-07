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
  /* height: 20vh; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Kulim Park', sans-serif;
  font-weight: 400;
  font-style: normal;
  padding: 2rem 0 0 0.6rem;
  letter-spacing: 1px;
  font-size: 14px;
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
  font-size: medium;
}
.col ul li {
  margin: 0.5rem;
}
.col ul li a:hover {
  color: #d9a87e;
}

img {
  margin-right: 10px;
  width: 60px;
}
.swish {
  width: 100px;
}

#wallet {
  width: 23px;
}
#master {
  margin-left: 40px;
}

/* Media-queries desktop */
@media only screen and (min-width: 992px) {
  /*  .footer {
    height: 15vh;
  } */
}
</style>
