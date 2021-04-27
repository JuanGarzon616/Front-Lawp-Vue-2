import axios from "axios";

const busineRegister = 'http://127.0.0.1:8000/api/business/register'

//let token = JSON.parse(localStorage.getItem("token"))

let config = {
    headers: {
        "Accept": '*/*',
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC91c2VyXC9yZWdpc3RlciIsImlhdCI6MTYxOTU2NDA4OCwiZXhwIjoxNjE5NTY3Njg4LCJuYmYiOjE2MTk1NjQwODgsImp0aSI6ImtzUVpZYnhES0lyTDJhaTUiLCJzdWIiOjExLCJwcnYiOiJiMmFlYjI5MjhjYjI1ZDJmMzE2MzIwZjk3ODg3ZTljODU4ZWY3NzgyIn0.7pVXh81bXu95Bj_rozV8TMzX0bH9v9X0UsetMNMZ8N4`,
    }
}

let businessRegister = (dataBusinesss) => {
    console.log(JSON.parse(localStorage.getItem('token')))
    return axios.post(`${busineRegister}`,dataBusinesss,config)
}

export {
    businessRegister
}