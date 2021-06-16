import axios from "axios";
import Swal from "sweetalert2";
import router from "@/router";

export default {
    namespaced: true,
    state: {
        PqrUrl: 'http://127.0.0.1:8000/api/pqr/user',
        PqrUrlAffair: 'http://127.0.0.1:8000/api/pqr/affair/',
        pqrSave: 'http://127.0.0.1:8000/api/pqr',
        pqrs: [],
        responses: [],
        attchments: [],
    },
    mutations: {
        setPqrs: (state, pqrs) => (state.pqrs = pqrs),
    },
    actions: {
        getPqrUser({state, commit}) {
            axios.get(`${state.PqrUrl}/${JSON.parse(localStorage.getItem('user')).id}`, {
                'headers': {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                }
            }).then(response => {
                console.log(response)
                if (response.data.status === 'Token is Expired') {
                    localStorage.clear()
                    Swal.fire('', 'Su sesion ha cadudaco.', 'info')
                    router.push('/')
                }
                commit('setPqrs', response.data)
            }).catch(error => {
                console.log(error)
            })
        },
        getPqrUserAffair({state, commit}, valor) {
            console.log(valor)
            axios.post(`${state.PqrUrlAffair}`, valor, {
                'headers': {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                }
            }).then(response => {
                commit('setPqrs', response.data)
                console.log(response)
            }).catch((error => {
                console.log(error)
            }))
        },
        savePqrs({state}, pqr) {

            console.log(pqr)
            //console.log(state.pqrSave)
            axios.post(`${state.pqrSave}`, pqr, {
                'headers': {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                    "Content-Type": "multipart/form-data",
                }
            }).then(response => {
                //commit('setPqrs', response.data)
                console.log(response.data)
            }).catch((error => {
                console.log(error.response)
            }))
        }
    },
    getters: {
        pqrsUser: (state) => state.pqrs,
    },
}