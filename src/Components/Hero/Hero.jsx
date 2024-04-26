import React from 'react'
import dark_arrow from '../../assets/dark-arrow.png'

import "./Hero.css"


const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit assumenda praesentium illum aut modi distinctio at excepturi quas dolores dolorum!</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
