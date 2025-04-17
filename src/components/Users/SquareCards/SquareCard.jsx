import React from "react";
import { useNavigate } from "react-router-dom";
import "./SquareCard.css";
import PropTypes from "prop-types";

const SquareCard = ({ itemId, title = "Unknown Item", deviceId = "N/A", dateLost = "Not Available", imageSrc, category = "Miscellaneous" }) => {
    const navigate = useNavigate();

    const handleRetrieveClick = () => {
        console.log("Item ID before navigation:", itemId); // Added console.log
        navigate("/request-form", { state: { itemId, title, dateLost, category } });
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
                    src={imageSrc || "/default-image.png"}
                    alt="Device Icon"
                    className="square-card-icon"
                />
            </div>
        </div>
    );
};

SquareCard.propTypes = {
    itemId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    deviceId: PropTypes.string.isRequired,
    dateLost: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
};

export default SquareCard;