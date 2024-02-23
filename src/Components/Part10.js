import React from 'react';
import './Part10.css';

const Part10 = () => {
    return (
      <div className="container10">
      <h4 className="sub-heading">Join Us Today</h4>
      <h1 className="main-heading">Your Journey to Love Starts Here</h1>
      <p className="paragraph10">
      Unlock the Door to Love: Register Now for a Journey of Connections and Compatibility.
      </p>
      <div className="input-row">
        <div className="input-group">
          <label>Profile  </label>  
          <input type="text" className="input-text" placeholder="Profile              " />
        </div>
        <div className="input-group">
          <label>gender</label>
          <input type="text" className="input-text" placeholder="gender                     " />
        </div>
      </div>
      <div className="input-row">
        <div className="input-group">
          <label>First Name</label>  
          <input type="text" className="input-text" placeholder="Name             " />
        </div>
        <div className="input-group">
          <label>Secong Name</label>
          <input type="text" className="input-text" placeholder="Your Name                    " />
        </div>
      </div>
      <div className="input-row">
        <div className="input-group">
          <label>Phone Number</label>  
          <input type="text" className="input-text" placeholder="+91-913456789              " />
        </div>
  
      </div>
      <button className="submit-button">Get Started</button>
    </div>
      );
    };
    

export default Part10
