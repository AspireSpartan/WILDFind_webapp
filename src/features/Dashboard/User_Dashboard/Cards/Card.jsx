import React from 'react';
import './Card.css'; // Import the CSS file

const Card = ({ title, count, imageSrc }) => {
  return (
    <div data-layer="Card" className="Card">
      <div data-layer="Tile category" className="TileCategory">
        <div data-layer="Rectangle 93" className="Rectangle93" />
        <div data-layer="CategoryTitle" className="CategoryTitle">
          {title}
        </div>
        <div data-layer="Count" className="Count">
          {count}
        </div>
        <div data-layer="Ellipse 4" className="Ellipse4" />
        <div data-layer="Line 2" className="Line2" />
        <img
          data-layer="Multiple Devices"
          className="MultipleDevices"
          src={imageSrc}
          alt={title}
        />
      </div>
    </div>
  );
};

export default Card;