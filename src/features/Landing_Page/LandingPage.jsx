import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import backgroundImage from "../../assets/images/background-cit.png";
import LandingPagebtn  from './Button/btn-dashboard'; 

const LandingPage = () => {
    const navigate = useNavigate();
  return (
    // Main container
        <div className="background-wrapperv2">
            <div className="HomePage">
                <img src={backgroundImage} alt="background-cit" className="background-cit-img" />
            </div>
        
        
            <div className="Frame10">
                <div className="WildcatsWildfind">
                    <span className="wildcats-text">WILDCATS:</span>
                    <span className="wildfind-text">WILDFIND</span>
                </div>
                <div className="WelcomeTeknoy">Welcome, Teknoy!</div>
                    <div className="LostSomething">
                        Lost something? You're in the right place! Our lost and found service
                        helps connect lost items with their rightful owners.
                    </div>
            </div>
            <div className="button">
            <LandingPagebtn onClick={() => navigate("/dashboard")} /> {/* ✅ Navigate on click */}
            </div>
        </div>
  );
};

export default LandingPage;