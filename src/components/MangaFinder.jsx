import React, { useState } from 'react'
import axios from 'axios';
function MangaFinder() {

    const [name, setName] = useState('');
    const [mangaData, setMangaData] = useState([]);

    const fetchData = async () => {
      try{
        const response = await axios.get(`https://api.jikan.moe/v4/manga?q=${name}&sfw=true`)
        console.log(response.data.data)
        setMangaData(response.data.data);
      }
      catch(error){
        console.log("Error occured", error);
      }
    }
    


    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
      }




  return (
    <div>
      <form className='flex flex-col my-4 mx-4' onSubmit={handleSubmit}>
      <label htmlFor="search" className='my-4'>Type the name of the manga!</label>  
      <div>
      <input
       type="text" 
       placeholder="Type here" 
       className="input input-bordered input-accent w-full max-w-xs" 
       value={name}
       onChange={(e) => setName(e.target.value)}
       />
         <button className="btn btn-primary my-4 mx-4">Search</button></div>
      </form>
    <div className='flex flex-wrap justify-center'>
    {mangaData.map((manga) => {
        return(
            <div className="card w-96 bg-base-100 shadow-xl my-4 mx-4" style={{width: '20%'}} key={manga.mal_id}>
            <figure>
                <img src={manga.images.jpg.image_url} alt="manga" /></figure>
            <div className="card-body">
              <h2 className="card-title">{manga.title}</h2>
            </div>
          </div>
        )
           
        })}
    </div>
       


    </div>
  )
}

export default MangaFinder
