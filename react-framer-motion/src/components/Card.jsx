import React from 'react'

const Card = ({imgSrc}) => {
  return (


            <div className='cardcontainer w-full h-[75vh]'>
                    {/* since the image is inside the class card hence the round will not work unless we add overflow hidden */}
                    <div className='card w-full h-full rounded-3xl overflow-hidden '>
                        <img className='w-full h-full bg-cover' src={imgSrc} alt="" />

                    </div>

                </div>
      
 
  )
}

export default Card
