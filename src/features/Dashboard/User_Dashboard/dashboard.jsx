import "./dashboard.css";
import backgroundImage from '../../../assets/images/background-cit.png';
import backgroundImage2 from '../../../assets/images/Header_Crack.png';
import backgroundImage3 from '../../../assets/images/Bottom_Rectangle_Crack.png';
import logoImage from '../../../assets/images/CITLOGO.png';

const Dashboard = ({ items = [] }) => {
  return (
    <div className="dashboard-container"> {/*main container*/}
        
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
        </div>

        <div>
          {/*className="background-image-container3"*/}
          {/*<img src={backgroundImage3} alt="bottom_rectangle" className="Bottom_Rectangle_Crack-img" />*/}
        </div>
      </div>

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
