import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Contacts from "./components/pages/Contacts"
import "./App.css"

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
    </Routes>
    </>
  )
}

export default App