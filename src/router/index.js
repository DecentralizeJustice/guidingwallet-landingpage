import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Main.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pastTrivia',
    name: 'pastTrivia',
    component: () => import(/* webpackChunkName: "about" */ '../views/pastTrvia.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import(/* webpackChunkName: "about" */ '../views/faq.vue')
  },
  {
    path: '/trivia',
    name: 'trivia',
    component: () => import(/* webpackChunkName: "about" */ '../views/trivia.vue')
  },
  {
    path: '/lessons',
    name: 'lessons',
    component: () => import(/* webpackChunkName: "about" */ '../views/lessons.vue')
  },
  { path: '*', component: Home }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
