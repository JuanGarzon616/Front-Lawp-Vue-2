import axios from "axios"

export default {
    namespaced: true,
    state: {
        urldepartament: 'http://127.0.0.1:8000/api/departament',
        urleconomic: 'http://127.0.0.1:8000/api/economicsectors/',
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
        }

    },
    getters: {
        allDepartaments: (state) => state.departaments,
        allMunicipalities: (state) => state.municipalities,
        allEconomic: (state) => state.economic,
    }
}