import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


const LandingPage = () => {
  return (
    <div className=' w-full h-screen  bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["We Create","Eye Opening","Presentation"].map((item,index)=>{
                return <div className='masker'>
                  <div className='flex w-fit'>  
                  {index===1 &&(<div className=' mr-[1vw] w-[9vw] h-[5.5vw] bg-red-600 relative rounded-md top-[1.2vw]'> </div>)}        
                <h1 className=' uppercase text-[8vw] leading-[7vw]  font-["Test Founders Grotesk X-cond Sm Semi Bold"] font-bold tracking-tighter'>
                {item}
                </h1>
                </div>
            </div>
            })}
          
        </div>

        <div className='border-t-[1px] border-zinc-800 mt-24 flex justify-between font-["Neue Montreal"] text-white px-20 py-5'>
          {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
            return <p className=' mt-5 px-8 text-md font-light tracking-tight leading-none'>{item}</p>
          })}
          <div className='start flex items-center gap-2'>
            <div className=' px-4 py-2 border-[2px] border-zinc-500 font-light text-sm  uppercase rounded-full'>Start the project</div>
              <div className=' w-10 h-10 flex items-center border-[2px] border-zinc-500 rounded-full justify-center'>
                <span className=' rotate-[45deg]'>

              <FaArrowUpLong />
                </span>

              
            </div>


          </div>

        </div>
      
    </div>
  )
}

export default LandingPage
