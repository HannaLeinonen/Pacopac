<script setup>
import SwishIcon from '@/components/icons/SwishIcon.vue'
import MasterCardIcon from './icons/MasterCardIcon.vue';
import VisaIcon from './icons/VisaIcon.vue';
import KlarnaIcon from './icons/KlarnaIcon.vue';

</script>

<template>
  <div class="paymentContainer">
    <label class="payments">
      Card

      <VisaIcon id="visa" class="icons"/>
      <MasterCardIcon id="mastercard" class="icons"/>

      <input type="radio" name="radio"/>
      <span class="checkmark"></span>
    </label>
    <label class="payments">
      Swish
      <SwishIcon id="swish" class="icons"/>
      <input type="radio" name="radio"/>
      <span class="checkmark"></span>
    </label>
    <label class="payments">
      Klarna
      <KlarnaIcon id="klarna" class="icons" />
      <input type="radio" name="radio"/>
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
  height: 43px;
  padding: 0.5rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 18px;

}
/* Styling the first 2 elements of payments class */
.payments:nth-child(-n+2) {
    border-bottom: 1px solid lightslategray;
}
/* Make a custom radio button */
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

/* Show the indicator when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator */
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

/* Icons */
#klarna, #swish {
    margin-left: 9.6rem;
}
#visa{
    margin-left: 8.7rem;
}
#mastercard {
    margin-left: 0.3rem;
}

/* Media-queries larger desktops */
@media only screen and (min-width: 1200px) {
    /* Icons */
    #klarna, #swish {
        margin-left: 50%;
    }
    #visa{
        margin-left: 50%;
    }
    #mastercard {
        margin-left: 0.3rem;
    }
    .paymentContainer {
        width:25vw;
        margin: 0 auto;
    }
}
@media only screen and (min-width: 1550px) {
    /* Icons */
    #klarna, #swish {
        margin-left: 65%;
    }
    #visa{
        margin-left: 62%;
    }
}
</style>
