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
import headerImage from "/src/assets/images/head1.png";
import "./request.css";

const Request = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="request-container">
      {/* Logo and Header Section */}
      <header className="request-header">
        <img
          src={headerImage}
          alt="CIT University Logo"
          className="header-image"
        />
      </header>

      {/* White Bar with Icons Section */}
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
      {/*white Container*/}
      <div className="container">
        <h1>Retrieval Request</h1>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-item">
          <FaHome />
        </div>
        <div className="sidebar-item">
          <FaEdit />
        </div>
        <div className="sidebar-item">
          <FaEye />
        </div>
        <div className="sidebar-item">
          <FaClipboardList />
        </div>
        <div className="sidebar-item">
          <FaHistory />
        </div>
        <div className="sidebar-item">
          <FaSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Request;
