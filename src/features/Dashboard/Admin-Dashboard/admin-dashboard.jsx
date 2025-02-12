import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./admin-dashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Check if the user is authenticated
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [navigate]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Remove authentication flag
    navigate("/login"); // Redirect to login page
  };

  return (
    <>
      <div className="red-box">
        <div className="white-box"></div>
      </div>

      <div className="left-rectangle"></div>
      <div className="banner-container">
        <img
          src="/head1.png"
          alt="CIT University Banner"
          className="banner-image"
        />
        <div className="white-box"></div>
      </div>

      <h1>WILD FILD</h1>
      <h1>WILD FILD</h1>
      <h1>WILD FILD</h1>
    </>
  );
};

export default AdminDashboard;
