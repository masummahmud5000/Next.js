'use server'

import axios from "axios";

const RegisterForm = async (name, userName, password) => {

    const dataSet = {
        name: name,
        username: userName,
        password: password
    }
    try{
        const res = await axios.post('http://127.0.0.1:8000/register/', dataSet);
        // console.log(dataSet)
        if (res.status == 200){
            return await res.data
        }
    }catch (err){
        return err.response?.data
    }
}
export default RegisterForm;