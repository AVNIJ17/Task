import React from 'react';
import './Part6.css';
import card2 from '../Images/card2.png';
import card1 from '../Images/card1.png';
import card3 from '../Images/card3.png';
import card4 from '../Images/card4.png';
import card5 from '../Images/card5.png';
import card6 from '../Images/card6.png';

const Part6 = () => {
  return (
    <div className="container">
    <div className="box1">
   
      <h2 className="orange-bg">Advance Search</h2>
      <label className='lbl1'>Basic Details</label> 
      <br/> 
      <input type="text" placeholder="18-22                                                         &#9660;"           /><br /><br/>
      <label>Height</label>
      <br/>  
      <input type="text" placeholder="Input 2" /><br /><br/>
      <label className='lbl1'>Caste & Religion Details</label> 
      <br/> <br/>
      <label>Religion</label> 
      <br/> <br/>
      <input type="text" placeholder="Input 3" /><br />
      
      <label>Caste</label> 
      <br/> <br/>
      <input type="text" placeholder="Input 4" /><br />
      <label>Sub-Caste</label> 
      <br/> <br/>
        <input type="text" placeholder="Input 5" />
        <br/> <br/>
        <button className='btn2'>View More &#9662;</button>
    </div>

    <div className="box2">
    <h2 className='head'>Based on your Preference</h2>
   <div className="card">
      <div className="card-content">
        <img src={card2} alt="Image 1" />
        <p>Sravani Reddykonda<br/>26 yrs | 5ft 6in<br/>Phn - 912177<br/>Mail - sravani@gmail.com<br/>Caste<br/>Occupation</p>
      </div>
    </div>
    <div className="card">
    <div className="card-content">
        <img src={card1} alt="Image 1" />
        <p>Sravani Reddykonda<br/>26 yrs | 5ft 6in<br/>Phn - 912177<br/>Mail - sravani@gmail.com<br/>Caste<br/>Occupation</p>
      </div>
    </div>
    <div className="card">
      <div className="card-content">
        <img src={card3} alt="Image 1" />
        <p>Sravani Reddykonda<br/>26 yrs | 5ft 6in<br/>Phn - 912177<br/>Mail - sravani@gmail.com<br/>Caste<br/>Occupation</p>
      </div>
    </div>
    <div className="card">
      <div className="card-content">
        <img src={card4} alt="Image 1" />
        <p>Sravani Reddykonda<br/>26 yrs | 5ft 6in<br/>Phn - 912177<br/>Mail - sravani@gmail.com<br/>Caste<br/>Occupation</p>
      </div>
    </div>
    <div className="card">
      <div className="card-content">
        <img src={card5} alt="Image 1" />
        <p>Sravani Reddykonda<br/>26 yrs | 5ft 6in<br/>Phn - 912177<br/>Mail - sravani@gmail.com<br/>Caste<br/>Occupation</p>
      </div>
    </div>
    <div className="card">
      <div className="card-content">
        <img src={card6} alt="Image 1" />
        <p>Sravani Reddykonda<br/>26 yrs | 5ft 6in<br/>Phn - 912177<br/>Mail - sravani@gmail.com<br/>Caste<br/>Occupation</p>
      </div>
    </div>

  </div>
  </div>
  )
}

export default Part6