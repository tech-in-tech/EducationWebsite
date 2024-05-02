import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';



function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false)
    })
  }, [])
  return (
    <nav className={`container ${sticky?'dark-nav':''}`}>
      <img src={logo} alt="" className='logo' />
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
