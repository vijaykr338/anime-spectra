import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';

import AboutMe from './AboutMe';
import NavBar from './NavBar';
import Modalo from './Modalo';


function StarterPage() {

    const [name, setName] = useState('');
    const [animeData, setAnimeData] = useState([]);
    const [selectedAnime, setSelectedAnime] = useState(null);
    const [showPopUp, setShowPopUp] = useState(false);

    const handleModalOpen = (anime) => {
      setShowPopUp(!showPopUp)
      setSelectedAnime(anime);
    }
  
    const handleModalClose = () => {
      setShowPopUp(!showPopUp)
    }
    
    const limitWords = (text, limit) => {
      const words = text.split(' ');
      if(words.length > limit)
        return words.splice(0, limit).join(' ') + '...';

      else
      return text;
    }
    
   

    
        const fetchData = async () => {
          try{
            const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${name}`)
            setAnimeData(response.data.data);
            console.log(response.data);
          } catch (error){
            console.log('error', error);
          }
        }
       



      const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
      }
    

  return (
    <div>
        
      <form className='flex flex-col my-4 mx-4' onSubmit={handleSubmit}>
      <label htmlFor="search" className='my-4'>Type the name of the anime!</label>  
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
            {animeData.map((anime)=>(
                <div className="card w-96 bg-base-100 shadow-xl my-4 mx-4" style={{width: '20%'}} key={anime.mal_id}>
                <figure>
                    <img src={anime.images.jpg.image_url} alt="anime" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{anime.title}</h2>
                </div>
                <button className='btn btn-ghost' onClick={() => handleModalOpen(anime)}>Show info</button>
              </div>

            ))}
            {showPopUp && selectedAnime && <Modalo
                onClose={handleModalClose}
                header={<div className='flex justify-center text-3xl my-3'>
                  <h1>{selectedAnime.title}</h1>
                </div>}
                body={<div className='flex px-2 py-2'>
                  <div className='picture mx-4 my-4'><img style={{width: '1300px'}} src={selectedAnime.images.jpg.image_url}/></div>
                  <div className='synposis flex flex-col'>
                    <div className='my-4'>{limitWords(selectedAnime.synopsis, 30)}<br/></div>
                    
                  <strong>Status</strong>{' '}{selectedAnime.aired.airing ?  'Airing': 'Finished Airing'}
                  <strong>Genres</strong>{selectedAnime.genres.slice(0, 3).map((genre) => genre.name).join(', ')}
                  <strong>Episodes</strong>{selectedAnime.episodes}
                  </div>
                </div>}
                
                />}

        </div>
       


    </div>
  )
}

export default StarterPage
