import "./dashboard.css";
import React, { useState } from "react";
import backgroundImage from '../../../assets/images/background-cit.png';
import backgroundImage2 from '../../../assets/images/Header_Crack.png';
import backgroundImage3 from '../../../assets/images/Bottom_Rectangle_Crack.png';
import logoImage from '../../../assets/images/CITLOGO.png';
import image1 from '../../../assets/images/Multiple Devices.jpg';
import image2 from '../../../assets/images/Jumper.jpg';
import image3 from '../../../assets/images/Shopping Bag Full.jpg';
import image4 from '../../../assets/images/Name Tag.jpg';
import image5 from '../../../assets/images/Sports Teams.jpg';
import image6 from '../../../assets/images/Medical ID.jpg';
import image7 from '../../../assets/images/Bracelet.jpg';
import image8 from '../../../assets/images/Family.jpg';
import image9 from '../../../assets/images/More.jpg';
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
    { title: "Electronics", count: "01", imageSrc: image1 },
    { title: "Clothing & Wearables", count: "02", imageSrc: image2 },
    { title: "Bags & Containers", count: "03", imageSrc: image3 },
    { title: "Documents & ID's", count: "04", imageSrc: image4 },
    { title: "Sports & Fitness Gear", count: "05", imageSrc: image5 },
    { title: "Medical Items", count: "06", imageSrc: image6 },
    { title: "Personal Accessories", count: "07", imageSrc: image7 },
    { title: "Household Items", count: "08", imageSrc: image8 },
    { title: "Miscelleneous", count: "09", imageSrc: image9 },
  ];

  const squareCardData = [
    { title: "Phone", deviceId: "01", imageSrc: "https://placehold.co/31x45" },
    { title: "Laptop", deviceId: "02", imageSrc: "https://placehold.co/31x45" },
    { title: "Arduino", deviceId: "03", imageSrc: "https://placehold.co/31x45" },
    { title: "Breadboard", deviceId: "04", imageSrc: "https://placehold.co/31x45" },
    { title: "RJ45", deviceId: "05", imageSrc: "https://placehold.co/31x45" },
    { title: "Tumbler", deviceId: "06", imageSrc: "https://placehold.co/31x45" },
    { title: "Book", deviceId: "07", imageSrc: "https://placehold.co/31x45" },
    { title: "Mouse", deviceId: "08", imageSrc: "https://placehold.co/31x45" },

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