import React from 'react'
import { useState } from 'react';

function Heroo() {
    const [showHero, setShowHero] = useState(true);
    const [hide, setHide] = useState('');

    const HandleClick = () => {
      setHide('opacity-0');
      setTimeout(() => {
        setShowHero(false);
      }, 1000);
    }
    

    if(!showHero){
        return null;
    }

  return (
    <div>
      <div className={`hero min-h-screen transition-all ease-in-out duration-1000 ${hide}`} style={{backgroundImage: 'url(https://img.freepik.com/free-photo/illustration-anime-character-rain_23-2151394707.jpg?t=st=1717520489~exp=1717524089~hmac=de19bfac082c591640086d17fec5a097c547c7f23e200f92ff228b92618ff2c8&w=1380)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Find details of your favourite anime here!</p>
      <button className="btn btn-primary" onClick={HandleClick} >Get Started</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Heroo
