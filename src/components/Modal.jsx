import React from 'react'
import { useState } from 'react';
import Modalo from './Modalo';



const Modal = () => {
    //hmesha 
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleModalOpen = () => {
    setShowModalPopup(!showModalPopup);
  }

  const handleModalClose = () => {
    setShowModalPopup(!showModalPopup);
  }
  

  
  return (
    <div className='flex flex-col items-center my-4 font-aria'>
      <button className='btn' onClick={handleModalOpen}>Open Modal</button> 
      {
        showModalPopup &&  
        <Modalo 
          header={<h1>This is a customised header</h1>}
          body={<div>This is a customised body that can do wonders!</div>}
          
          onClose={handleModalClose}
        />
      }
    </div>
  );
}

export default Modal
