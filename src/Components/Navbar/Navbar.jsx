import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';



function Navbar() {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>Programs</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testiminials</li>
        <li> <button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
