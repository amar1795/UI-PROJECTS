import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2"  className=' w-full h-[50vh] py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex justify-center pb-4 whitespace-nowrap overflow-hidden '>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,
        ease:"linear",duration:8
        }} className='text-[17vw] font-bold uppercase leading-none font-["Test Founders Grotesk X-cond Sm Semi Bold"] pr-20'>We are Ochi</motion.h1>

        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,
        ease:"linear",duration:8
        }} className='text-[17vw] leading-none font-bold uppercase font-["Test Founders Grotesk X-cond Sm Semi Bold"] pr-20'>We are Ochi</motion.h1>

      <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,
        ease:"linear",duration:8
        }} className='text-[17vw] leading-none font-bold uppercase font-["Test Founders Grotesk X-cond Sm Semi Bold"] pr-20'>We are Ochi</motion.h1>

      </div>
    </div>
  )
}

export default Marquee
