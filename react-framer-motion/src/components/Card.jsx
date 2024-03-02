import { motion } from 'framer-motion';
import React, { useState } from 'react'
import {Power4} from 'gsap/all';

const Card = ({imgSrc,value,text}) => {

  const [ishovering,setishovering]=useState(false);

  return (

            <div className='relative'>
            <div onMouseEnter={()=>{setishovering(true)}}
            onMouseLeave={()=>{setishovering(false)}}
            className=' cardcontainer w-full h-[75vh] text-[#CDEA68] '>
              
              
                    {/* since the image is inside the class card hence the round will not work unless we add overflow hidden */}
                    <div className='card w-full h-full rounded-3xl overflow-hidden '>
                        <img  className=' relative w-full h-full bg-cover' src={imgSrc} alt="" />
                            <div className={` z-[9999] font-semibold flex overflow-hidden text-8xl   absolute top-[50%] 
                            ${value%2==0 && ishovering ? 'left-full -translate-x-1/2  ' : '' }
                            ${value%2==0 && !ishovering ? 'left-full -translate-x-1/2  ' : '' }
                            ${value%2!=0 && ishovering ? 'right-full translate-x-1/2 ' : '' }
                            ${value%2!=0 && !ishovering ? 'right-full translate-x-1/2 ' : '' }
                            
                            `}>
                              {text?.split("").map((item,index)=>(
                                //  need to check this why it does not work without the inline block ??
                                <motion.span
                                initial={{y:"100%"}}
                                animate={ishovering ?{y:"0"}:{y:"100%"}}
                                transition={{ease:[0.22,1,0.36,1],delay:index*.02}}
                                className=' inline-block ' 

                                >{item}</motion.span>
                              ))}
                            </div>

                    </div>

                </div>
              </div>
 
  )
}

export default Card
