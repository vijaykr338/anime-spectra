import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function CatFacts() {


const [catFact, setCatFact] = useState('');
const [catPic, setcatPic] = useState([]);


const GenerateHandler = () => {
    
    axios.get('https://catfact.ninja/fact')
    .then(response =>  setCatFact(response.data.fact))

    axios.get('https://api.thecatapi.com/v1/images/search')
    .then(response =>  setcatPic(response.data[0].url))
}



  return (
    <div className='flex items-center flex-col'>
      <h1 className='text-3xl my-2'>Cat Facts</h1>
      <button className='my-3 btn btn-success btn-outline' onClick={GenerateHandler}>Generate A cat fact</button>
      <div className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10 my-4">
    <img src={catPic} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
   
    <p>{catFact}</p>
 
  </div>
</div>
    </div>
  )
}

export default CatFacts
