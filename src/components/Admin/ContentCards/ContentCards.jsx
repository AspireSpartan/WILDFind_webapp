import React from 'react';
import './ContentCards.css';

const ContentCards = ({
  image,
  itemName,
  name,
  phone,
  dateLost,
  description,
  onRelease,
}) => {
  return (
    <div className="content-card">
      <div className="card-container">
        <div className="nameItem-badge">{itemName}</div>
        <img className="item-image" src={image} alt={itemName} />
        <div className="card-content">
          <h3 className="info-title">Info</h3>
          <div className="info-row">
            <span className="info-label">Name:</span>
            <span className="info-value">{name}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Phone Number:</span>
            <span className="info-value">{phone}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Date Lost:</span>
            <span className="info-value">{dateLost}</span>
          </div>
          <div className="info-row description-row">
            <span className="info-label">Description:</span>
            <span className="info-value">{description}</span>
          </div>
          <button className="release-btn" onClick={onRelease}>Release</button>
        </div>
      </div>
    </div>
  );
};

export default ContentCards;
