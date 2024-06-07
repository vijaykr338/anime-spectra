import { useState } from 'react'
import AgeFinder from './components/AgeFinder'
import CatFacts from './components/CatFacts'
import Recipe from './components/Recipe'
import AnimeApp from './components/AnimeApp'
import Heroo from './components/Heroo'
import StarterPage from './components/StarterPage'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MangaFinder from './components/MangaFinder'
import TicTacToe from './components/TicTacToe'
import QRcodegen from './components/QRcodegen'
import Scroll from './components/Scroll'
import Modal from './components/Modal'

function App() {
  
  const router = createBrowserRouter([
    {
        path: "/",
        element: <><NavBar /><Scroll/><StarterPage /></>
    },
    {
        path: '/aboutme',
        element: <><NavBar /><Scroll/><AboutMe /></>
    },
    {
      path: "/manga",
      element: <><NavBar /><Scroll/><MangaFinder /></>
    },
    {
      path: "/tic-tac-toe",
      element: <><NavBar /><Scroll/><TicTacToe /></>
    },
    {
      path: "/qr",
      element: <><NavBar /><Scroll/><QRcodegen /></>
    },
    {
      path: "/modal-tester",
      element: <><NavBar /><Scroll/><Modal /></>
    }
])
  
  return (
   <div>
<Heroo /> 
<RouterProvider router={router}/>

    
    
    
   </div>
  )
}

export default App
