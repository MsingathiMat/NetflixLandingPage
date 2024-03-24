import React from 'react'

function PageSection({children}:{children:React.ReactNode}) {
  

  return (
    <div className=' '>
      {children}

      <div id='DIVISION-LINE' className='bg-[#232323] w-full h-2'></div>
    </div>
  )
}

export default PageSection
