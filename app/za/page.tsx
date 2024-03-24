
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import PageSection from '../Components/PageSection'
import SignUpForm from '../Components/SignUpForm'
import Image from 'next/image'
function page() {
    return (
        <div className=' '>
    

          <PageSection>
    
         <div id="HERO-SECTION" className=' HEROBG h-screen w-full pt-10  pl-[40px] pr-[40px] lg:pl-[95px] lg:pr-[95px]' >
    
         <Header/>
       
    
       <div id="HERO-CONTAINER" className=' w-full h-[90%]  CENTER flex-col'>
    
    <h1 className='text-white font-bold text-[48px]'> Unlimited movies, TV shows, and more</h1>
    
    <a  href="https://www.matthewmsingathi.co.za/" className='text-white text-[25px] mb-8 hover:text-green-500'>Link to My Website .</a>
      
    <a  href="https://www.youtube.com/@CodedUwi" className='text-white text-[25px] mb-8 hover:text-green-500'>I also teach UI Design, link to Design Channel.</a>
      
    
    <p className='text-white text-[18px]'>Ready to watch? Enter your email to create or restart your membership.</p>
    <SignUpForm/>
      <div>


  
      </div>
      
       </div>
         </div>
          </PageSection>
       
       <PageSection>

      <div className=" bg-[#070606] w-full h-[75vh] CENTER gap-14">
   
   <div className='CENTER flex-col items-start'>

   <h1 className='text-white font-bold text-[48px]'> Enjoy on your TV</h1>
    
    <p className='text-white text-[20px] mb-8'>Watch on Smart TVs, Playstation, Xbox, Chromecast,<br/> Apple TV, Blu-ray players, and more.

</p>
      
   </div>

   <div id="TV-WRAPPER" className='relative z-10 ' >
   <div className='min-w-[520px] min-h-[200px]'>

      <Image  className=" pointer-events-none z-20" width={510} height={500} alt="" src="/assets/tv.png"/>
  
   </div>
 
<video controls autoPlay loop className=' w-[320px] absolute top-0 left-[95px] -z-10' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"/>
   </div>
      </div>
       </PageSection>

       <PageSection>

<div className=" bg-[#070606] w-full h-[75vh] CENTER gap-14">

<Image  className=" pointer-events-none z-20" width={300} height={500} alt="" src="/assets/mobile2.png"/>
   
<div className='CENTER flex-col items-start'>

<h1 className='text-white font-bold text-[48px]'>Download your shows to<br/> watch offline</h1>

<p className='text-white text-[20px] mb-8'>Save your favorites easily and always have something to watch.

</p>

</div>


</div>
 </PageSection>
        </div>
      )
}

export default page
