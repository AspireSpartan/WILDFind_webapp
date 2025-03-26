import React from 'react';
import './page1.css';

const SampleComponent = () => {
  return (
    <div className="group136">
      <img className="rectangle138" src="https://placehold.co/299x185" alt="Placeholder" />
      
      {/* Yellow Label */}
      <div className="rectangle163">
        <span className="laptop">Laptop</span>
      </div>

      {/* Content */}
      <div className="content-container">
        <div className="info">Info</div>
        <div className="name">Name: <span className="fullName">Full Name</span></div>
        <div className="phoneNumber">Phone Number: <span className="yourNumber">Your number</span></div>
        <div className="dateLost">Date Lost: <span className="dateLostValue">Date lost</span></div>
        <div className="description">Description:</div>
        <div className="details">
          and completing requests efficiently, ensuring timely communication and updates. 
          With customizable features and robust support, YourRequest y.
        </div>
      </div>

      {/* Release Button */}
      <div className="rectangle140">
        <span className="release">Release</span>
      </div>
    </div>
  );
};

export default SampleComponent;
