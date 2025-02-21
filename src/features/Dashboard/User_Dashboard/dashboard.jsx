import "./dashboard.css";
import React, { useState } from "react";
import backgroundImage from '../../../assets/images/background-cit.png';
import backgroundImage2 from '../../../assets/images/Header_Crack.png';
import backgroundImage3 from '../../../assets/images/Bottom_Rectangle_Crack.png';
import logoImage from '../../../assets/images/CITLOGO.png';
import Card from './Cards/Card'; 
import SquareCard from './SquareCards/SquareCard'; 
import WaveSvg from './WaveSvg/WaveSvg'; 
import FloatBox from './Floater/RectangleCard'; 
import SearchBox from './SearchBox/SearchBox'; 

const Dashboard = () => {
  const [isHidden, setIsHidden] = useState(true); // Start hidden

  const toggleOpacity = () => {
    setIsHidden((prev) => !prev);
  };

  const cardData = [
    { title: "Category 1", count: "01", imageSrc: "https://placehold.co/90x90" },
    { title: "Category 2", count: "02", imageSrc: "https://placehold.co/90x90" },
    { title: "Category 3", count: "03", imageSrc: "https://placehold.co/90x90" },
    { title: "Category 4", count: "04", imageSrc: "https://placehold.co/90x90" },
    { title: "Category 5", count: "05", imageSrc: "https://placehold.co/90x90" },
    { title: "Category 6", count: "06", imageSrc: "https://placehold.co/90x90" },
    { title: "Category 7", count: "07", imageSrc: "https://placehold.co/90x90" },
    { title: "Category 8", count: "08", imageSrc: "https://placehold.co/90x90" },
    { title: "Category 9", count: "09", imageSrc: "https://placehold.co/90x90" },
  ];

  const squareCardData = [
    { title: "Title", deviceId: "01", imageSrc: "https://placehold.co/31x45" },
    { title: "Title", deviceId: "02", imageSrc: "https://placehold.co/31x45" },
    { title: "Title", deviceId: "03", imageSrc: "https://placehold.co/31x45" },
    { title: "Title", deviceId: "04", imageSrc: "https://placehold.co/31x45" },
    { title: "Title", deviceId: "05", imageSrc: "https://placehold.co/31x45" },
    { title: "Title", deviceId: "06", imageSrc: "https://placehold.co/31x45" },
    { title: "Title", deviceId: "07", imageSrc: "https://placehold.co/31x45" },
    { title: "Title", deviceId: "08", imageSrc: "https://placehold.co/31x45" },

  ];

  return (
    <div className="dashboard-container"> {/* Main container */}
      <div className="dashboard-title">
        <img src={logoImage} alt="CIT Logo" className="logo-image" /> {/* Corrected Logo */}
      </div>

      {/* Background Wrapper to prevent overlapping */}
      <div className="background-wrapper">
        <div
          className="background-image-container"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        <div className="tint"></div> {/* Tint overlay */}

        <div className="background-image-container2">
          <img src={backgroundImage2} alt="header_crack" className="Header_Crack-img" />
          <div className="group-29">
            <div className="wild-text">WILD</div>
            <div className="find-text">FIND</div>
          </div>

          <div className="FindYourLostItem">
            <div className="find-your-lost-items">Find your lost items</div>
            <div className="lost-item-each-category">Lost item each category</div>
          </div>

          <div className="group-component">
            {cardData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>

        </div>
      </div>

      <div className="items-section">
        <div className="background-image-container3">
          <img src={backgroundImage3} alt="bottom_rectangle" className="Bottom_Rectangle_Crack-img" />
        </div> 

          <div className="wildfind-container2">
            <div className="wild-text2">WILD</div>
            <div className="find-text2">fiND</div>
          </div>

        <div className={`rectangle-container ${isHidden ? "hidden" : ""}`}>
          <FloatBox />
        </div>
        <div className="Wave_Svg">
        <WaveSvg />
        </div>

        <div className="items-header">
          <h2 className="items-title">Items Lost</h2>
          <div className="search-box">
          <SearchBox toggleOpacity={toggleOpacity} />
          </div>
        </div>

        <div className="items-grid">
          {squareCardData.map((squareCard, index) => (
            <SquareCard key={index} {...squareCard} onRetrieve={() => console.log("Retrieve button clicked")} />
          ))}
        </div>;
      </div>
    </div>
  );
};

export default Dashboard;