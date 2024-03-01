import React from 'react'

const Cards = () => {
  return (
    <div className=' w-full h-screen bg-zinc-100 flex gap-5 px-10 py-10'>
        <div className='relative cardcontainer h-[50vh] w-1/2'>
           <div className='card rounded-xl w-full h-full bg-[#004D43] flex justify-center items-center '>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
             </div>  
             <button className='text-[#cdea68] absolute left-5 bottom-5 border border-[#cdea68] rounded-3xl px-3 py-1'>
             &copy; 2019-2022</button> 
           </div>

           <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
            <div className='relative card rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='text-[white] absolute left-5 bottom-5  border border-[white] rounded-3xl px-3 py-1'>
             RATING 5.0 ON CLUTCH </button> 
            </div>
            <div className='relative card rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
                <img className=' h-[15vh] w-[15vh]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='text-white absolute left-5 bottom-5  border border-[white] rounded-3xl px-3 py-1'>
             BUSINESS BOOTCAMP ALUMINI</button> 
                
            </div>

           </div>
       
      
    </div>
  )
}

export default Cards
