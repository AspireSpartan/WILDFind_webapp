import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaEdit,
  FaEye,
  FaClipboardList,
  FaHistory,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import headerImage from "/src/assets/images/head1.png";
import "./request.css";

const Request = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const squareCardData = [
    { title: "Title", deviceId: "01", imageSrc: "https://placehold.co/31x45" },
    { title: "Title", deviceId: "02", imageSrc: "https://placehold.co/31x45" },
  ];

  return (
    <div className="request-container">
      <header className="request-header">
        <img
          src={headerImage}
          alt="CIT University Logo"
          className="header-image"
        />
      </header>

      <div className="white-bar">
        <div className="menu-icon" onClick={toggleSidebar}>
          <FaBars />
        </div>
        <div className="admin-section">
          <div className="notification-icon">
            <FaBell />
            <span className="red-dot"></span>
          </div>
          <div className="profile-icon">
            <MdAccountCircle className="profile-image" />
          </div>
          <span className="admin-name">Admin name</span>
        </div>
      </div>

      <div className="container">
        <h1>Retrieval Request</h1>
        <div className="items-grid">
          {squareCardData.map((card, index) => (
            <div key={index} className="square-card">
              <h3 className="square-card-title">{card.title}</h3>
              <p className="square-card-device">Device: {card.deviceId}</p>
              <button
                className="square-card-button"
                onClick={() => navigate("/urf")}
              >
                Retrieve
              </button>
              <img
                src={card.imageSrc}
                alt="Device Icon"
                className="square-card-icon"
              />
            </div>
          ))}
        </div>
      </div>

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        {[FaHome, FaEdit, FaEye, FaClipboardList, FaHistory, FaSignOutAlt].map(
          (Icon, index) => (
            <div key={index} className="sidebar-item">
              <Icon />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Request;
