import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
function AnimeApp() {

  const searchQuery = 'bungo';
  
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${searchQuery}`)
        console.log(response.data);
      } catch (error){
        console.log('error', error);
      }
    }
    fetchData();
  }, [searchQuery]);

  return (
    <div>
   Hello World   
    </div>
  )
}

export default AnimeApp
