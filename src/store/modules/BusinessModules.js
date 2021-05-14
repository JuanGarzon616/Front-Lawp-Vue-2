import axios from "axios"
import Swal from "sweetalert2";

/*const headers = {
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
}*/

export default {
    namespaced: true,
    state: {
        UrlBusinessRegister: 'http://127.0.0.1:8000/api/business/register',
        headers: {
            //'Content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        }
    },
    mutations: {

    },
    actions: {
        saveBusiness({state/*, rootState*/},BusinessData){
            console.log(BusinessData)
            /*return axios.request({
                method: 'POST',
                url: `${state.UrlBusinessRegister}`,
                /*headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                },
                data: {BusinessData
                    /*nit: BusinessData.nit,
                    esector: BusinessData.esector,
                    bussiness_name: BusinessData.business_name,
                    legal_name: BusinessData.legal_name,
                    tellephone1: BusinessData.tellephone1,
                    tellephone2: BusinessData.tellephone2,
                    mail: BusinessData.mail,
                    cdate: BusinessData.cdate,
                    fk_municipality_id: BusinessData.fk_municipality_id,
                    id: BusinessData.id
                },

            })*/
            axios.post(`${state.UrlBusinessRegister}`,BusinessData, {'headers': {
                    //'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                }}).then(response=>{
                console.log(response)
                //localStorage.setItem('business', JSON.stringify(response.data.business))
                /*getUser().then(response=>{
                  console.log(response)
                  localStorage.removeItem('user')
                  localStorage.setItem('user', JSON.stringify(response.data.user))
                }).catch(function (error){console.log(error)})*/

                if(response.status===201){
                    Swal.fire("Empresa creada","usuario creado satisfactoriamente","success")
                }else {
                    console.log("algo paso")
                }

                console.log(response)
                //router.push('/BusinessLogin')
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