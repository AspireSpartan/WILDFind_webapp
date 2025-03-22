import "./dashboard.css";
import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../../services/firebase-config"; // Import database instance
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
  const [isHidden, setIsHidden] = useState(true);
  const [categoryCounts, setCategoryCounts] = useState({});
  const toggleOpacity = () => {
    setIsHidden((prev) => !prev);
  };

  // Declare cardData state FIRST to avoid using setCardData before it's defined
  const [cardData, setCardData] = useState([
    { title: "Electronics", count: "0", imageSrc: image1 },
    { title: "Clothing & Wearables", count: "0", imageSrc: image2 },
    { title: "Bags & Containers", count: "0", imageSrc: image3 },
    { title: "Documents & ID's", count: "0", imageSrc: image4 },
    { title: "Sports & Fitness Gear", count: "0", imageSrc: image5 },
    { title: "Medical Items", count: "0", imageSrc: image6 },
    { title: "Personal Accessories", count: "0", imageSrc: image7 },
    { title: "Household Items", count: "0", imageSrc: image8 },
    { title: "Miscellaneous", count: "0", imageSrc: image9 },
  ]);

  // Fetch counts from Firebase
  useEffect(() => {
    const itemsRef = ref(database, "reportedItems/Items");
  
    onValue(itemsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const categoryCounts = {};

        // Loop through all items and count the categories
        Object.values(data).forEach((item) => {
          const category = item["Item Category"];
          if (category) {
            categoryCounts[category] = (categoryCounts[category] || 0) + 1;
          }
        });

        // Update the state with the new counts
        setCardData((prevCardData) =>
          prevCardData.map((card) => ({
            ...card,
            count: categoryCounts[card.title] ? categoryCounts[card.title].toString().padStart(2, "0") : "00",
          }))
        );
      }
    });

    return () => {}; // Cleanup function (optional)
  }, []);

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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;