import axios from "axios";

//variable
const apiUserRegister = 'http://127.0.0.1:8000/api/user/register'
const apiUser = 'http://127.0.0.1:8000/api/user'
let userToken = JSON.parse(localStorage.getItem("token"))
// let config = {
//     Header: {
//         "Authorization": `Bearer ${userToken}`,
//     }
// }

// peticiones

let registerUser = (datauser) =>{
    console.log(datauser)
    return axios.post(`${apiUserRegister}`,datauser)
}
let getUser = () =>{
    return axios.get(`${apiUser}`, { headers: {"Authorization" : `Bearer ${userToken}`} })
}
export {
    registerUser,
    getUser
}