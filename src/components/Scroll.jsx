import React from 'react'
import { useState } from 'react';


const Scroll = () => {
  
  const [scroll, setScroll] = useState(0);
    
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    
    const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   
    const scrolledPart = (winScroll / maxHeight) * 100;
    
    setScroll(scrolledPart);
  }


  const scrollString =  Math.trunc(scroll);
  console.log(scrollString)

  window.addEventListener("scroll", onScroll);

  
  
    return (
    <div className='sticky top-16 z-50'>
      <div className=' z-10 w-full h-6 bg-black'>
        <div style={{width: `${scroll}%`}} className='h-6 w-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
        <p className='text-white'>
            
        </p>
      </div>
    </div>
  )
}

export default Scroll
