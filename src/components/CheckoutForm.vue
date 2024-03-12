<template>
  <div class="formWrapper">
    <form @submit.prevent="proceedToPayment"> <!-- On submit and valid form inputs, call proceedToPayment function -->
      <div>
        <label for="firstName">First name*</label>
        <input
          required
          v-model="formData.firstName"
          type="text"
          id="firstName"
          name="firstName"
          enterkeyhint="next"
        />
      </div>
      <div>
        <label for="lastName">Last name*</label>
        <input
          required
          v-model="formData.lastName"
          type="text"
          id="lastName"
          name="lastName"
          enterkeyhint="next"
        />
      </div>
      <div>
        <label for="email">Email*</label>
        <input
          required
          v-model="formData.email"
          type="email"
          id="email"
          name="email"
          enterkeyhint="next"
        />
      </div>
      <div>
        <label for="phoneNumber">Phone number*</label>
        <input
          required
          v-model="formData.phoneNumber"
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          enterkeyhint="next"
        />
      </div>
      <div>
        <label for="address">Delivery address*</label>
        <input
          required
          v-model="formData.address"
          type="text"
          id="address"
          name="address"
          enterkeyhint="next"
        />
      </div>
      <button type="submit">PROCEED TO PAYMENT</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: ''
      }
    }
  },
  methods: {
    // If form is valid, send emit to parent "PaymentView" 
    proceedToPayment() {
      if (this.isFormValid()) {
        this.$emit('goToPayment')
      }
    },
    // Controlling if the form is correctly filled according to "required" attribut on inputs
    isFormValid() {
      const { firstName, lastName, email, phoneNumber, address } = this.formData

      return firstName && lastName && email && phoneNumber && address
    }
  }
}
</script>

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
  border: 2px solid lightgray;
  width: 100%;
  height: 1.7rem;
  border-radius: 5px;
  -webkit-transition: 0.7s;
  transition: 0.7s;
  outline: none;
}
input:focus {
  border: 2px solid gray;
}
label {
  display: block;
  font-size: 1.2rem;
  margin-top: 1rem;
}
</style>
