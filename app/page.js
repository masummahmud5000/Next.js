import '@/app/globals.css'
import Image from "next/image";
import img from '@/public/m.jpg'
import Link from 'next/link';
import PhoneNumber from '@/client-server-mix/PhoneNumber';

const Home = () => {
  return (
    <main className="bg-linear-to-l px-8 from-blue-300 to-green-400 flex flex-col items-center pt-[7vh]">
      <div className="name flex hover:cursor-default bg-blue-400 text-center py-1 px-8 pb-2 rounded-2xl text-xl hover:text-3xl transition-all duration-500 lg:text-4xl lg:hover:text-5xl"><h1 className="text-white">Hi i am, <span className='myName text-3xl lg:text-5xl'>Masum</span> Mahmud</h1></div>

      <div><h1 className="hover:cursor-default dev text-white text-2xl mt-10 transition-all duration-500 hover:text-3xl lg:text-6xl lg:hover:text-7xl">Full Stake Web Developer</h1></div>
      {/* <Image src={img} alt='This is the Logo' height={200} className='transition-all duration-700 mt-10'/> */}
      <p className='p cursor-default mt-10 text-xl text-white leading-9  lg:leading-13'>হ্যালো, সবাই কেমন আছেন আশা করি সবাই ভালো আছেন আমাদের এখানে <span className='f bg-amber-300 pb-1 px-3 rounded-lg'>Back-End 'Django'</span> আর <br/><span className='b bg-amber-300 pb-1 px-3 rounded-lg'>Front-End 'Next.js'</span> দিয়ে কন্ট্রোল করা হয় । Masum Mahmud This Site Admin <PhoneNumber/></p>
      <Link href={'register/'} className='open bg-green-500 border-2 border-white py-1 px-10 rounded-xl text-2xl text-white mt-15 pb-2 hover:text-3xl transition-all duration-500 animate-[bounce_2s_linear_infinite]'>Account Open Now</Link>
      <h1></h1>
    </main>
  )
}
export default Home;