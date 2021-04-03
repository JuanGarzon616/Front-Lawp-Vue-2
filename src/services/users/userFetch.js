import axios from "axios";

const apiUserRegister = 'http://127.0.0.1:8000/api/user';
const emailVerification = 'http://127.0.0.1:8000/api/user/email'


let registerUser = (datauser) =>{
    console.log(datauser)
    return axios.post(`${apiUserRegister}`,datauser)
}
let ifEmail = (email) =>{
    return axios.get(`${emailVerification}`,email)
}
let ifDoc = (doc)=>{
    console.log(doc)
    return axios.get(`${apiUserRegister}/`,doc)
}

export {
    registerUser,
    ifEmail,
    ifDoc
}