import React from "react";
import "./HistoryListC.css";
import cIcon from "../../../assets/images/C.png";
import Line1C from "../../../assets/images/Line1.png";
import Line2C from "../../../assets/images/Line1.png";

const HistoryListC = () => {
  return (
      <div className="claim-container">
        <img src={cIcon} alt="C-icon" className="c-icon" />
        <img src={Line1C} alt="Line1C" className="line1-h-c" />
        <div className="NameId-container-c">
          <div className="name-h-c">Gil Bernard F. Maglinte</div>
          <div className="Id-num-h-c">#</div>
        </div>
        <img src={Line2C} alt="Line2C" className="line2-h-c" />
        <div className="details1-container-h-c">
          <div className="item-type-h-c">Laptop</div>
          <div className="description-h-c">and completing requests efficiently, ensuring timely communication and updates. With customizable featuresand robust support, YourRequest y.</div>
            <div className="details2-container-h-c">
              <div className="item-category-h-c">Item Category: </div>
              <div className="date-found-h-c">Date Found: </div>
              <div className="location-found-h-c">Location Found: </div>
            </div>
        </div>
        <div className="image-placeholder-h-c">Image</div>
      </div>
  );
};

export default HistoryListC;