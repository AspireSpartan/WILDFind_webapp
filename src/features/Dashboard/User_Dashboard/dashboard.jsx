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
import Card from '../../../components/Users/Cards/Card'; 
import SquareCard from '../../../components/Users/SquareCards/SquareCard'; 
import WaveSvg from '../../../components/Users/WaveSvg/WaveSvg'; 
import FloatBox from '../../../components/Users/Floater/RectangleCard'; 
import SearchBox from '../../../components/Users/SearchBox/SearchBox'; 

const Dashboard = () => {
  const [isHidden, setIsHidden] = useState(true);
  const toggleOpacity = () => {
    setIsHidden((prev) => !prev);
  };

  const [cardData, setCardData] = useState([
    { title: "Electronics", count: "00", imageSrc: image1 },
    { title: "Clothing & Wearables", count: "00", imageSrc: image2 },
    { title: "Bags & Containers", count: "00", imageSrc: image3 },
    { title: "Documents & ID's", count: "00", imageSrc: image4 },
    { title: "Sports & Fitness Gear", count: "00", imageSrc: image5 },
    { title: "Medical Items", count: "00", imageSrc: image6 },
    { title: "Personal Accessories", count: "00", imageSrc: image7 },
    { title: "Household Items", count: "00", imageSrc: image8 },
    { title: "Miscellaneous", count: "00", imageSrc: image9 },
  ]);

  const [searchInput, setSearchInput] = useState(""); // ✅ State for search input
  const [squareCardData, setSquareCardData] = useState([]); 
  const [filteredData, setFilteredData] = useState([]); // ✅ Stores filtered items

  useEffect(() => {
    const itemsRef = ref(database, "reportedItems/Items");

    const unsubscribe = onValue(itemsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const categoryCounts = {};
        const squareCards = [];

        // Loop through Firebase data
        Object.values(data).forEach((item) => {
          const category = item["Item Category"];
          const itemName = item["Item Name"];
          const itemId = item["ID"];

          // Count each category for `cardData`
          if (category) {
            categoryCounts[category] = (categoryCounts[category] || 0) + 1;
          }

          // Populate `squareCardData`
          if (itemName && itemId) {
            squareCards.push({
              title: itemName,
              deviceId: itemId.toString().padStart(2, "0"),
              imageSrc: "https://placehold.co/31x45", // Placeholder image
            });
          }
        });

        // ✅ Update `cardData` dynamically based on category counts
        setCardData((prevCardData) =>
          prevCardData.map((card) => ({
            ...card,
            count: categoryCounts[card.title]
              ? categoryCounts[card.title].toString().padStart(2, "0")
              : "00",
          }))
        );

        setSquareCardData(squareCards); // ✅ Store all items
        setFilteredData(squareCards); // ✅ Initially, filteredData = all items
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  // ✅ Filter items based on `searchInput`
  useEffect(() => {
    if (searchInput.trim() === "") {
      setFilteredData(squareCardData); // Show all if search is empty
    } else {
      const filtered = squareCardData.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchInput, squareCardData]);

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
          <SearchBox 
              toggleOpacity={toggleOpacity} 
              searchInput={searchInput} 
              setSearchInput={setSearchInput} 
            />
          </div>
        </div>

        <div className="items-grid">
          {filteredData.map((squareCard, index) => (
            <SquareCard key={index} {...squareCard} onRetrieve={() => console.log("Retrieve button clicked")} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;