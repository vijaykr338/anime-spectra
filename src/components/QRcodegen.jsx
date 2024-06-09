import React from 'react'
import { useState, useEffect } from 'react';
import QRCode from "react-qr-code";

const QRcodegen = () => {


    const [data, setData] = useState('');
    const [qrCode, setQrCode] = useState('');

    const submitGenerate = (e) => {
      e.preventDefault();
      setQrCode(data);
      setData('');
    }
    


  return (
    <div>
      <form className='flex justify-center'>
        <input 
        type="text" 
        placeholder='type the value here'
        className='input input-bordered input-accent'
        onChange={(e)=>setData(e.target.value)}
        value={data}
        />
        <button className='btn btn-primary mx-4' onClick={submitGenerate}>Generate</button>
      </form>
      <div className='flex justify-center my-4'>
      <QRCode value={qrCode} size={400} bgColor='#fff'></QRCode>
      </div>
      
    </div>
  )
}

export default QRcodegen
