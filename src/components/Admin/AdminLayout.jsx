import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./AdminLayout.css"; // Import CSS

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-wrapper">
      {/* Background Image Placeholder */}
      <div className="admin-bg"></div>

      {/* Main Admin Container */}
      <div className="admin-container">
        <Header />
        <div className="main-layout">
          <Sidebar />
          <div className="content">
            {children} {/* Render page content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
