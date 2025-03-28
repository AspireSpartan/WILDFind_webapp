import React from "react";
import "./HistoryPage.css";
import SearchBar from "../HistoryComponent/SearchBar_h";
import HistoryListContainer from "../HistoryComponent/HistoryListContainer";

const HistoryPage = ()  =>  {
    return <div className="history-page">
        <div className="content-area">
            <SearchBar />
            <HistoryListContainer/>
        </div>
    </div>
}

export default HistoryPage;