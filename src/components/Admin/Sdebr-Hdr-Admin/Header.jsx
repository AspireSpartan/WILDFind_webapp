import React from "react";
import "./AdminLayout.css"; // Import CSS

const Header = () => {
  return (
    <header className="header">
      {/* Header Background */}
      <div className="header-bg">
        <img
          className="header-image"
          src="/src/assets/images/head1.png" // Replace with actual image URL
          alt="Header Background"
        />
      </div>

      {/* Admin Bar */}
      <div className="admin-bar">
        <div className="admin-info">
          <div className="notification">
            <img src="https://placehold.co/62x44" alt="Notification Icon" />
            <span className="notification-dot"></span>
          </div>
          <div className="admin-profile">
            <div className="profile-pic"></div>
            <div className="admin-name">Admin name</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
