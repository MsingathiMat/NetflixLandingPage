import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

function SignUpForm() {
  return (
    <div id='INPUT-WRAPPER' className=' relative mt-10 flex flex-row gap-2  '>
 <input placeholder='' className=' outline-none text-white border-green-500 border bg-[rgba(9,42,100,0.3)] rounded-sm w-[320px] h-[55px] pl-5 align-bottom pt-6 '/>

 <label className=' transition-all duration-400 pointer-events-none absolute text-[#B1ACB1] top-[20px] left-[20px] text-sm' > Email address</label>
 
 <div className=" transition-all duration-500 hover:cursor-pointer hover:bg-[#C11119] font-bold text-[20px] bg-[#E50914] w-[190px] h-[55px]  rounded-sm text-white CENTER"> 
 
 
 Get Started
 <FaAngleRight color='white' className='ml-3' />
 
 </div>
    
    </div>
  )
}

export default SignUpForm
