'use client'
import '@/app/globals.css'
import Link from 'next/link'
import RegisterForm from '@/_server-actions/registerForm';
import { useState } from 'react';

const Register = () => {
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    // const [btn, setBtn] = useState(true);
    // const [sts, setSts] = useState(false);
    const [isloading, setIsLoading] = useState(false);

    const [names, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const singUp = async(e) =>{
        e.preventDefault();
        setIsLoading(true);
        try{
            const res = await RegisterForm(names,userName,password);
            if (await res.success == true){
                setName('');
                setUserName('');
                setPassword('');
                setPasswordError('');
                setPasswordError('');

            }else if(res.username?.includes('userAlready')){
                setUsernameError('UserName Already Exist');
                setPasswordError('');
                setTimeout(() => setUsernameError(''),5000)

            }else if(res.username?.includes('usernameNotStrong')){
                setPasswordError('');
                setUsernameError('UserName Not Strong')
                setTimeout(()=>setUsernameError(''),5000)

            }else if(res.password?.includes('passNotStrong')){
                setUsernameError('');
                setPasswordError('Password Not Strong')
                setTimeout(()=>setPasswordError(''),5000)
            };
        }finally{
            setIsLoading(false);
        }
        
    } 
    
    return(
        <main className="flex justify-center mt-20">
            <form onSubmit={singUp} className="bg-amber-500 px-12 py-8 flex flex-col rounded-2xl">
                <h1 className="text-center text-blue-800 text-3xl mb-4">Register</h1>
                <label>Name</label>
                <div className='input'><input value={names} onChange={(e) => setName(e.target.value)} type="text" required placeholder="Enter Your Name"/><span className='fa fa-user'/></div>

                <label>User Name</label>
                <div className='input'><input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" required placeholder="Type Unique UserName"/><span className='fa fa-user-circle'/></div>
                <p className="text-red-600 font-bold">{usernameError}</p>

                <label>Password</label>
                <div className='input'><input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="Type Strong Password"/><span className='fa fa-lock'/></div>
                <p className="text-red-600 font-bold">{passwordError}</p>

                <p className="mt-3 cursor-default text-white">Already Created. <Link className="hover:text-lg hover:text-blue-700" href={'login/'}>Login</Link></p>

                <button type="submit" className='bg-green-700 mt-6 h-9 text-2xl text-white pb-2 rounded-lg cursor-pointer transition-all duration-500 hover:bg-green-900'>{isloading ? (<div className="flex justify-center items-center"><div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2 text-center"></div>Proccess...</div>) : ('Submit')}</button>
            </form>
        </main>
    )
}
export default Register;