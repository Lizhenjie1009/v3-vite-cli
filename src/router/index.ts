import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
const Draw = () => import('../views/Draw.vue')
const Detail = () => import('../views/Detail.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/draw',
      name: 'draw',
      component: Draw
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})

export default router
