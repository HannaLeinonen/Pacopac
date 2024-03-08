<template>
    <div class="cartItems">
        <div class="item">
            <img class="cardImg" src="/backpackImg/nikeL.webp" /> <!-- Product image {{ item.imgUrl }}-->
            <div class="itemInfo">
                <h4>Nike backpack <!-- {{ item.brand }} --></h4>
                <p>Size: Large<!-- {{ item.size }} --></p>
                <p>Qty: 1<!-- {{ item.quantity }} --></p>
            </div>
            <p id="itemPrice">$139</p>
        </div>
        <div class="item">
            <img class="cardImg" src="/backpackImg/fjallravenM.webp" /> <!-- :src"item.imgUrl"-->
            <div class="itemInfo">
                <h4>Fjällräven backpack <!-- {{ item.brand }} --></h4>
                <p>Size: Medium<!-- {{ item.size }} --></p>
                <p>Qty: 1<!-- {{ item.quantity }} --></p>
            </div>
            <p id="itemPrice">$139</p>
        </div>
        <div class="itemPriceSum">
            <h3>SUD TOTAL</h3>
            <h3>$338</h3>
        </div>
    </div>
</template>

<style>
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
}
.itemPriceSum {
    display: flex;
    justify-content: space-between;
    padding-right: 0.3rem;
}
</style>
