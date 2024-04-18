import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  return (
    <>
      <img src={logo} className="logo" alt="Bubbly's Symphony: Guardians of the Depths" />
      <footer>© {new Date().getFullYear()} Seungmin Lee. All rights reserved.</footer>
    </>
  )
}

export default App
