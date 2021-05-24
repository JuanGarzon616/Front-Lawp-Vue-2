import axios from "axios"
import Swal from "sweetalert2"
//import router from "@/router";

export default {
    namespaced: true,
    state: {
        urldepartament: 'http://127.0.0.1:8000/api/departament',
        urleconomic: 'http://127.0.0.1:8000/api/economicsectors/',
        userAuth: 'http://127.0.0.1:8000/api/user/login',
        departaments: [],
        municipalities: [],
        economic: []
    },
    mutations: {
        setDepartaments: (state, departaments) => (state.departaments = departaments),
        setMunicipalities: (state, municipalities) => (state.municipalities = municipalities),
        setEconomic: (state, economi) => (state.economic = economi),
    },
    actions: {
        async getDepartaments({state, commit}) {
            const response = await axios.get(`${state.urldepartament}`)
            commit('setDepartaments', response.data)
        },
        async getMunicipalities({state, commit},id){
            const response = await axios.get(`${state.urldepartament}/${id}`)
            commit('setMunicipalities',response.data)
        },
        async getEconomic({state, commit}){
            const response = await axios.get(`${state.urleconomic}`)
            commit('setEconomic', response.data)
        },
        async auth({state,dispatch},data){
            return await axios.post(`${state.userAuth}`,data)
                .then(response=>{
                    localStorage.clear()
                    localStorage.setItem('token',JSON.stringify(response.data.token))
                    console.log(response)
                    dispatch('a/getUser','',{root:true})
                }).catch(error=>{
                    console.log(error.response)
                    Swal.fire('Error','Credenciales invalidas revisa.','error')
                })
        }
    },
    getters: {
        allDepartaments: (state) => state.departaments,
        allMunicipalities: (state) => state.municipalities,
        allEconomic: (state) => state.economic,
    }
}