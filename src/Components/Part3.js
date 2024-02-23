import React from 'react';
import './Part3.css';
import Frame1 from '../Images/Frame1.png';

const Part3 = () => {
  return (
    <div className="box-container">
    
    <div className="box">
      <h6 className="box-heading">Main Heading</h6>
      <div className="input-row">
        <div className="input-group">
          <label>Looking For</label>  
          <input type="text" className="input-text" placeholder="Male or Female               &#9660;" />
        </div>
        <div className="input-group">
          <label className='lbl'>Age</label>
          <input type="text" className="input-text" placeholder="Select Age                       &#9660;" />
        </div>
      </div>
      <div className="input-row">
        <div className="input-group">
          <label>Religion</label>
          <input type="text" className="input-text" placeholder="Select Religion                 &#9660;" />
        </div>
        <div className="input-group">
          <label>Mother Tongue</label>
          <input type="text" className="input-text" placeholder="Choose Mother Tongue   &#9660;" />
        </div>
      </div>
      <button className="submit-button">Search(CTA)</button>
    </div>
    <img src={Frame1} alt="Description of the image" className="background-image" />
 
  </div>
  )
}

export default Part3