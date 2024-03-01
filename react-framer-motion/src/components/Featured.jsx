import React from 'react'
import Card from './Card'
import { motion } from 'framer-motion'

const Featured = () => {
    
  return (
    <div className=' w-full py-20 bg-white text-black'>
        <div className=' w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-7xl font-["Neue Montreal"] tracking-tight text-black'>
                Featured Project
            </h1>
        </div>
        <div className='px-20'>
            <div className='cards w-full grid grid-cols-2 gap-20 mt-10'>
                <div>
                <div className=' px-5 py-5 flex align-middle gap-3'>
                     <div className=' h-3 w-3 rounded-full bg-black mt-1.5'></div>FYDE
                    </div>

            <Card value={0} imgSrc={"//ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"}/>
            <div className='button mt-4'>
                <button className=' px-3 py-[2px] border-black rounded-3xl border mr-2'>
                    AUDIT
                </button>
                <button className=' px-3 py-[2px] border-black rounded-3xl border mr-2'>
                    COPYWRITTING
                </button>
                <button className=' px-3 py-[2px] border-black rounded-3xl border mr-2'>
                    SALES DECK
                </button>
                <button className=' px-3 py-[2px] border-black rounded-3xl border mr-2'>
                    SLIDES DESIGN
                </button>

            </div>
                </div>

                <div>
                    <div className=' px-5 py-5 flex align-middle gap-3'>
                     <div className=' h-3 w-3 rounded-full bg-black mt-1.5'></div> VISE
                    </div>
            <Card value={1} imgSrc={"//ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"}/>
            <div className='button mt-4'>
                <button className=' px-3 py-[2px] border-black rounded-3xl border mr-2'>
                    AGENCY
                </button>
                <button className=' px-3 py-[2px] border-black rounded-3xl border mr-2'>
                    COMPANY PRESENTATION
                </button>
               

            </div>
            </div>


            <div>
            <div className=' px-5 py-5 flex align-middle gap-3'>
                     <div className=' h-3 w-3 rounded-full bg-black mt-1.5'></div> TRAVA 
                    </div>
            <Card value={2} imgSrc={"//ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"}/>
            <div className='button mt-4'>
                <button className=' px-3 py-[2px] border-black rounded-3xl border mr-2'>
                    BRAND IDENTITY
                </button>
                <button className=' px-3 py-[2px] border-black rounded-3xl border mr-2'>
                    DESIGN RESEARCH
                </button>
                <button className=' px-3 py-[2px] border-black rounded-3xl border mr-2'>
                    INVESTOR DECK
                </button>
                

            </div>
            </div>

            <div>
            <div className=' px-5 py-5 flex align-middle gap-3'>
                     <div className=' h-3 w-3 rounded-full bg-black mt-1.5'></div> PREMIUM BLEND
                    </div>
            <Card value={3} imgSrc={"//ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"}/>
            <div className='button mt-4'>
                <button className=' px-3 py-[2px] border-black rounded-3xl border mr-2'>
                    BRAND TEMPLATE
                </button>
                

            </div>
            </div>

            </div>
        </div>
      
    </div>
  )
}

export default Featured
