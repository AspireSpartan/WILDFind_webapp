import React from "react";
import "./SearchBar_h.css";
import SearchIcon from "../../../assets/images/Search.png";
import Line from "../../../assets/images/Line1.png";
import Import from "../../../assets/images/Import.png";
import Export from "../../../assets/images/Export.png";

const SearchBar = () => {
  return (
    <div className="upper-container">
      <div className="search-bar">
        <img src={SearchIcon} alt="Search-icon" className="search-icon" />
        <img src={Line} alt="Line" className="line-s" />
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="status-bar">
        <input type="text" placeholder="Status" className="status-input" />
      </div>
      <div className="buttons-search">
        <button type="button" className="import"><img src={Import} alt="Import" /></button>
        <button type="submit" className="export"><img src={Export} alt="Export" /></button>
      </div>
    </div>
  );
};

export default SearchBar;