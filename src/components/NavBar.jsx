import React from 'react'
import { Link } from 'react-router-dom'
import Scroll from './Scroll'

const NavBar = () => {
  return (
    <div className='flex justify-between sticky top-0 bg-black z-50'>
      
      <div className="navbar flex space-x-3 bg-green-200">
      
  <Link to="/" className="btn btn-ghost text-xl bg-accent">Anime</Link>
  <Link to="/manga" className="btn btn-ghost text-xl bg-accent">Manga</Link>
  <Link  className="btn btn-ghost text-xl bg-accent">Light Novels</Link>
    <Link to="/aboutme" className="btn btn-ghost text-xl ">About me</Link>
    <Link to="/tic-tac-toe" className="btn btn-ghost text-xl ">Tic Tac Toe</Link>
    <Link to="/qr" className="btn btn-ghost text-xl ">QR Code Generator</Link>
    <Link to="/modal-tester" className='btn btn-ghost text-xl bg-error'>Modal</Link>
        </div>
        <div>
          <button className='btn mx-3 my-3'>Dark</button>
        </div>
    </div>
  )
}

export default NavBar
