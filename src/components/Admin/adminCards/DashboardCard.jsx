import React from "react";
import "./DashboardCard.css";

const DashboardCard = ({ count, label, gradient, iconSrc }) => {
  return (
    <div data-layer="Group 101" className="Group101">
      <div
        data-layer="Rectangle 87"
        className="Rectangle87"
        style={{ background: gradient }} // Dynamically apply the gradient
      />
      <img
        data-layer="Open Box"
        className="OpenBox"
        src={iconSrc}
        alt={label}
      />
      <div data-layer="Count" className="Number20">
        {count}
      </div>
      <div data-layer="Label" className="UnclaimedItems">
        {label}
      </div>
    </div>
  );
};

export default DashboardCard;