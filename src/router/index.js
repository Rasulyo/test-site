import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '@/views/NotFound'
import About from '@/views/About'
import Special from '@/views/Special'
import Tours from '@/views/Tours'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
 {
   path: '/special',
   name: 'Special',
   component: Special
 },
 {
  path: '/tours',
  name: 'Tours',
  component: Tours
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'active',
})

export default router
