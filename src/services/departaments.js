import axios from "axios";

const departament = 'http://127.0.0.1:8000/api/departament';
//const municipalities = 'http://127.0.0.1:8000/api/departament/';

let departaments = () =>{
    return axios.get(`${departament}`);
}
//let departaments = a => axios.get(`${departament}/${a}`);

let municipalities = (id) =>{
    //console.log(id)
    //let val = id
    //console.log(id["depar"])
    //console.log(id)

    return axios.get(`${departament}/${id["depar"]}`);
}

export {
    departaments,
    municipalities
}
