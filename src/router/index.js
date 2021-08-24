import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/books',
    name: 'Book',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Book.vue')
  },
  {
    path: '/authors',
    name: 'Author',
    component: () => import('../views/Author.vue')
  },
  {
    path: '/topics',
    name: 'Topic',
    component: () => import('../views/Topic.vue')
  },
  {
    path: '/storages',
    name: 'Storage',
    component: () => import('../views/Storage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
