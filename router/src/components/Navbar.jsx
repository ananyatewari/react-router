import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

export default function Navbar() {
  return (
    <>
    <nav>
        <Link to={"/"}>Kalvium❤️</Link>
        <div id='two'>
          <Link to={"./contacts"} className='space'>Contacts</Link>
          <Link to={"./about"} className='space'>About</Link>
        </div>
    </nav>
    </>
  )
}
