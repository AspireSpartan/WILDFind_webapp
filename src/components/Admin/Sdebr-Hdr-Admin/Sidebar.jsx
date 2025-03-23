import React from "react";
import { Link } from "react-router-dom";
import "./AdminLayout.css"; // Import CSS for styling

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Link to="/" className="sidebar-item">
        🏠 Home
      </Link>
      <Link to="/report" className="sidebar-item">
        📝 Report
      </Link>
      <Link to="/view" className="sidebar-item">
        👁️ View
      </Link>
      <Link to="/request" className="sidebar-item">
        ✏️ Request
      </Link>
      <Link to="/history" className="sidebar-item">
        🔄 History
      </Link>
      <Link to="/logout" className="sidebar-item logout">
        ⬅️ Logout
      </Link>
    </aside>
  );
};

export default Sidebar;
