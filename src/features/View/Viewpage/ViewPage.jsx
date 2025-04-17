import React, { useState } from "react";
import "./ViewPage.css";
import SearchBar from "../ViewComponent/SearchBar_h";
import ViewListContainer from "../ViewComponent/ViewListContainer";

const ViewPage = ()  =>  {
    const [selectedStatus, setSelectedStatus] = useState("");

    const handleStatusChange = (status) => {
      setSelectedStatus(status);
    };
    return <div className="View-page">
        <div className="contentArea">
        <div className="Viewunclaimed-header">VIEW UNCLAIMED</div>
        <SearchBar onStatusChange={handleStatusChange} />
        <ViewListContainer selectedStatus={selectedStatus} />
        </div>
    </div>
}

export default ViewPage;