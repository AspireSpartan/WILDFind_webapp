import "./dashboard.css";
import backgroundImage from '../../../assets/images/background-cit.png';
import backgroundImage2 from '../../../assets/images/Header_Crack.png';
import backgroundImage3 from '../../../assets/images/Bottom_Rectangle_Crack.png';
import logoImage from '../../../assets/images/CITLOGO.png';
import Card1 from './Cards/Card1/Card'; // ✅ Corrected import
import Card2 from './Cards/Card2/Card'; // ✅ Corrected import
import Card3 from './Cards/Card3/Card'; // ✅ Corrected import
import Card4 from './Cards/Card4/Card'; // ✅ Corrected import
import Card5 from './Cards/Card5/Card'; // ✅ Corrected import
import Card6 from './Cards/Card6/Card'; // ✅ Corrected import
import Card7 from './Cards/Card7/Card'; // ✅ Corrected import
import Card8 from './Cards/Card8/Card'; // ✅ Corrected import
import Card9 from './Cards/Card9/Card'; // ✅ Corrected import
import SearchBox from '../User_Dashboard/SearchBox/SearchBox'; // ✅ Capitalized properly
import SquareCard1 from './SquareCard/SquareCard1/SquareCard'; // ✅ Capitalized properly
import SquareCard2 from './SquareCard/SquareCard2/SquareCard'; // ✅ Capitalized properly
import SquareCard3 from './SquareCard/SquareCard3/SquareCard'; // ✅ Capitalized properly
import SquareCard4 from './SquareCard/SquareCard4/SquareCard'; // ✅ Capitalized properly
import SquareCard5 from './SquareCard/SquareCard5/SquareCard'; // ✅ Capitalized properly
import SquareCard6 from './SquareCard/SquareCard6/SquareCard'; // ✅ Capitalized properly
import SquareCard7 from './SquareCard/SquareCard7/SquareCard'; // ✅ Capitalized properly
import SquareCard8 from './SquareCard/SquareCard8/SquareCard'; // ✅ Capitalized properly


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
          <Card1 
          title="Title" 
          count="01" 
          imageSrc="https://placehold.co/90x90" 
          />
          <Card2 
          title="Title" 
          count="02" 
          imageSrc="https://placehold.co/90x90" 
          />
          <Card3 
          title="Title" 
          count="03" 
          imageSrc="https://placehold.co/90x90" 
          />
          <Card4 
          title="Title" 
          count="04" 
          imageSrc="https://placehold.co/90x90" 
          />
          <Card5 
          title="Title" 
          count="05" 
          imageSrc="https://placehold.co/90x90" 
          />
          <Card6 
          title="Title" 
          count="06" 
          imageSrc="https://placehold.co/90x90" 
          />
          <Card7 
          title="Title" 
          count="07" 
          imageSrc="https://placehold.co/90x90" 
          />
          <Card8 
          title="Title" 
          count="08" 
          imageSrc="https://placehold.co/90x90" 
          />
          <Card9 
          title="Title" 
          count="09" 
          imageSrc="https://placehold.co/90x90" 
          />
          </div>
        </div>
      </div>
      {/* Uncomment this section if needed */}
      {/* <div className="background-image-container3">
        <img src={backgroundImage3} alt="bottom_rectangle" className="Bottom_Rectangle_Crack-img" />
      </div> */}

      <div className="items-section">
        <div className="items-header">
          <h2 className="items-title">Items Lost</h2>
          <div className="search-box">
            <SearchBox />
          </div>
        </div>

        <div className="items-grid">
          {/* square components render here */}
          <SquareCard1 
            title="Assault Rifle" 
            deviceId="01" 
            imageSrc="https://placehold.co/31x45"
            onRetrieve={() => console.log("Retrieve button clicked")}
          />
          <SquareCard2 
            title="Sniper Rifle" 
            deviceId="02" 
            imageSrc="https://placehold.co/31x45"
            onRetrieve={() => console.log("Retrieve button clicked")}
          />
          <SquareCard3 
            title="Machine Gun" 
            deviceId="03" 
            imageSrc="https://placehold.co/31x45"
            onRetrieve={() => console.log("Retrieve button clicked")}
          />
          <SquareCard4 
            title="Submachine Gun" 
            deviceId="03" 
            imageSrc="https://placehold.co/31x45"
            onRetrieve={() => console.log("Retrieve button clicked")}
          />
          <SquareCard5 
            title="Side Arm: Pistol" 
            deviceId="04" 
            imageSrc="https://placehold.co/31x45"
            onRetrieve={() => console.log("Retrieve button clicked")}
          />
          <SquareCard6 
            title="Tac-Eqpment" 
            deviceId="05" 
            imageSrc="https://placehold.co/31x45"
            onRetrieve={() => console.log("Retrieve button clicked")}
          />
          {/* <SquareCard7
            title="Laptop" 
            deviceId="00" 
            imageSrc="https://placehold.co/31x45"
            onRetrieve={() => console.log("Retrieve button clicked")}
          />
          <SquareCard8
            title="Laptop" 
            deviceId="00" 
            imageSrc="https://placehold.co/31x45"
            onRetrieve={() => console.log("Retrieve button clicked")}
          /> */}
            
        </div>
      </div>
    </div>
  );
};

export default Dashboard;