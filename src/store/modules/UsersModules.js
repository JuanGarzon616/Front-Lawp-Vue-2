import axios from "axios"
import router from "@/router";

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
            }})
            .then(response=>{
                console.log(response)
                localStorage.removeItem('user')
                localStorage.setItem('user', JSON.stringify(response.data.user))
                let rol = response.data.user.is_admin
                if(rol===3){
                    router.push({name: 'ulogin'})
                }else if(rol===2){
                    router.push({name: 'BusinessLogin'})
                }else if(rol===1){
                    router.push({name: 'AdminLogin'})
                }else{
                    router.push({name: 'Home'})
                }
            }).catch(function (error){
                console.log(error)
            })
        }
    },
    getters: {

    }
}