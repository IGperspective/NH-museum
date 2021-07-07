import Vue from 'vue'
import VueRouter from 'vue-router'
import Space from '../views/SpacePage.vue'

Vue.use(VueRouter)


//could use Vue-Mete for updating meta tags for each page

const routes = [
  {
    path: '/',
    alias: "/space",
    name: 'Space',
    component: Space
  },
  {
    path: '/dinosaur',
    name: 'Dinosaur',
    component: () => import('../views/DinosaurPage.vue'),
  },
  {
    path: '/ocean',
    name: 'Ocean',
    component: () => import('../views/OceanPage.vue')
  },
  {
    path: '/wildlife',
    name: 'Wildlife',
    component: () => import('../views/WildlifePage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
