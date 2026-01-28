'use server'

import axios from "axios";

const LoginAction = async (username, password) => {
    const dataSet = {
        username: username,
        password: password
    };

    try{
        const res = await axios.post('http://127.0.0.1:8000/login/', dataSet);

        if (res.status == 200){
            return await res.data
        }
    }catch(err){
        return err.response?.data
    }
}
export default LoginAction;