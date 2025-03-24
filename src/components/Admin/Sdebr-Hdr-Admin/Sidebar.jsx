import React from "react";
import { Link } from "react-router-dom";
import "./AdminLayout.css"; // Import CSS for styling
import homeIcon from "../../../assets/images/Home.png";
import reportIcon from "../../../assets/images/request.png";
import viewIcon from "../../../assets/images/Viewx.png";
import requestIcon from "../../../assets/images/request.png";
import historyIcon from "../../../assets/images/history.png";
import logoutIcon from "../../../assets/images/Logout.png";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Link to="/" className="sidebar-item">
      <img src={homeIcon} alt="Home Icon" className="sidebar-icon" /> Home
      </Link>
        <Link to="/report" className="sidebar-item">
      <img src={reportIcon} alt="Report Icon" className="sidebar-icon" /> Report
      </Link>
        <Link to="/view" className="sidebar-item">
      <img src={viewIcon} alt="View Icon" className="sidebar-icon" /> View
        </Link>
      <Link to="/request" className="sidebar-item">
      <img src={requestIcon} alt="Request Icon" className="sidebar-icon" /> Request
      </Link>
      <Link to="/history" className="sidebar-item">
      <img src={historyIcon} alt="History Icon" className="sidebar-icon" /> History
      </Link>
      <Link to="/logout" className="sidebar-item logout">
      <img src={logoutIcon} alt="Logout Icon" className="sidebar-icon" /> Logout
      </Link>
    </aside>
  );
};

export default Sidebar;
