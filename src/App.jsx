import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./features/Login/admin-login";
import Admin from "./features/Dashboard/Admin-Dashboard/admin-dashboard";
import UserDashboard from "./features/Dashboard/User_Dashboard/dashboard";
import LandingPage from "./features/Landing_Page/LandingPage";
import ContactUs from "./features/Home/contact-us"; // Import ContactUs
import RequestForm from "./features/userRequestForm/RequestForm";
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<Admin />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/contact-us" element={<ContactUs />} /> {/* Added route for Contact Us */}
        <Route path="/requestForm" element={<RequestForm />} /> 
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
