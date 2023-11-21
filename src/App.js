import './App.css'
import React from 'react'
import Hero from './pages/Hero'
import { Services } from './pages/Services'
import { Offers } from './pages/Offers'
import { Register } from './pages/Register'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <div className='App'>
      <Hero/>
      <Offers/>
      <Register/>
      <Footer/>
    </div>
  )
}

export default App