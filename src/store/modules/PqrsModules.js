import axios from "axios";

export default {
    namespaced: true,
    state: {
        PqrUrl: 'http://127.0.0.1:8000/api/pqr/user',
        pqrs: [],
        responses: [],
        attchments: [],
    },
    mutations: {
        setPqrs: (state, pqrs)=>(state.pqrs = pqrs),
    },
    actions: {
        getPqrUser({state, commit}) {
            axios.get(`${state.PqrUrl}/${JSON.parse(localStorage.getItem('user')).id}`, {
                'headers': {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                }
            }).then(response => {
                console.log(response)
                commit('setPqrs',response.data)
            }).catch(error => {
                console.log(error)
            })
        }
    },
    getters: {
        pqrsUser: (state) => state.pqrs,
    },
}