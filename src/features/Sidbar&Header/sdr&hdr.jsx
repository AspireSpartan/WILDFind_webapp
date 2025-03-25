import React, { useState, useEffect } from "react";
import "./sdr&hdr.css";
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
import AdminDashboard from "../../components/Admin/AdminDashoard/AdminDashboard"; // Corrected typo in path
import FoundItemForm from "../../components/Admin/FoundItemForm/ReportFoundItem";
/*import View from "../View";
import Request from "../Request";
import History from "../History";*/
import Login from "../../features/Login/admin-login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "../../services/firebase-config.js";

const SdrHdr = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileBarOpen, setIsProfileBarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default to false until auth state is checked
  const auth = getAuth();

  // Check authentication state on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user || localStorage.getItem("isAuthenticated") === "true") {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [auth]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileBar = () => {
    setIsProfileBarOpen(!isProfileBarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("isAuthenticated");
    auth.signOut().then(() => {
      setIsLoggedIn(false);
    });
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setActiveSection("Home");
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

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
                <h2 className="admin-Name">Admin name</h2>
                <p className="admin-role">Admin</p>
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
            {activeSection === "View" && (
              <div>
                <h2>View Page (In Progress)</h2>
                <p>This section is under development.</p>
              </div>
            )}
            {activeSection === "Request" && (
              <div>
                <h2>Request Page (In Progress)</h2>
                <p>This section is under development.</p>
              </div>
            )}
            {activeSection === "History" && (
              <div>
                <h2>History Page (In Progress)</h2>
                <p>This section is under development.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SdrHdr;