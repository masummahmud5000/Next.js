'use client'

import Link from "next/link";
import LoginAction from "@/_server-actions/loginForm";
import { useEffect, useState } from "react";
// import { redirect } from "next/dist/server/api-utils";

const Login = () => {
    const [isloading, setIsLoading] = useState(false);
    const [username, setUserName ] = useState("");
    const [password, setPassword ] = useState("");
    const [error,setError] = useState("");
    // const [token, setToken] = useState(null);
    // const [btn, setBtn] = useState (true);
    // const [btnHidden, setBtnHidden] = useState(true)
    

    const loginFrom = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const res = await LoginAction(username,password);
        // console.log(await res)
        try{
            if (await res?.success == true){
                localStorage.setItem('access_token', res.access);
                localStorage.setItem('refresh_token', res.refresh);

                setUserName('');
                setPassword('');

                setTimeout(() => setSts(false),3000)
                setTimeout(() => setBtn(true),3000)
                window.location.href='/dash'         
            }else if(res?.non_field_errors?.includes('userNotFound')){
                setError('UserName Password Not Found')
                setTimeout(() => setError(''), 5000)
            }
        }finally{
            setIsLoading(false)
        }
    };
    return(
        <main className="flex justify-center mt-20">
            <form onSubmit={loginFrom} className="bg-amber-500 px-12 py-8 flex flex-col rounded-2xl">
                <h1 className="text-center text-blue-800 text-3xl mb-4">Login</h1>
                
                <label>User Name</label>
                <div className="input"><input value={username} onChange={(e) => setUserName(e.target.value)} type="text" required placeholder="Type Your UserName"/><span className="fa fa-user"/></div>
                <p className="text-red-600 font-bold">{error}</p>

                <label>Password</label>
                <div className="input"><input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="Type Your Password"/><span className="fa fa-lock"/></div>
                <p className="mt-3 cursor-default text-white">No Account. <Link className="hover:text-lg hover:text-blue-700" href={'register/'}>Register</Link></p>
                <button type="submit" className='bg-red-700 mt-6 h-9 text-2xl text-white pb-2 rounded-lg cursor-pointer transition-all duration-500 hover:bg-red-900'>{isloading ? (<div className="flex justify-center items-center"><div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2 text-center"></div>Proccess...</div>) : ('Login')}</button>
            </form>
        </main>
    )
}
export default Login;