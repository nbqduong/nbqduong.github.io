import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ButtonGradient from './assets/svg/ButtonGradient'
import About from './components/About'
import Skills from './components/Skills'
import Benefits from './components/Benefits'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Footer/>
      <ButtonGradient />
    </div>
    </>
  )
}

export default App
