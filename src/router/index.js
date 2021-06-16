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
            if (user) var rol = JSON.parse(user).is_admin
            if (token && rol === 3) next()
            else next({name: 'Home'})
        }
    },
    {
        path: '/crearpqr',
        name: 'createpqr',
        component: () => import('../views/layouts/users/createpqr'),
        beforeEnter: (to, from, next) => {
            let token = localStorage.getItem('token')
            let user = localStorage.getItem('user')
            if (user) var rol = JSON.parse(user).is_admin
            if (token && rol === 3) next()
            else next({name: 'Home'})
        }
    },
    {
        path: '/pqrusuario/:id',
        name: 'pqruser',
        component: () => import('../views/layouts/users/pqruser'),
        beforeEnter: (to, from, next) => {
            let token = localStorage.getItem('token')
            let user = localStorage.getItem('user')
            if (user) var rol = JSON.parse(user).is_admin
            if (token && rol === 3) next()
            else next({name: 'Home'})
        }
    }, {
        path: '/businessregister',
        name: 'BusinessRegister',
        component: () => import('@/views/layouts/business/BusinessRegister'),
        beforeEnter: (to, from, next) => {
            let token = localStorage.getItem('token')
            let user = localStorage.getItem('user')
            if (user) var rol = JSON.parse(user).is_admin
            if (token && rol === 3) next()
            else next({name: 'Home'})
        }
    }, {
        path: '/BusinessLogin',
        name: 'BusinessLogin',
        component: () => import('@/views/layouts/business/BusinessLogin'),
        beforeEnter: (to, from, next) => {
            let token = localStorage.getItem('token')
            let user = localStorage.getItem('user')
            if (user) var rol = JSON.parse(user).is_admin
            if (token && rol === 2) next()
            else next({name: 'Home'})
        }
    }, {
        path: '/AdminLogin',
        name: 'AdminLogin',
        component: () => import('@/views/layouts/admin/AdminLogin'),
        beforeEnter: (to, from, next) => {
            let token = localStorage.getItem('token')
            let user = localStorage.getItem('user')
            if (user) var rol = JSON.parse(user).is_admin
            if (token && rol === 1) next()
            else next({name: 'Home'})
        }
    }, {
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
