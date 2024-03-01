import React from 'react'

const About = () => {
  return (
      <div>
    
    <div  className=' w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 data-scroll data-scroll-speed=".2" className='font-["Neue Montreal"] text-[3vw] leading-[3.5vw] tracking-tighter'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className='w-full flex border-t-[1px] top-10 mt-10 border-[#a1b562]'>
        <div className='w-1/2'>
            <h1 className='text-7xl'>
                Our Approach
            </h1>
            <button className='flex gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>
                ReadMore
                <div className='w-3 h-3 bg-zinc-100 rounded-full'>

                </div>

            </button>

        </div>

        <div className='mt-10 w-1/2 h-[70vh] rounded-3xl  border-[#b0c859] overflow-hidden'>

          <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>

      </div>
    </div>
    </div>
  )
}

export default About
