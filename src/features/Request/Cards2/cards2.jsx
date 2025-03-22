import React from "react";
import "./Cards2.css"; // Import the CSS file

const Cards = ({ title, count, imageSrc }) => {
  return (
    <div data-layer="Card2" className="Card2">
      <div data-layer="Tile category" className="TileCategories">
        <div data-layer="Rectangle 93" className="Rectangle" />
        <div data-layer="CategoryTitle" className="CategoriesTitle">
          {title}
        </div>
        <div data-layer="Counts" className="Counts">
          {count}
        </div>
        <div data-layer="Ellipse 4" className="Ellipse44" />
        <div data-layer="Line 2" className="Line22" />
        <img
          data-layer="Multiple Devices"
          className="MultipleDevice"
          src={imageSrc}
          alt={title}
        />
      </div>
    </div>
  );
};

export default Card2;
