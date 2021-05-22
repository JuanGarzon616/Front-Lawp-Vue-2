import axios from "axios"
import Swal from "sweetalert2"
import router from "@/router"

export default {
    namespaced: true,
    state: {
        UrlBusinessRegister: 'http://127.0.0.1:8000/api/business/register',
    },
    mutations: {

    },
    actions: {
        saveBusiness({state,dispatch/*, rootState*/},BusinessData){
            console.log(BusinessData)
            axios.post(`${state.UrlBusinessRegister}`,BusinessData, {'headers': {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                }}).then(response=>{
                console.log(response)
                dispatch('a/getUser', '', { root: true })
                if(response.status===201){
                    Swal.fire("Empresa creada","usuario creado satisfactoriamente","success")
                }else {
                    console.log("algo paso")
                }

                console.log(response)
                router.push('/BusinessLogin')
            }).catch(error=>{
                console.log(error.response)
                if(error.response.data.messages.mail && error.response.data.messages.nit){
                  Swal.fire("Error",'Email y Numero de identificacion ya tomados.','error');
                }else if(error.response.data.messages.nit){
                  Swal.fire("Error",'Numero de identificacion ya tomado.','error');
                }else if(error.response.data.messages.mail){
                  Swal.fire("Error",'Correo  ya tomado.','error');
                }else if(error.response.status===422){
                  Swal.fire("Error",'A ocurrido un error revisa los datos.','error');
                }
            })
        },
    },
    getters: {

    }
}