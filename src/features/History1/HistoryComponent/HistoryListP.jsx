import React from "react";
import "./HistoryListP.css";
import pIcon from "../../../assets/images/P.png";
import Line1P from "../../../assets/images/Line1.png";
import Line2P from "../../../assets/images/Line1.png";

const HistoryListP = () => {
  return (
      <div className="pending-container">
        <img src={pIcon} alt="P-icon" className="p-icon" />
        <img src={Line1P} alt="Line1-p" className="line1-h-p" />
        <div className="NameId-container-p">
          <div className="name-h-p">Name</div>
          <div className="Id-num-h-p">#</div>
        </div>
        <img src={Line2P} alt="Line2-p" className="line2-h-p" />
        <div className="details1-container-h-p">
          <div className="item-type-h-p">Laptop</div>
          <div className="description-h-p">and completing requests efficiently, ensuring timely communication and updates. With customizable featuresand robust support, YourRequest y.</div>
            <div className="details2-container-h-p">
              <div className="item-category-h-p">Item Category: </div>
              <div className="date-found-h-p">Date Found: </div>
              <div className="location-found-h-p">Location Found: </div>
            </div>
        </div>
        <div className="image-placeholder-h-p">Image</div>
      </div>
  );
};

export default HistoryListP;