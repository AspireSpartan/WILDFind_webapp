import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SquareCard.css";

const SquareCard = ({ title, deviceId, dateLost, imageSrc }) => {
    const navigate = useNavigate(); // Initialize navigate function

    const handleRetrieveClick = () => {
        navigate("/urf"); // Change "/next-page" to your target route
    };

    return (
        <div className="square-card">
            <div className="square-card-content">
                <h3 className="square-card-title">{title}</h3>
                <p className="square-card-device">Date Lost: {dateLost}</p>
                <button className="square-card-button" onClick={handleRetrieveClick}>
                    Retrieve
                </button>
                <img src={imageSrc} alt="Device Icon" className="square-card-icon" />
            </div>
        </div>
    );
};

export default SquareCard;