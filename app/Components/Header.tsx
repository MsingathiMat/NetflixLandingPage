import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex flex-row justify-between items-center'>



        <Image width={120} height={90} alt="" src="./assets/logo.svg"/>
    


      <div className=" transition-all duration-500 hover:cursor-pointer hover:bg-[#C11119] text-sm bg-[#E50914] w-[70px] h-[35px] rounded-md text-white CENTER"> Signup</div>
    
    </div>
  )
}

export default Header
