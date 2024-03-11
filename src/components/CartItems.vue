
<template>
    <div class="cartItems">
        <div class="item">
            <img class="cardImg" :src="imgUrl" />
            <div class="itemInfo">
                <h4>{{ brand }}</h4>
                <p>Size: {{ size }}</p>
                <div class="selectContainer">
                    <label for="quantity">Qty:</label>
                    <select id="selectQuantity"       v-model="selectedQuantity">
                        <option
                        v-for="quantity in maxQuantity" :key="quantity"
                        :value="quantity" >{{ quantity }}
                        </option>
                    </select>
                </div>
            </div>
            <h4 class="totalPrice">${{ totalPrice.toFixed(2) }}</h4>
        </div>


    </div>
</template>

<script>
export default {
    props: {
        id: Number,
        imgUrl: String,
        brand: String,
        size: String,
        price: Number,
        quantity: Number
    },
    data() {
        return {
            selectedQuantity: this.quantity
        };
    },
    computed: {
        totalPrice() {
            return this.price * this.selectedQuantity;
        },
        maxQuantity() {
            return Array.from({ length: Math.min(this.quantity + 10, 10) }, (_, index) => index + 1);
        }
    }
}
</script>

<style>
.cartItems {
    margin-top: 1rem;
}
.item{
    display: flex;
    background-color: white;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.24);
    -webkit-box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.24);
    -moz-box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.24);
}
.item h4 {
    margin-bottom: 0.3rem;
}
.cardImg{
    width: 88px;
    margin-right: 1rem;
}
.totalPrice {
    margin: 4rem 0 0 6rem;
}
select{
    margin-left: 0.4rem;
    cursor: pointer;
}
</style>
