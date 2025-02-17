// src/App.jsx
import '../User_Dashboard/dashboard.css';
import backgroundImage from '../../../assets/images/background-cit.png';
import backgroundImage2 from '../../../assets/images/Header_Crack.png';
import backgroundImage3 from '../../../assets/images/Bottom_Rectangle_Crack.png';
import logoImage from '../../../assets/images/CITLOGO.png';
import gradient1 from '../../../assets/images/gradient1.png';
import gradient2 from '../../../assets/images/gradient2.png';
import gradient3 from '../../../assets/images/gradient3.png';

function App() {
  return (
    <div className="app-container">
        <div 
          className="background-image-container"
          style={{ backgroundImage: `url(${backgroundImage})` }} // Background image
        >
          {/* Move background-image-container2 outside of background-image-container */}
        </div>

        <div 
          className="background-image-container2"
          style={{ backgroundImage: `url(${backgroundImage2})` }} // Correct property
        ></div>

        <div className="tint"></div> {/* Tint overlay */}


      <header className="header">
      <div className="logo-placeholder">
          <img src={logoImage} alt="CIT Logo" className="logo-image" /> {/* Corrected Logo */}
        </div>
      </header>

      {/* Main Content with "Luckiest Guy" Font */}
      <main className="main-content">
        <div className="group-29">
          <div className="wild-text">WILD</div>
          <div className="find-text">FIND</div>
        </div>

        {/* RECTANGLE COMPONENT */}
        <div data-layer="Rectangle 55" className="rectangle-55"></div>

        <div className="group-30">
          <div className="wild-text2">WILD</div>
          <div className="find-text2">FIND</div>
        </div>



        {/* GRADIENT PLACEHOLDERS */}
        <div className="gradient-placeholder gradient1">
          <img src={gradient1} alt="Gradient 1" />
        </div>
        <div className="gradient-placeholder gradient2">
          <img src={gradient2} alt="Gradient 2" />
        </div>
        <div className="gradient-placeholder gradient3">
          <img src={gradient3} alt="Gradient 3" />
        </div>

      </main>

      <div 
          className="background-image-container3"
          style={{ backgroundImage: `url(${backgroundImage3})` }} // ✅ Corrected property name
        ></div>

      <footer className="footer">
        {/* Your footer content */}
        {/*<p>&copy; 2024 My Website</p>*/}
      </footer>
    </div>
  );
}

export default App;