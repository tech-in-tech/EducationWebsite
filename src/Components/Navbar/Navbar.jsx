import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#program">Programs</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
        <li>
          <a href="#campus">Campus</a>
        </li>
        <li>
          <a href="#testimonals">Testimonials</a>
        </li>
        <li>
          <button id='contact' className='btn'>Contact Us</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
