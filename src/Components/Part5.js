import React from 'react';
import './Part5.css';
import logo1 from '../Images/logo1.png';
import profileImage from '../Images/profileImage.png';

const Part5 = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo1} alt="Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder=" Tap to Search" />
        
      </div>
      <div className="profile">
        <img src={profileImage} alt="Profile" />
      </div>
    </nav>
  );
}

export default Part5;