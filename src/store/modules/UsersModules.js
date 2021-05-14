import axios from "axios"

export default {
    namespaced: true,
    state: {
        UrlUserRegister: 'http://127.0.0.1:8000/api/user/register',
        UrlUser: 'http://127.0.0.1:8000/api/user',
        User: '',
        config: {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                //'content-type': "application/application.json"
            }
        }
    },
    mutations: {

    },
    actions: {
        saveUser({state},userData){
            return axios.post(`${state.UrlUserRegister}`,userData)
        },
        getUser({state}){
            axios.get(`${state.UrlUser}`,{'headers': {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                }}).then(response=>{
                localStorage.removeItem('user')
                localStorage.setItem('user', JSON.stringify(response.data.user))
            }).catch(function (error){console.log(error)})
        }

    },
    getters: {

    }
}