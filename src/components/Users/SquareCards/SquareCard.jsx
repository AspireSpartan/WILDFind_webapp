import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SquareCard.css";
import PropTypes from "prop-types"; // Import prop-types

const SquareCard = ({ title = "Unknown Item", deviceId = "N/A", dateLost = "Not Available", imageSrc, category = "Miscellaneous" }) => {

    const navigate = useNavigate(); // Initialize navigate function

    const handleRetrieveClick = () => {
        navigate("/request-form", { state: { title, dateLost, category } });
    };

    return (
        <div className="square-card">
            <div className="square-card-content">
                <h3 className="square-card-title">{title}</h3>
                <p className="square-card-device">Date Lost: {dateLost}</p>
                <button className="square-card-button" onClick={handleRetrieveClick}>
                    Retrieve
                </button>
                <img 
                    src={imageSrc || "/default-image.png"} // Provide a fallback image
                    alt="Device Icon" 
                    className="square-card-icon" 
                />
            </div>
        </div>
    );
};

// ✅ Add PropTypes to catch type errors
SquareCard.propTypes = {
    title: PropTypes.string.isRequired,
    deviceId: PropTypes.string.isRequired, // Ensure deviceId is always a string
    dateLost: PropTypes.string.isRequired, // Ensure dateLost is a string (date in YYYY-MM-DD format)
    imageSrc: PropTypes.string.isRequired, // Ensure imageSrc is a valid string
    category: PropTypes.string.isRequired,
};

export default SquareCard;

