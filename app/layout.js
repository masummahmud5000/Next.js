import '@fortawesome/fontawesome-free/css/all.min.css'
import "./globals.css";
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/app/favicon.ico'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-linear-to-l from-blue-300 to-green-400 flex flex-col min-h-screen'>
        <nav className='sticky top-0 bg-red-500 h-16 flex items-center border-b-2 border-white pl-5 pr-3 lg:h-18'>

          <h1 className='logoName text-white text-xl flex lg:text-3xl lg:ml-5'><Image src={logoImg} alt='this is the Logo Image' height={30} className='bg-white mr-2 p-1 rounded-4xl animate-[spin_4s_linear_infinite] lg:h-[40] lg:w-[40]'/><span className='text-amber-300'>M</span>asum <span className='text-green-400 ml-1'>M</span>ahmud</h1>

          <ul className='grid grid-cols-2 ml-10 space-x-2 text-green-100 cursor-pointer lg:flex lg:gap-5 lg:ml-100'>
            <Link href={'/'} className='hover:text-xl hover:text-white transition-all duration-300'>Home</Link>
            <Link href={'/dash'} className='hover:text-2xl hover:text-white transition-all duration-300'>Dashboard</Link>
            <Link href={'/register'} className='hover:text-2xl hover:text-white transition-all duration-300'>Register</Link>
            <Link href={'/login'} className='hover:text-2xl hover:text-white transition-all duration-300'>Login</Link>
          </ul>
        </nav>
        
        <main className='flex-1'>
          {children}
        </main>
        
        <footer className=' flex flex-col mt-30 gap-3 bg-black text-white h-40 items-center justify-center border-3 border-b rounded-3xl rounded-b'>
          <h1 className='text-white'>সৌজন্যে : মাসুম <span className='fa fa-heart text-red-600'/> মনিরের ফুফু </h1>
          <h1>© Copyright 2026</h1>
          <h1 className='text-green-600'>Admin : masum@gmail.com</h1>
        </footer>
      </body>
    </html>
  );
}
