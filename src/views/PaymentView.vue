<script setup>
import PaymentMethods from '@/components/PaymentMethods.vue';
import BreadCrumbs from '@/components/BreadCrumb.vue'
</script>

<template>
    <!-- Breadcrumbs for user availability -->
    <BreadCrumbs :crumbs="breadcrumbs"/>
    <div class="container">
        <h3>Choose payment method</h3>

        <div class="paymentMethods">
            <!-- Payment methods component -->
            <PaymentMethods />
        </div>
    </div>
</template>

<script>
export default {

  data() {
    return {
      breadcrumbs: [
        { label: 'Home', path: '/' }, // home link
        { label: '/Cart', path: '/cart' }, // add category link (if there is any)
        { label: '/Payment', path: '/payment' } // Add current page
      ]
    };
  }
};
</script>

<style scoped>
.container {
    margin: 0 auto;
    width: 95%;
    font-family: "Kulim Park", sans-serif;
    font-weight: 400;
    font-style: normal;
}



</style>
