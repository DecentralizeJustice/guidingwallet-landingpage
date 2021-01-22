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
    component: () => import('../views/pastTrvia.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../views/faq.vue')
  },
  {
    path: '/triviaInfo',
    name: 'trivia',
    component: () => import('../views/trivia.vue')
  },
  {
    path: '/lessons',
    name: 'lessons',
    component: () => import('../views/lessons.vue')
  },
  {
    path: '/lessons/:lesson',
    name: 'specificLesson',
    component: () => import('../views/lessons.vue'),
    props: true
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/blog.vue')
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
