
import axios from "./customize-axios";

const FetchAllUser = (page) =>{
    return  axios.get(`/api/users?page=${page}`);
}

const postCreateUser = (name,job) =>{
    return  axios.post("api/users",{name, job});
}

const putEditUser = (name,job) =>{
    console.log(name)
    return  axios.post("api/users",{name,job});
}

const deleteUser = (id) =>{
    return  axios.delete("api/users",{id});
}

const loginAPI = (email, password) =>{
    return  axios.post("api/login",{email, password});
}


export {FetchAllUser, postCreateUser, putEditUser, deleteUser, loginAPI};