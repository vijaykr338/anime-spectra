import React, { useState } from 'react'
import circle from '../assets/circle.png'
import cross from '../assets/cross.png'

const TicTacToe = () => {

    let data = ["", "", "", "", "", "", "", "", ""]

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);

    const toggle = (e, num) => {
      if(lock){
        return;
      }
      if(count % 2 === 0){
        e.target.value.innerHTML = `<img src=${cross} alt="cross" />`
        data[num] = "X";
        setCount(count + 1);

      } 
      else{
        e.target.value.innerHTML = `<img src=${circle} alt="circle" />`
        data[num] = "O";
        setCount(count + 1);
      }    
    }
    


    return (
        <div className='flex flex-col items-center my-4 '>
            <p className='text-4xl'>Welcome to my Tic-Tac-Toe Game!</p>
            <div className="board flex flex-col my-4 bg-cyan-300">
                <div className="row1 flex justify-around">
                    <div className="boxes h-20 w-20 border-8 cursor-pointer" onClick={(e)=>toggle(e, 0)}></div>
                    <div className="boxes h-20 w-20 border-8 cursor-pointer" onClick={(e)=>toggle(e, 1)}></div>
                    <div className="boxes h-20 w-20 border-8 cursor-pointer" onClick={(e)=>toggle(e, 2)}></div>
                </div>
                <div className="row1 flex justify-around">
                    <div className="boxes h-20 w-20 border-8 cursor-pointer" onClick={(e)=>toggle(e, 3)}></div>
                    <div className="boxes h-20 w-20 border-8 cursor-pointer" onClick={(e)=>toggle(e, 4)}></div>
                    <div className="boxes h-20 w-20 border-8 cursor-pointer" onClick={(e)=>toggle(e, 5)}></div>
                </div>
                <div className="row1 flex justify-around">
                    <div className="boxes h-20 w-20 border-8 cursor-pointer" onClick={(e)=>toggle(e, 6)}></div>
                    <div className="boxes h-20 w-20 border-8 cursor-pointer" onClick={(e)=>toggle(e, 7)}></div>
                    <div className="boxes h-20 w-20 border-8 cursor-pointer" onClick={(e)=>toggle(e, 8)}></div>
                </div>
            </div>
            <button className='btn my-4'>Reset</button>
        </div>
    )
}

export default TicTacToe
