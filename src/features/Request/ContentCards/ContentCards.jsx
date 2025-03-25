import React from 'react';
import './ContentCards.css';

// Rename Component to ContentCards and accept props
const ContentCards = ({
  image,
  category,
  name,
  phone,
  dateLost,
  description,
  onRelease, // Add onRelease prop
}) => {
  return (
    <div data-layer="Group 136" className="Group136">
      <div data-layer="Rectangle 134" className="Rectangle134" />
      <div data-layer="Full Name" className="FullName">{name}</div> {/* Display name */}
      <div data-layer="Your number" className="YourNumber">{phone}</div> {/* Display phone */}
      <div data-layer="Date lost" className="DateLost">{dateLost}</div> {/* Display dateLost */}
      <div 
        data-layer="and completing requests efficiently..."
        className="DescriptionText"
      >
        {description} {/* Display description */}
      </div>
      <div data-layer="Name:" className="Name">Name:</div>
      <div data-layer="Phone Number:" className="PhoneNumber">Phone Number:</div>
      <div data-layer="Date Lost:" className="DateLostLabel">Date Lost:</div>
      <div data-layer="Description:" className="Description">Description:</div>
      <div data-layer="Info" className="Info">Info</div>
      <img 
        data-layer="Rectangle 138" 
        className="Rectangle138" 
        src={image} // Use the passed image prop
        alt={category} // Use category as alt text
      />
      <div data-layer="Rectangle 163" className="Rectangle163" />
      <div data-layer="Laptop" className="Laptop">{category}</div> {/* Display category */}
      <div data-layer="Rectangle 140" className="Rectangle140" />
      <div
        data-layer="Release"
        className="Release"
        onClick={onRelease} // Add onClick handler
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onRelease()} // Accessibility
      >
        Release
      </div>
    </div>
  );
};

export default ContentCards;