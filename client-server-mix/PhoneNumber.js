'use client'
import '@/app/globals.css'

const copy = () => {
    navigator.clipboard.writeText('01884885000');
    alert('Copied This Phone Number')
}

const PhoneNumber = () => {
    return(
        <span onClick={copy} className="cursor-copy font-bold text-xl ml-2 bg-fuchsia-500 py-1 px-3 rounded-lg">01884885000</span>
    ) 
}
export default PhoneNumber;