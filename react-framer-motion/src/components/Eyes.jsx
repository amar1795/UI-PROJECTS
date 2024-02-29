import React from 'react'

const Eyes = () => {
  return (
    <div className='eyes w-full h-screen overflow-hidden '>
        <div className='relative h-full w-full bg-cover bg-center
         bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'> 
         <div className='flex absolute top-1/2 left-1/2 w-1/3 gap-10 -translate-x-[50%] -translate-y-[50%]'>
            <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-white rounded-full'>
                <div className='relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-950'>
                <div className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'> 
                    <div className=' w-10 h-10 rounded-full bg-zinc-100'>
                    </div>  
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-white rounded-full'>
                <div className=' w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-950'>
                    <div className=' w-1/4 h-1/4 rounded-full bg-zinc-100'></div>
                </div>
            </div>
         </div>

        </div>
      
    </div>
  )
}

export default Eyes
