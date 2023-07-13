
import axios from "./customize-axios";

const FetchAllUser = (page) =>{
    return  axios.get(`/api/users?page=${page}`);
}

const postCreateUser = (name,job) =>{
    return  axios.post("api/users",{name, job});
}

const putEditUser = (name,job) =>{
    return  axios.put("api/users",{name,job});
}

const deleteUser = (id) =>{
    return  axios.delete("api/users",{id});
}




export {FetchAllUser, postCreateUser, putEditUser, deleteUser};