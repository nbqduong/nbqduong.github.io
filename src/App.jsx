import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ButtonGradient from './assets/svg/ButtonGradient'

function App() {
  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <ButtonGradient />
    </div>
    </>
  )
}

export default App
