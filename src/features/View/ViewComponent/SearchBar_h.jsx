import React, { useState } from "react";
import "./SearchBar_h.css";
import SearchIcon from "../../../assets/images/Search.png";
import Line from "../../../assets/images/Line1.png";
import Import from "../../../assets/images/Import.png";
import Export from "../../../assets/images/Export.png";

const SearchBar = ({ onStatusChange }) => { // Receive a callback prop
  const [selectedStatus, setSelectedStatus] = useState("Status");

  const statusOptions = [
    "Claimed Items",
    "Unclaimed Items",
    "Pending Request"
  ];

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    if (onStatusChange) {
      onStatusChange(status); // Call the callback function with the new status
    }
  };

  return (
    <div className="upper-containerview">
      <div className="search-barview">
        <img src={SearchIcon} alt="Search-icon" className="search-iconview" />
        <img src={Line} alt="Line" className="line-s-view" />
        <input type="text" placeholder="Search" className="search-inputview" />
      </div>
      <div className="status-bar-view">
        <div className="dropdown-container">
          <div className="dropdown-selected">
            {selectedStatus}
            <span className="dropdown-arrow">▼</span>
          </div>
          <div className="dropdown-menu">
            {statusOptions.map((status, index) => (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => handleStatusChange(status)}
              >
                {status}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="buttons">
        <button type="button" className="importview">
          <img src={Import} alt="Import" />
        </button>
        <button type="submit" className="exportview">
          <img src={Export} alt="Export" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;