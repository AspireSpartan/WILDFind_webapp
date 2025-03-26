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
import ContentCards from "../Request/ContentCards/ContentCards"; // Already imported

const Request = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const lostItems = [
    {
      image: "https://placehold.co/299x185",
      category: "Laptop",
      name: "John Doe",
      phone: "123-456-7890",
      dateLost: "March 20, 2025",
      description: "Lost near the university library. Contact me if found.",
    },
    {
      image: "https://placehold.co/299x185",
      category: "Phone",
      name: "Jane Smith",
      phone: "987-654-3210",
      dateLost: "March 18, 2025",
      description: "Silver laptop with a blue sticker on the back.",
    },
    {
      image: "https://placehold.co/299x185",
      category: "Phone",
      name: "Jane Smith",
      phone: "987-654-3210",
      dateLost: "March 18, 2025",
      description: "Silver laptop with a blue sticker on the back.",
    },
    {
      image: "https://placehold.co/299x185",
      category: "Phone",
      name: "Jane Smith",
      phone: "987-654-3210",
      dateLost: "March 18, 2025",
      description: "Silver laptop with a blue sticker on the back.",
    },
    {
      image: "https://placehold.co/299x185",
      category: "Phone",
      name: "Jane Smith",
      phone: "987-654-3210",
      dateLost: "March 18, 2025",
      description: "Silver laptop with a blue sticker on the back.",
    },
    {
      image: "https://placehold.co/299x185",
      category: "Phone",
      name: "Jane Smith",
      phone: "987-654-3210",
      dateLost: "March 18, 2025",
      description: "Silver laptop with a blue sticker on the back.",
    },
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

      <div className="request-container-content">
        <h1>Retrieval Request</h1>
        <div className="lost-items-container">
          {lostItems.map((item, index) => (
            <ContentCards
            key={index}
            {...item}
            onRelease={() => console.log(`Release clicked for ${item.name}`)} // Example handler
          /> // Replace LostItemCard with ContentCards
          ))}
        </div>
      </div>

      <div className={`sidebar-request ${sidebarOpen ? "open" : ""}`}>
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