import React from "react";
import "./SearchBar_h.css";
import SearchIcon from "../../../assets/images/Search.png";
import Line from "../../../assets/images/Line1.png";
import Import from "../../../assets/images/Import.png";
import Export from "../../../assets/images/Export.png";

const SearchBar = () => {
  return (
    <div className="upper-containerview">
      <div className="search-barview">
        <img src={SearchIcon} alt="Search-icon" className="search-iconview" />
        <img src={Line} alt="Line" className="line-s-view" />
        <input type="text" placeholder="Search" className="search-inputview" />
      </div>
      <div className="status-bar-view">
        <input type="text" placeholder="Status" className="status-inputview" />
      </div>
      <div className="buttons">
        <button type="button" className="importview"><img src={Import} alt="Import" /></button>
        <button type="submit" className="exportview"><img src={Export} alt="Export" /></button>
      </div>
    </div>
  );
};

export default SearchBar;