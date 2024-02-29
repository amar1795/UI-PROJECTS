import React from 'react'

const Marquee = () => {
  return (
    <div className=' w-full h-screen py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex justify-center pb-4 whitespace-nowrap overflow-hidden'>
        <h1 className='text-[17vw] leading-none font-["Test Founders Grotesk X-cond Sm Semi Bold"] mr-4'>We are Ochi</h1>
        <h1 className='text-[17vw] leading-none font-["Test Founders Grotesk X-cond Sm Semi Bold"]'>We are Ochi</h1>

      </div>
    </div>
  )
}

export default Marquee
