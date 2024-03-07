<template>
  <div class="faq-wrapper">
    <div class="faq-container">
      <h1>FAQ</h1>
    </div>
    <div class="faq-container">
      <div class="faq-content">
        <div class="question" v-for="item in faqItems" :key="item.question">
          <h2>{{ item.question }}</h2>
          <p>{{ item.answer }}</p>
        </div>
      </div>
    </div>
    <div class="faq-container">
      <div class="contact-info">
        <h1>CONTACT INFORMATION</h1>
        <p><strong>Email:</strong> pacpoc@pacpoc.com</p>
        <p><strong>Live Chat:</strong> 10 - 17 Mon - Fri</p>
        <p><strong>Telephone Number:</strong> +460101133</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqContactInfo',
  data() {
    return {
      faqItems: [
        {
          question: 'How can I contact customer service?',
          answer:
            'You can reach our customer service team by email at pacpoc@pacpoc.com, or by phone at +46070707070 during business hours.'
        },
        {
          question: 'What is your return policy?',
          answer:
            'We accept returns within 30 days of purchase, provided the item is in its original condition. Contact customer service for more details.'
        },
        {
          question: 'Do you offer international shipping?',
          answer:
            'Yes, we do offer international shipping. Shipping times and costs vary depending on the destination. Please check our shipping page for more information.'
        },
        {
          question: 'How can I track my order?',
          answer:
            'Once your order is shipped, we will send you a tracking number via email. You can use this number to track your order on our carriers website.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.faq-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Kulim Park', sans-serif;
  font-weight: 400;
  font-style: normal;
}
.faq-container {
  background-color: #d9a87e;
  width: 320px;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 15px;
  text-align: center;
  margin: 20px;
}

.faq-content h2 {
  font-size: 25px;
  margin-bottom: 0.5rem;
}

.faq-content p {
  font-size: 15px;
  margin-bottom: 1.5rem;
}

.contact-info p {
  font-size: 15px;
  line-height: 1.4;
}
</style>
