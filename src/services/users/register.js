import axios from "axios";

const apiUserRegister = "http://127.0.0.1:8000/api/user";

let registerUser = (datauser) =>{
    console.log(datauser)
    return axios.post(`${apiUserRegister}`,datauser)
}

export {
    registerUser
}