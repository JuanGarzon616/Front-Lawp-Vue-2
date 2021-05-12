import axios from "axios"

export default {
    namespaced: true,
    state: {
        UrlUserRegister: 'http://127.0.0.1:8000/api/user/register',
        UrlUser: 'http://127.0.0.1:8000/api/user',
        User: ''

    },
    mutations: {

    },
    actions: {
        async saveUser({commit, state}){
            const response = await axios.post(`${state.UrlUserRegister}`,)
        }

    },
    getters: {

    }
}