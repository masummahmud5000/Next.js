'use client'

import Link from "next/link";

const Login = () => {
    // console.log('Masum');
    return(
        <main className="flex justify-center mt-20">
            <form className="bg-amber-500 px-12 py-8 flex flex-col rounded-2xl">
                <h1 className="text-center text-blue-800 text-3xl mb-4">Login</h1>
                
                <label>User Name</label>
                <input type="text" required placeholder="Type Your UserName"/>

                <label>Password</label>
                <input type="password" required placeholder="Type Your Password"/>
                <p className="mt-3 cursor-default text-white">No Account. <Link className="hover:text-lg hover:text-blue-700" href={'register/'}>Register</Link></p>

                <button type="submit" className='bg-red-700 mt-6 h-9 text-2xl text-white pb-2 rounded-lg cursor-pointer transition-all duration-500 hover:bg-red-900'>Login</button>
            </form>
        </main>
    )
}
export default Login;