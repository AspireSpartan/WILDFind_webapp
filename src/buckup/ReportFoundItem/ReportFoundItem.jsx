import React, { useState } from "react";
import "./ReportFoundItem.css";
import menuIcon from "../../assets/images/Menu.png";
import notificationIcon from "../../assets/images/Notification.png";
import profileIcon from "../../assets/images/pp.png";
import HomeIcon from "../../assets/images/Home.png";
import ReportIcon from "../../assets/images/request.png";
import ViewIcon from "../../assets/images/Viewx.png";
import RequestIcon from "../../assets/images/request.png";
import HistoryIcon from "../../assets/images/history.png";
import LogoutIcon from "../../assets/images/Logout.png";
import AdminProfile from "../../assets/images/pp.png";
import FoundItemForm from "../../components/Admin/FoundItemForm/FoundItemForm"; // Import the new component

const ReportFoundItem = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileBarOpen, setIsProfileBarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileBar = () => {
    setIsProfileBarOpen(!isProfileBarOpen);
  };

  return (
    <div className="app-container">
      <header className="header">
        <img src="/src/assets/images/header.png" alt="Wildfind Logo" className="header-image" />
      </header>

      <nav className="navbar">
        <ul>
          <li className="menu-icon">
            <a href="#" onClick={toggleSidebar}>
              <img src={menuIcon} alt="Menu" />
            </a>
          </li>
        </ul>
        <ul className="right-section">
          <li className="notification-icon">
            <a href="#">
              <img src={notificationIcon} alt="Notification" />
            </a>
          </li>
          <li className="profile-icon">
            <a href="#" onClick={toggleProfileBar}>
              <img src={profileIcon} alt="Profile" />
            </a>
          </li>
          <li className="admin-name">
            <a>Admin Name</a>
          </li>
        </ul>
      </nav>

      <div className="container">
        <aside className={`sidebar ${isSidebarOpen ? "" : "collapsed"}`}>
          <nav>
            <ul>
              <li>
                <a href="#">
                  <img src={HomeIcon} alt="Home" className="icon" />
                  Home
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={ReportIcon} alt="Report" className="icon" />
                  Report
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={ViewIcon} alt="View" className="icon" />
                  View
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={RequestIcon} alt="Request" className="icon" />
                  Request
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={HistoryIcon} alt="History" className="icon" />
                  History
                </a>
              </li>
            </ul>
          </nav>
          <button className="logout">
            <img src={LogoutIcon} alt="Logout" className="icon" />
            Logout
          </button>
        </aside>

        <main className="main-content">
          <div className="Background">
            <h1>{/*WILDFIND*/}</h1>
          </div>
          <div className={`adminP-bar ${isProfileBarOpen ? "open" : "closed"}`}>
            <div className="adminN-card">
              <img src={AdminProfile} alt="AProfile-icon" className="Aprofile-icon" />
              <div className="admin-details">
                <h2 className="admin-Name">Admin name</h2>
                <p className="admin-role">Admin</p>
              </div>
            </div>
            <div className="account-actions">
              <p className="manage-account">Manage Account</p>
              <button className="sign-out">Sign out</button>
            </div>
          </div>

          <div className="parent-container">
            <FoundItemForm /> {/* Use the new component */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ReportFoundItem;