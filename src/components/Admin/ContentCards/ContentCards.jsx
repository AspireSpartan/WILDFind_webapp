import React, { useState } from 'react';
import './ContentCards.css';

const ContentCards = ({
  image,
  itemName,
  name,
  idNumber, // ✅ Added ID Number
  phone,
  dateLost,
  description,
  onRelease,
}) => {
  const [showReleaseOptions, setShowReleaseOptions] = useState(false);

  const handleReleaseClick = () => {
    setShowReleaseOptions(true);
    if (onRelease) {
      onRelease(); // Keep the original onRelease function call
    }
  };

  const handleCancelClick = () => {
    setShowReleaseOptions(false);
  };

  const handleDenyClick = () => {
    // Implement your deny logic here
    console.log('Deny clicked for:', itemName);
    setShowReleaseOptions(false); // Optionally hide buttons after action
  };

  const handleApproveClick = () => {
    // Implement your approve logic here
    console.log('Approve clicked for:', itemName);
    setShowReleaseOptions(false); // Optionally hide buttons after action
  };

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
            <span className="info-label">ID Number:</span>
            <span className="info-value">{idNumber}</span> {/* ✅ Display ID Number */}
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
          {showReleaseOptions ? (
            <div className="release-options">
              <button className="deny-btn">Deny</button>
              <button className="cancel-btn" onClick={handleCancelClick}>Cancel</button>
              <button className="approve-btn">Approve</button>
            </div>
          ) : (
            <button className="release-btn" onClick={handleReleaseClick}>Release</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentCards;