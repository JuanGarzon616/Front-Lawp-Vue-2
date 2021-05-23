import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import store from '@/store/index'

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
    component: () => import('../views/layouts/users/ulogin'),
    beforeEnter: (to, from, next) => {
      let token = localStorage.getItem('token')
      let user = localStorage.getItem('user')
      if (!token && JSON.parse(user).is_admin !==3) next({name: 'Home'})
      else next()
    }
  },{
    path: '/businessregister',
    name: 'BusinessRegister',
    component: () => import('@/views/layouts/business/BusinessRegister'),
    beforeEnter: (to, from, next) => {
      let token = localStorage.getItem('token')
      let user = localStorage.getItem('user')
      if (!token && JSON.parse(user).is_admin !==3) next({name: 'Home'})
      else next()
    }
  },{
    path: '/BusinessLogin',
    name: 'BusinessLogin',
    component: () => import('@/views/layouts/business/BusinessLogin'),
    beforeEnter: (to, from, next) => {
      let token = localStorage.getItem('token')
      let user = localStorage.getItem('user')
      if (!token && JSON.parse(user).is_admin !==2) next({name: 'Home'})
      else next()
    }
  },{
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
