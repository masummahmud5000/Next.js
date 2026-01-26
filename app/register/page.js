'use client'
import '@/app/globals.css'
import Link from 'next/link'

const Register = () => {
    // console.log('Masum');
    return(
        <main className="flex justify-center mt-20">
            <form className="bg-amber-500 px-12 py-8 flex flex-col rounded-2xl">
                <h1 className="text-center text-blue-800 text-3xl mb-4">Register</h1>
                <label>Name</label>
                <div className='input'><input type="text" required placeholder="Enter Your Name"/><span className='fa fa-user'/></div>

                <label>User Name</label>
                <div className='input'><input type="text" required placeholder="Type Unique UserName"/><span className='fa fa-user-circle'/></div>

                <label>Password</label>
                <div className='input'><input type="password" required placeholder="Type Strong Password"/><span className='fa fa-lock'/></div>

                <p className="mt-3 cursor-default text-white">Already Created. <Link className="hover:text-lg hover:text-blue-700" href={'login/'}>Login</Link></p>

                <button type="submit" className='bg-green-700 mt-6 h-9 text-2xl text-white pb-2 rounded-lg cursor-pointer transition-all duration-500 hover:bg-green-900'>Submit</button>
            </form>
        </main>
    )
}
export default Register;