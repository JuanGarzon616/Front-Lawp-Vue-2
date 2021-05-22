import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store/index'

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
      if (to.name !== 'Home' && !store.getters.uToken) {
        //next({name: 'Home'})
        router.push({name: 'Home'})
      }
      else if (JSON.parse(JSON.stringify(store.getters.rol)).is_admin === null) {
        next()
        //next({name: 'Home'})
      }
      else {
        router.push({name: 'Home'})
        // next()
      }
    }
  },{
    path: '/businessregister',
    name: 'BusinessRegister',
    component: () => import('@/views/layouts/business/BusinessRegister'),
    beforeEnter: (to, from, next) => {
      if (to.name !== 'Home' && !store.getters.uToken) {
        router.push({name: 'Home'})
        //next({name: 'Home'})
      }
      else if (store.getters.rol) {
        router.push({name: 'Home'})
        //next({name: 'Home'})
      }
      else {
        next()
      }
    }
  },{
    path: '/BusinessLogin',
    name: 'BusinessLogin',
    component: () => import('@/views/layouts/business/BusinessLogin'),
    beforeEnter: (to, from, next) => {
      if (to.name !== 'Home' && !store.getters.uToken) {
        router.push({name: 'Home'})
        //next({name: 'Home'})
      }
      //else if (store.getters.rol !== 2) next({ name: 'Home' })
      else if(store.getters.rol === 2) {
        next()
      }
      else {
        router.push({name: 'Home'})
        //next({name: 'Home'})
      }
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
