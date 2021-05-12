import axios from "axios"

export default {
    namespaced: true,
    state: {
        UrlUserRegister: 'http://127.0.0.1:8000/api/user/register',
        UrlUser: 'http://127.0.0.1:8000/api/user',
        User: '',
        token: JSON.parse(localStorage.getItem("token")),
        /*config: {
            headers: {
                "Authorization": `Bearer ${context.rootState.instance.token}`,
            }
        }*/

    },
    mutations: {

    },
    actions: {
        async saveUser({state},userData){
            await axios.post(`${state.UrlUserRegister}`,userData)
        }

    },
    getters: {

    }
}