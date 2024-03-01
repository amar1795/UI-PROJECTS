import { motion } from 'framer-motion';
import React, { useState } from 'react'

const Card = ({imgSrc,value}) => {

  const [ishovering,setishovering]=useState(false);

  return (

            <div className='relative'>
            <div onMouseEnter={()=>{setishovering(true)}}
            onMouseLeave={()=>{setishovering(false)}}
            className=' cardcontainer w-full h-[75vh] text-[#CDEA68]'>
              
              {"FYDE".split("").map((item,index)=>{
                <motion.span>
                  {item}
                </motion.span>
              })}
                    {/* since the image is inside the class card hence the round will not work unless we add overflow hidden */}
                    <div className='card w-full h-full rounded-3xl overflow-hidden '>
                        <img  className=' relative w-full h-full bg-cover' src={imgSrc} alt="" />
                            <div className={` absolute top-[50%] ${value%2==0 ? 'left-full' :'right-full' }  `}>
                              HELLO
                            </div>

                    </div>

                </div>
              </div>
 
  )
}

export default Card
