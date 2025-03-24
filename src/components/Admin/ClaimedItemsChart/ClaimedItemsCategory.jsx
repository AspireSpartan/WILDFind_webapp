import React from "react";
import "./ClaimedItemsCategory.css";

const ClaimedItemsCategory = () => {
  const categories = [
    { name: "Electronics", claimed: 11, total: 22, percentage: 50 },
    { name: "Clothing", claimed: 6, total: 15, percentage: 39 },
    { name: "Accessories", claimed: 7, total: 10, percentage: 70 },
    { name: "Bags", claimed: 2, total: 5, percentage: 45 },
    { name: "Stationery", claimed: 15, total: 30, percentage: 49 },
    { name: "Personal", claimed: 10, total: 22, percentage: 88 },
    { name: "Sport equipment", claimed: 10, total: 11, percentage: 90 },
  ];

  return (
    <div className="claimed-items-category-container">
      <div className="claimed-items-header">
        <h2>Claimed Items / Category</h2>
        <span className="time-period">This Year</span>
      </div>
      <div className="categories-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <span className="category-name">{category.name}</span>
            <div className="progress-bar">
              <div
                className="progress-filled"
                style={{ width: `${category.percentage}%` }}
              >
                <span className="percentage">{`${category.percentage}%`}</span>
              </div>
            </div>
            <span className="fraction">{`${category.claimed}/${category.total}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClaimedItemsCategory;