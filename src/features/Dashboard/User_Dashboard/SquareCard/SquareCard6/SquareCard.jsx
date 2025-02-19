import React from "react";
import "./SquareCard.css";

const SquareCard = ({ title, deviceId, imageSrc, onRetrieve }) => {
  return (
    <div className="square-card">
      <div className="square-card-content">
        <h3 className="square-card-title">{title}</h3>
        <p className="square-card-device">Device: {deviceId}</p>
        <button className="square-card-button" onClick={onRetrieve}>
          Retrieve
        </button>
        <img src={imageSrc} alt="Device Icon" className="square-card-icon" />
      </div>
    </div>
  );
};

export default SquareCard;
