import React from 'react'

const LandingPage = () => {
  return (
    <div className=' w-full h-screen  bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["We Create","Eye Opening","Presentation"].map((item,index)=>{
                return <div className='masker'>
                <h1 className=' uppercase text-[7.5vw] leading-[6vw]  font-["FoundersGrotesk"] font-medium tracking-tighter'>
                {item}
                </h1>
            </div>
            })}
            

        </div>
      
    </div>
  )
}

export default LandingPage
