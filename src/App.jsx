import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Meme from './Meme'
import memesData from './memesData'

function App() {

  return (
    <div className='entire-body'>
    <Header/>
    <Meme />
    </div>
  )
}

export default App
