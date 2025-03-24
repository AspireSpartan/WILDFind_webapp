  import React, { useState } from "react";
  import "./RectangleCard.css";

  const categories = [
    { id: "clothing", label: "Clothing", icon: "👖" },
    { id: "electronics", label: "Electronics", icon: "📱" },
    { id: "personal", label: "Personal", icon: "👛" },
    { id: "school", label: "School", icon: "📚" },
  ];

  const RectangleCard = () => {
    const [activeFilter, setActiveFilter] = useState("electronics");

    return (
      <div className="rectangle-container">
        <div className="rectangle-box">
          <h3 className="filter-title">Add filter</h3>
          <div className="items-gridv2">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`filter-item ${
                  activeFilter === category.id ? "active" : ""
                }`}
                onClick={() => setActiveFilter(category.id)}
              >
                <span className="icon">{category.icon}</span>
                <span className="filter-label">{category.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default RectangleCard;
