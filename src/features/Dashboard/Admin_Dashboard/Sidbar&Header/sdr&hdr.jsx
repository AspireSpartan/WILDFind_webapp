// src/components/Admin/SdrHdr.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./sdr&hdr.css";
import menuIcon from "../../../../assets/images/Menu.png";
import notificationIcon from "../../../../assets/images/Notification.png";
import profileIcon from "../../../../assets/images/pp.png";
import HomeIcon from "../../../../assets/images/Home.png";
import ReportIcon from "../../../../assets/images/request.png";
import ViewIcon from "../../../../assets/images/Viewx.png";
import RequestIcon from "../../../../assets/images/request.png";
import HistoryIcon from "../../../../assets/images/history.png";
import LogoutIcon from "../../../../assets/images/Logout.png";
import AdminProfile from "../../../../assets/images/pp.png";
import AdminDashboard from "../../../../components/Admin/AdminDashoard/AdminDashboard.jsx"; // Corrected typo in path
import FoundItemForm from "../../../../components/Admin/FoundItemForm/ReportFoundItem.jsx";
import RequestPage from "../../../../components/Admin/RequestPage/RequestPage.jsx";
import HistoryPage from "../../../History1/HistoryPage/HistoryPage.jsx";
import ViewPage from "../../../View/Viewpage/ViewPage.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../services/firebase-config.js";

const SdrHdr = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileBarOpen, setIsProfileBarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [adminName, setAdminName] = useState("");
  const [adminRole, setAdminRole] = useState("");
  const navigate = useNavigate();

  // Check authentication state and load admin data on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user && localStorage.getItem("isAuthenticated") !== "true") {
        navigate("/"); // Redirect to login if not authenticated
      } else {
        // Load admin data from localStorage
        const name = localStorage.getItem("adminName") || "Admin Name";
        const role = localStorage.getItem("adminRole") || "Admin";
        setAdminName(name);
        setAdminRole(role);
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [navigate]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileBar = () => {
    setIsProfileBarOpen(!isProfileBarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("adminName"); // Clear admin data
    localStorage.removeItem("adminRole"); // Clear admin data
    auth.signOut().then(() => {
      navigate("/"); // Redirect to login page
    }).catch((err) => {
      console.error("Logout error:", err.message);
      navigate("/");
    });
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
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
            <a>{adminName}</a> {/* Display admin name in navbar */}
          </li>
        </ul>
      </nav>

      <div className="container">
        <aside className={`sidebar ${isSidebarOpen ? "" : "collapsed"}`}>
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  onClick={() => handleSectionChange("Home")}
                  className={activeSection === "Home" ? "active" : ""}
                >
                  <img src={HomeIcon} alt="Home" className="icon" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleSectionChange("Report")}
                  className={activeSection === "Report" ? "active" : ""}
                >
                  <img src={ReportIcon} alt="Report" className="icon" />
                  Report
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleSectionChange("View")}
                  className={activeSection === "View" ? "active" : ""}
                >
                  <img src={ViewIcon} alt="View" className="icon" />
                  View
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleSectionChange("Request")}
                  className={activeSection === "Request" ? "active" : ""}
                >
                  <img src={RequestIcon} alt="Request" className="icon" />
                  Request
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleSectionChange("History")}
                  className={activeSection === "History" ? "active" : ""}
                >
                  <img src={HistoryIcon} alt="History" className="icon" />
                  History
                </a>
              </li>
            </ul>
          </nav>
          <button className="logout" onClick={handleLogout}>
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
                <h2 className="admin-Name">{adminName}</h2> {/* Display admin name */}
                <p className="admin-role">{adminRole}</p> {/* Display admin role */}
              </div>
            </div>
            <div className="account-actions">
              <p className="manage-account">Manage Account</p>
              <button className="sign-out" onClick={handleLogout}>
                Sign out
              </button>
            </div>
          </div>

          <div className="parent-container">
            {activeSection === "Home" && <AdminDashboard />}
            {activeSection === "Report" && <FoundItemForm />}
            {activeSection === "View" && <ViewPage />}
            {activeSection === "Request" && <RequestPage />}
            {activeSection === "History" && <HistoryPage />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SdrHdr;