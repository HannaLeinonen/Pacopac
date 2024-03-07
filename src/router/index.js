import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BackpacksView from '../views/BackpacksView.vue'
import PaymentViewVue from '@/views/PaymentView.vue'
import ProductView from '../views/ProductView.vue'
import FaqView from '../views/AboutFaqView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/backpacks',
      name: 'backpacks',
      component: BackpacksView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: PaymentViewVue
    },
    {
      path: '/product/:productId',
      name: 'product',
      component: ProductView
    },
    {
      path: '/faq',
      name: 'faq',
      component:FaqView
    }
  ]
})

export default router
