import React from 'react';
import './Nav.css';
import logo from '../Images/logo.png';
const Nav = () => {
  return (
    <nav>
       <div className="logo">
        <img src={logo} alt="Logo" />
      </div> 
    <ul>
      <li><a href="/" className="orange">Home</a></li>
      <li><a href="/">Plans</a></li>
      <li ><a href="/">Help &#9662;</a></li>
     
      <li><a href="/" className="button">Login</a></li>
    </ul>
    
  </nav>
  )
}

export default Nav