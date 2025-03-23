import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./features/Login/admin-login";
import Admin from "./features/Dashboard/Admin-Dashboard/admin-dashboard";
import UserDashboard from "./features/Dashboard/User_Dashboard/dashboard";
import LandingPage from "./features/Landing_Page/LandingPage";
import ContactUs from "./features/Contact-us/contact-us"; // Import ContactUs
import URF from "./features/UserRequestForm/RequestForm";
import AdminLayout from "./components/Admin/Sdebr-Hdr-Admin/AdminLayout";
import AdminDashboard from "./components/Admin/AdminDashoard/AdminDashboard";
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/AdminDashboard" element={<AdminDashboard />} /> 
        <Route path="/adminLayout" element={<AdminLayout />} /> 
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/urf" element={<URF />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<Admin />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/contact-us" element={<ContactUs />} /> {/* Added route for Contact Us */}
        <Route path="/" element={<LandingPage />} /> {/* Added route for Contact Us */}
      </Routes>
    </Router>
  );
}

export default App;
