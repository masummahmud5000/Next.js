'use client'

import { useState, useEffect } from "react";
import ProfileData from "@/_server-actions/ProfileData";

const Dashboard = () => {
    // const [token, setToken] = useState(null);
    const [username, setUsername] = useState('');
    const [balance, setBalance] = useState('');
    const [hidden, setHidden] = useState(false);

    const logout = ()=>{
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.reload();
    }

    useEffect( ()  => {
        const a = async () => {
            try{
                const res = await ProfileData(localStorage.getItem('access_token'), localStorage.getItem('refresh_token'))
                if (res === 'tokenError'){
                    setUsername('Not Found');
                    setBalance('0.00');
                    setHidden(false);
                }else{
                    setUsername(res.username);
                    setBalance(res.balance);
                    setHidden(true);
                }
                
            }catch(err){
                console.log(err)
            }
            // console.log(res)
        }
        // setToken(localStorage?.getItem('access_token'))
        a();
    },[])
    
    return(
        <main className="pt-5 px-5 text-end">
            {hidden && <h1 onClick={logout} className="fa fa-right-from-bracket text-2xl text-white bg-red-600 rounded-5xl pr-8 pl-2 pt-2 pb-2 rounded-4xl mb-5 transition-all duration-500 hover:text-3xl cursor-pointer"></h1>}
            <div className="bg-blue-500 text-start text-white px-10 py-5 rounded-2xl border-2">
                <h1 className="text-xl">User Name : @<span className="font-bold text-shadow-purple-500 text-amber-200">{username}</span></h1>
                <h1 className="mt-2 text-3xl">Balance : $<span className="font-bold">{balance}</span></h1>
            </div>
            <div className="flex gap-10 justify-center text-white pt-8">
                {hidden && <h1 className="transition-all duration-500 bg-red-600 py-2 w-40 text-center text-xl rounded-xl cursor-pointer hover:bg-red-800">Cash Out <span className="fa fa-money-bill-transfer"/></h1>}
                {hidden && <h1 className="transition-all duration-500 bg-amber-600 py-2 w-40 text-center text-xl rounded-xl cursor-pointer hover:bg-amber-800">Send Money <span className="fa fa-paper-plane"/></h1>}
            </div>
        </main>
    )
}
export default Dashboard;