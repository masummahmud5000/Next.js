import '@fortawesome/fontawesome-free/css/all.min.css'
import "./globals.css";
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/app/favicon.ico'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-linear-to-l from-blue-300 to-green-400'>
        <nav className='sticky top-0 bg-red-500 h-18 flex items-center border-b-2 border-white pl-10'>
          <h1 className='logoName text-white text-3xl flex'><Image src={logoImg} alt='this is the Logo Image' height={40} className='bg-white mr-2 p-1 rounded-4xl animate-[spin_4s_linear_infinite]'/><span className='text-amber-300'>M</span>asum <span className='text-green-400 ml-2'>M</span>ahmud</h1>
          <ul className='flex ml-100 space-x-12 text-xl text-green-100 cursor-pointer'>
            <Link href={'/'} className='hover:text-2xl hover:text-white transition-all duration-300'>Home</Link>
            <Link href={'/dash'} className='hover:text-2xl hover:text-white transition-all duration-300'>Dashboard</Link>
            <Link href={'/register'} className='hover:text-2xl hover:text-white transition-all duration-300'>Register</Link>
            <Link href={'/login'} className='hover:text-2xl hover:text-white transition-all duration-300'>Login</Link>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
