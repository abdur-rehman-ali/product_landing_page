import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/brand_logo.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo-container'>
        <img src={logo} alt="Brand Logo Here"  className="navbar-logo"/>
      </div>
      <ul className="navbar-links">
        <li><a href="#">MENU</a></li>
        <li><a href="#">LOCATION</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
      <div className="navbar-buttons-container">
        <button className='navbar-login-button'>Login</button>
      </div>
    </nav>
  )
}

export default Navbar
