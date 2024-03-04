<template>
  <div class="paymentContainer">
    <label class="payments">
      Card
      <input type="radio" />
      <span class="checkmark"></span>
    </label>
    <label class="payments">
      Swish
      <input type="radio" />
      <span class="checkmark"></span>
    </label>
    <label class="payments">
      Klarna
      <input type="radio" />
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<style scoped>
.paymentContainer{
    margin: 0 auto;
    width: 85%;
    background-color: white;
    border: 1px solid lightslategray;
}
.payments {
  display: block;
  position: relative;

  padding: 0.5rem;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  border-bottom: 1px solid lightslategray;
}

.payments input:checked ~ .checkmark {
    background-color: white;

}
/* Make a custom checkbox */
.checkmark {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    background-color: white;
    height: 10px;
    width: 10px;
    border: 1px solid lightslategray;
    border-radius: 50%;

}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.container input:checked ~ .checkmark:after {
  display: block;
}
.container .checkmark:after {
 	top: 1px;
	left: 1px;
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: black;
}
/* Hide the browser's default checkbox */
.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}
</style>
