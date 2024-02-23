import React from 'react';
import './Part9.css';
import img1 from '../Images/img1.png';
import slide from '../Images/slide.png';

const Part9 = () => {
  return (
    <div className="container9">
    <br/>
    <h4 className='hd-9'>394+ Happy Maangalaaym Users</h4>
      <h1 className='head9'> Don’t just take our words</h1>
      
      <div className="card-container9">
      <div className="card9">
      <div className="card-content9">
        <img src={img1} alt="Image 1" />
        <p>"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."
        <br/><b>-Raghu & Shwetha</b></p>
      </div>
    </div>
    <div className="card9">
      <div className="card-content9">
        <img src={img1} alt="Image 1" />
        <p>"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want." <br/><b>-Raghu & Shwetha</b></p>
      </div>
    </div>
      </div>
      <img src={slide} alt="Image" className="bottom-image" />
  
    </div>
  )
}

export default Part9