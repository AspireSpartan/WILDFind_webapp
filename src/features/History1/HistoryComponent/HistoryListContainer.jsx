import React from "react";
import "./HistoryListContainer.css";
import HistoryListC from "./HistoryListC";
import HistoryListP from "./HistoryListP";

const HistoryListContainer = () => {
  return (
    <div className="history-container">
      <div className="history-header">HISTORY</div>
      <HistoryListC/>
      <HistoryListP/>
      <HistoryListC/>
      <HistoryListP/>
      <HistoryListP/>
      <HistoryListC/>
      <HistoryListC/>
      <HistoryListC/>
      <HistoryListP/>
      <HistoryListC/>
    </div>
  );
};

export default HistoryListContainer;