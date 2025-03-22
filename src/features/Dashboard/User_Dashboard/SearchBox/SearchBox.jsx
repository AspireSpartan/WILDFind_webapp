import "./SearchBox.css";
import React from "react";
import FloatBox from '../Floater/RectangleCard'; 

const SearchBox = ({ toggleOpacity, searchInput, setSearchInput }) => {

  return (
    <div className="search-bar">
      <div className="search-container">
      <input
          type="text"
          className="search-input"
          placeholder="Search Item here"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        
        {/* Search Icon */}
        <div className="search-icon">
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_286_153)">
              <path
                d="M17.5 18.375L13.875 14.5687M15.8333 9.625C15.8333 13.491 12.8486 16.625 9.16667 16.625C5.48477 16.625 2.5 13.491 2.5 9.625C2.5 5.75901 5.48477 2.625 9.16667 2.625C12.8486 2.625 15.8333 5.75901 15.8333 9.625Z"
                stroke="#900B09"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_286_153">
                <rect width="20" height="21" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Filter Icon */}
        <div className="filter-icon" onClick={toggleOpacity}>
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_286_151)">
              <path
                d="M18.3337 2.625H1.66699L8.33366 10.9025V16.625L11.667 18.375V10.9025L18.3337 2.625Z"
                stroke="#900B09"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_286_151">
                <rect width="20" height="21" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Separator Line */}
        <div className="separator"></div>
      </div>
    </div>
  );
};

export default SearchBox;
