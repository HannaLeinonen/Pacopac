<script setup>
import PaymentMethods from '@/components/PaymentMethods.vue';
</script>

<template>
    <div class="linkBreadcrumb">
        <a href="/">home</a>
        <a href="/cart">/cart</a>
        <a href="/payment"><strong>/payment</strong></a>
    </div>
    <div class="container">
        <h3>Choose payment method</h3>

        <div class="paymentMethods">
            <!-- Payment methods component -->
            <PaymentMethods />
        </div>
    </div>
</template>

<style scoped>
.container {
    margin: 0 auto;
    width: max-content;
}

.linkBreadcrumb {
    margin-left: 0.3rem;
}

a {
  text-decoration: none;
  color: black;
}

</style>
