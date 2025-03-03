import React from 'react'
import Navbar from '../Components/Navbar'
import Lander from '../Components/Lander'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Portfolio from '../Components/Portfolio'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Lander/>
      <About/>
      <Skills/>
      <Portfolio/>
    </div>
  )
}

export default Home
