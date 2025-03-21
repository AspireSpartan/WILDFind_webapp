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

const ReportForm = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isProfileBarOpen, setIsProfileBarOpen] = useState(false);
  const toggleProfileBar = () => {
    setIsProfileBarOpen(!isProfileBarOpen);
  };

  return (
    <>
      <header className="header">
        <img src="/src/assets/images/header.png" alt="Wildfind Logo" className="header-image" />
      </header>
      
      <nav className="navbar">
        <ul>
          {/* Menu Icon (Left) */}
          <li className="menu-icon">
            <a href="#" onClick={toggleSidebar}>
              <img src={menuIcon} alt="Menu" />
            </a>
          </li>
        </ul>

        {/* Right Section (Notification, Profile, Admin Name) */}
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
          <div className = "Background">
              <h1>
              {/*WILDFIND*/}
              </h1>
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

          <div className="form-container">
            <div className="form-header">
              <h2>Report Found Item</h2>
            </div>
            <form className="report-form" onSubmit={handleSubmit}>
              <label htmlFor="id">ID</label>
              <input type="text" id="id" placeholder="ID" required />

              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Full Name" required />

              <label htmlFor="location">Location</label>
              <input type="text" id="location" placeholder="Location" required />

              <label htmlFor="date-found">Date Found</label>
              <input type="date" id="date-found" required />

              <label htmlFor="item-name">Item Name</label>
              <input type="text" id="item-name" placeholder="e.g. Water Bottle, Backpack" required />

              <label htmlFor="item-category">Item Category</label>
              <input type="text" id="item-category" placeholder="e.g. Personal, Clothing, Electronics, School" required />

              <label htmlFor="item-description">Item Description</label>
              <textarea id="item-description" placeholder="Detailed description" required></textarea>
              
              <div className="image-upload-container">
                <div className="image-preview">
                  {image ? (
                    <img src={image} alt="Uploaded" />
                  ) : (
                    <span className="plus-icon"></span>
                  )}
                </div>
                <input 
                  type="file" 
                  id="item-image" 
                  onChange={handleImageUpload} 
                  accept="image/*" 
                  style={{ display: 'none' }}
                />
                <button 
                  type="button" 
                  className="image-upload-button"
                  onClick={() => document.getElementById('item-image').click()} 
                >
                  <span className="plus-icon">+</span>
                </button>
              </div>

              <div className="buttons">
                <button type="button" className="cancel">Cancel</button>
                <button type="submit" className="submit">Submit</button>
              </div>
            </form>
          </div>

        </main>
      </div>
    </>
  );
};

export default ReportForm;
