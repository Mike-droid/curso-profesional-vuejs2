import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/SearchV.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutV.vue')
  },
  {
    path: '/pokemon/:id',
    name: 'Pokemon',
    component: () => import('@/views/PokemonDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
