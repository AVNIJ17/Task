import React from 'react';
import './Part11.css';
import logo from '../Images/logo.png';

const Part11 = () => {
  return (
    <div className="four-column-container">
   
    <div className="column1">
        <img src={logo} alt="Logo" />
        <p>Clarity gives you the blocks and components you need to create a truly professional website.</p>
    </div>
  
    <div className="column2">
        <ul>
            <li>Company</li>
            <li>About</li>
            <li>Features</li>
            <li>Contact Us</li>
            <li>Career</li>
        </ul>
    </div>
    
    <div className="column3">
        <ul>
            <li>Help</li>
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
        </ul>
    </div>

    <div className="column4">
        <h4>NEWSLETTER</h4>
        <input type="text" placeholder="Enter your email address" />
        <br/><br/>
        <button className='btn-f'>Subscribe Now</button>
    </div>
    
</div>

  )
}

export default Part11