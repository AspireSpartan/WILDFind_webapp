import "./dashboard.css";
import backgroundImage from '../../../assets/images/background-cit.png';
import backgroundImage2 from '../../../assets/images/Header_Crack.png';
import backgroundImage3 from '../../../assets/images/Bottom_Rectangle_Crack.png';
import logoImage from '../../../assets/images/CITLOGO.png';
import Card1 from '../User_Dashboard/cards/group39'; // ✅ Corrected import
import Card2 from '../User_Dashboard/cards/group40'; // ✅ Corrected import
import Card3 from '../User_Dashboard/cards/group41'; // ✅ Corrected import
import Card4 from '../User_Dashboard/cards/group42'; // ✅ Corrected import
import Card5 from '../User_Dashboard/cards/group43'; // ✅ Corrected import
import Card6 from '../User_Dashboard/cards/group44'; // ✅ Corrected import
import Card7 from '../User_Dashboard/cards/group45'; // ✅ Corrected import
import Card8 from '../User_Dashboard/cards/group46'; // ✅ Corrected import
import Card9 from '../User_Dashboard/cards/group47'; // ✅ Corrected import
import Card10 from '../User_Dashboard/cards/group48'; // ✅ Corrected import

const Dashboard = ({ items = [] }) => {
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

          <div className="group-component">
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
            <Card5 />
            <Card6 />
            <Card7 />
            <Card8 />
            <Card9 />
            <Card10 />
          </div>

        </div>


      </div>

      {/* Uncomment this section if needed */}
      {/* <div className="background-image-container3">
        <img src={backgroundImage3} alt="bottom_rectangle" className="Bottom_Rectangle_Crack-img" />
      </div> */}

      <div className="items-section">
        <h2 className="items-title">Items Lost</h2>

        <div className="items-grid">
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className="item-card">
                <h3>{item.name}</h3>
                <p>Device: {item.device || "Unknown"}</p>
                <button className="retrieve-btn">Retrieve</button>
              </div>
            ))
          ) : (
            <p className="no-items">No items found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;