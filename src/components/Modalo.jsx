import React, { useEffect } from 'react'
import { useState } from 'react'

const Modalo = ({id, header, body, footer, onClose}) => {
  const [showModal, setShowModal] = useState(true)

  
  
    const handleClose = () => {
      setShowModal(false);
      onClose && onClose();
    }

    useEffect(() => {
        console.log(showModal);
    })
    

    return (
         <div>
    {showModal && <div id={id || "Modal"} className='fixed flex bg-black justify-center bg-opacity-50 items-center z-50 top-0 left-0 w-screen h-screen text-white overflow-auto px-5 py-5 '>
      <div className='content  bg-white text-black w-3/4 max-w-lg mx-auto rounded-lg shadow-lg z-50 overflow-y-auto '>
        <div className='header relative my-auto mx-auto p-4'>
          {header ? header : "header"}
          <button onClick={handleClose} className='absolute top-0 right-0 m-4'>X</button>
        </div>
        <div className='body p-4'>
          {body ? body : "body"}
        </div>
        
      </div>
    </div>}
    </div>
  )
}

export default Modalo