import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./features/Login/admin-login";
import Admin from "./features/Dashboard/Admin-Dashboard/admin-dashboard";
import UserDashboard from "./features/Dashboard/User_Dashboard/dashboard";
import LandingPage from "./features/Landing_Page/LandingPage";
import ContactUs from "./features/Home/contact-us"; // Import ContactUs
import URF from "./features/UserRequestForm/RequestForm";
import AdminLayout from "./components/Admin/AdminLayout";
import RfI from "./features/ReportFoundItem/ReportFoundItem";
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/rfI" element={<RfI />} /> 
        <Route path="/landingPage" element={<LandingPage />} /> 
        <Route path="/adminLayout" element={<AdminLayout />} /> 
        <Route path="/urf" element={<URF />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<Admin />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/contact-us" element={<ContactUs />} /> {/* Added route for Contact Us */}
        <Route path="/" element={<RfI />} /> {/* Added route for Contact Us */}
      </Routes>
    </Router>
  );
}

export default App;
