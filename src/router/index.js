import Vue from 'vue'
import VueRouter from 'vue-router'
import Delivery from '@/views/Delivery.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/delivery',
    name: 'Delivery',
    component: Delivery,
    meta: { title: 'Delivery - Jakmall'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
