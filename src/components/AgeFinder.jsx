import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'   



function AgeFinder() {

    const [age, setAge] = useState('');
    const [name, setName] = useState('');

const getAge = (name) => {
  axios.get(`https://api.agify.io/?name=${name}`)
  .then((res) => console.log(res))
  .catch((error) => {
    if(error.response && error.response.status === 429)
    console.log("Rate Limit vaai dikkat", error)
    else{
        console.log("Error has occured", error)
    }
  })

  
}

useEffect(()=>{
    getAge(name);
}, [])

const handleSubmit = (event) => {
  event.preventDefault();
 
  getAge(name);
}


const handleChange = (event) => {
  setName(event.target.value);
}


  return (
    <div className='flex items-center flex-col'>
      <h1 className='my-4 text-5xl'>Age Finder</h1>
      <form onSubmit={handleSubmit} className='my-3'>
      <input
        type="text"
        placeholder="Type your name here"
        className="input input-bordered input-secondary w-full max-w-xs"
        value={name}
        onChange={handleChange}
          />
      </form>

      <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    
    
  </div>
</div>
     
    </div>
  )
}



export default AgeFinder
