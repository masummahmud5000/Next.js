'use server'

import axios from "axios"
import API from "./AxiosInstanse"

const ProfileData = async(access, refresh) => {
    if (await !access){
        return 'tokenError'
    }else{
        const api = await API(access,refresh)
        try{
            const res = await api.get('profile/')
            return await res.data
        }catch(err){
            console.log(err)
        }
    }
}
export default ProfileData