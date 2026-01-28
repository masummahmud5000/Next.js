import axios from "axios";
// import { redirect } from "next/navigation";

const API = async (access, refresh) => {
    let instanse = axios.create({baseURL: 'http://127.0.0.1:8000/', headers: {'Authorization': `Bearer ${access}`}});

    instanse.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;
            if (error.response?.status === 401 && ! originalRequest._retry){
                originalRequest._retry = true;

                try{
                    const res = await axios.post('http://127.0.0.1:8000/refresh/', {refresh: refresh});
                    const newAccess_token = await res.data.access;
                    // localStorage.setItem('access_token', newAccess_token);

                    originalRequest.headers['Authorization'] = `Bearer ${newAccess_token}`;
                    return instanse(originalRequest);
                }catch(refreshError){
                    // localStorage.clear();
                    // window.location.href='/login'
                    // redirect('/login')
                    return (Promise.reject(refreshError), 'refreshInvalid')
                }
            }else{
                return Promise.reject(error)
            }

        }
    )
    return instanse;

};
export default API;