import axios from "axios"
import router from "@/router";
import Swal from "sweetalert2";

export default {
    namespaced: true,
    state: {
        UrlUserRegister: 'http://127.0.0.1:8000/api/user/register',
        UrlUser: 'http://127.0.0.1:8000/api/user',
        User: '',
        config: {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
            }
        }
    },
    mutations: {},
    actions: {
        saveUser({state}, userData) {
            return axios.post(`${state.UrlUserRegister}`, userData)
        },
        getUser({state}) {
            axios.get(`${state.UrlUser}`, {
                'headers': {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                }
            }).then(response => {
                console.log(response)
                localStorage.removeItem('user')
                localStorage.setItem('user', JSON.stringify(response.data.user))
                let rol = response.data.user.is_admin
                if (rol === 3) {
                    router.push({name: 'ulogin'})
                } else if (rol === 2) {
                    router.push({name: 'BusinessLogin'})
                } else if (rol === 1) {
                    router.push({name: 'AdminLogin'})
                } else {
                    router.push({name: 'Home'})
                }
            }).catch(function (error) {
                console.log(error)
            })
        },
        updateUser({state, dispatch}, data) {
            console.log(data)
            axios.post(`${state.UrlUser}`, data, {
                'headers': {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                    'Content-Type': 'multipart/form-data',
                }
            }).then(response => {
                if (response.data.status === 'Token is Expired') {
                    localStorage.clear()
                    Swal.fire('', 'Su sesion ha cadudaco.', 'info')
                    router.push('/')
                } else if (response.data.msg) {
                    Swal.fire('', 'Sus datos han sido actualizado.', 'success')
                    dispatch('a/getUser', '', {root: true})
                }
                console.log(response)
            }).catch(error => {
                Swal.fire('Error', 'A ocurrido un error con los datos ingresados.', 'error')
                console.log(error.response)
            })
        }
    },
    getters: {}
}