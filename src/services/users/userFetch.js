import axios from "axios";

//variable
const apiUserRegister = 'http://127.0.0.1:8000/api/user/register'
const apiUser = 'http://127.0.0.1:8000/api/user'
//let userToken = localStorage.getItem("token")
let token = JSON.parse(localStorage.getItem("token"))


let registerUser = (datauser) =>{
    //console.log(datauser)
    return axios.post(`${apiUserRegister}`,datauser)
}

let config = {
    headers: {
        "Authorization": `Bearer ${token}`,
    }
}


let getUser = () =>{
    console.log('token: '+token)
    return axios.get(`${apiUser}`,config)
}

export {
    registerUser,
    getUser
}