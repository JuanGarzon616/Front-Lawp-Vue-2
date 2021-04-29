import axios from "axios";

const busineRegister = 'http://127.0.0.1:8000/api/business/register'

let token = JSON.parse(localStorage.getItem("token"))

let config = {
    headers: {
        "Authorization": `Bearer ${token}`,
    }
}

let businessRegister = (dataBusinesss) => {
    return axios.post(`${busineRegister}`,dataBusinesss,config)
}

export {
    businessRegister
}