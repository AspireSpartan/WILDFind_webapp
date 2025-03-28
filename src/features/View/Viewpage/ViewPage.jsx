import React from "react";
import "./ViewPage.css";
import SearchBar from "../ViewComponent/SearchBar_h";
import ViewListContainer from "../ViewComponent/ViewListContainer";

const ViewPage = ()  =>  {
    return <div className="View-page">
        <div className="contentArea">
        <div className="Viewunclaimed-header">VIEW UNCLAIMED</div>
            <SearchBar />
            <ViewListContainer/>
        </div>
    </div>
}

export default ViewPage;