<template>
  <div class="formWrapper">
    <form>
      <div>
        <label for="firstName">First name</label>
        <input required type="text" id="firstName" name="firstName" enterkeyhint="next" />
      </div>
      <div>
        <label for="lastName">Last name</label>
        <input required type="text" id="lastName" name="lastName" enterkeyhint="next" />
      </div>
      <div>
        <label for="email">Email</label>
        <input required type="email" id="email" name="email" enterkeyhint="next" />
      </div>
      <div>
        <label for="phoneNumber">Phone number</label>
        <input required type="tel" id="phoneNumber" name="phoneNumber" enterkeyhint="next" />
      </div>
      <div>
        <label for="address">Delivery address</label>
        <input required type="text" id="address" name="address" enterkeyhint="next" />
      </div>
      <button>PROCEED TO PAYMENT</button>
    </form>
  </div>
</template>

<style scoped>
.formWrapper {
  width: 95%;
  margin: 2rem 0 2rem 0;
}
button {
  margin: 2rem 1rem 1rem 1.5rem;
  height: 43px;
  width: 280px;
  background-color: #d9a87e;
  border: none;
  border-radius: 5px;
  font-family: 'Koulen', sans-serif;
  font-size: 22px;
  cursor: pointer;
}
input {
  border: 1px solid lightgray;
  width: 100%;
  height: 1.7rem;
  border-radius: 5px;
}
label {
  display: block;
  font-size: 1.2rem;
  margin-top: 1rem;
}
</style>
