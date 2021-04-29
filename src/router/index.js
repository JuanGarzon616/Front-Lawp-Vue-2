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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/useregister',
    name: 'UserRegister',
    component: () => import('../views/layouts/users/UserRegister.vue')
  },
  {
    path: '/userlogin',
    name: 'ulogin',
    component: () => import('../views/layouts/users/ulogin')
  },{
    path: '/businessregister',
    name: 'BusinessRegister',
    component: () => import('@/views/layouts/business/BusinessRegister'),
  },{
    path: '/BusinessLogin',
    name: 'BusinessLogin',
    component: () => import('@/views/layouts/business/BusinessLogin'),
    beforeEnter: (to, from, next) => {
      if (to.name !== 'Home' && !isAuthenticated) next({ name: 'Home' })
      else next()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
