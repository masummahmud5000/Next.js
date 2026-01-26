import '@/app/globals.css'
import Image from "next/image";
import img from '@/public/m.jpg'
import Link from 'next/link';
import PhoneNumber from '@/client-server-mix/PhoneNumber';

const Home = () => {
  return (
    <main className="bg-linear-to-l px-8 from-blue-300 to-green-400 h-screen flex flex-col items-center pt-[10vh]">
      <div className="name flex hover:cursor-default bg-blue-400 text-center py-1 px-8 pb-2 rounded-2xl text-xl hover:text-4xl transition-all duration-500"><h1 className="text-white">Hi i am, <span className='myName text-3xl'>Masum</span> Mahmud</h1></div>
      <div><h1 className="hover:cursor-default dev text-white text-3xl mt-10 transition-all duration-500 hover:text-7xl">Full Stake Web Developer</h1></div>
      {/* <Image src={img} alt='This is the Logo' height={200} className='transition-all duration-700 mt-10'/> */}
      <p className='p cursor-default mt-10 text-xl text-white leading-9 '>হ্যালো, সবাই কেমন আছেন আশা করি সবাই ভালো আছেন আমাদের এখানে <span className='f bg-amber-300 pb-1 px-3 rounded-lg'>Back-End 'Django'</span> আর <br/><span className='b bg-amber-300 pb-1 px-3 rounded-lg'>Front-End 'Next.js'</span> দিয়ে কন্ট্রোল করা হয় । আপনি যদি ওয়েব সাইট বানাতে এচ্ছুক হন তবে অবশ্যই আমাদের সাথে যুগাযুক করুন <PhoneNumber/></p>
      <Link href={'register/'} className='open bg-green-500 border-2 border-white py-1 px-10 rounded-xl text-2xl text-white mt-15 pb-2 hover:text-3xl transition-all duration-500 animate-[bounce_2s_linear_infinite]'>Account Open Now</Link>
    </main>
  )
}
export default Home;