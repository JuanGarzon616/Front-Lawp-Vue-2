import axios from "axios";

const businesRegister = 'http://127.0.0.1:8000/api/business/register'

let config = {
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
    }
}

let businessRegister = (dataBusiness) => {
    console.log(dataBusiness)
    axios.post(`${businesRegister}`,dataBusiness,config)
}

export {
    businessRegister
}