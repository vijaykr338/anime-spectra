import React from 'react'
import axios from 'axios'

function Recipe() {

    

    

    const getRecipes = async () => {
        try {
          const response = await axios({
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
            params: {
              prefix: 'chicken soup'
            },
            headers: {
              'X-RapidAPI-Key': '13d4b19ea9mshe3cbc7f56cf3e7ap15d55ajsn7f793db10a5c',
              'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
          });
      
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching data', error);
        }
      };
      
      getRecipes();
   











































































        




    return (
    <div>
      
    </div>
  )
}

export default Recipe
