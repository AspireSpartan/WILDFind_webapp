import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./features/Dashboard/Admin_Dashboard/Login/admin-login";
import UserDashboard from "./features/Dashboard/User_Dashboard/Dashboard/dashboard";
import LandingPage from "./features/Landing_Page/LandingPage";
import ContactUs from "./features/Contact-us/contact-us"; // Import ContactUs
import URF from "./features/Dashboard/User_Dashboard/UserRequestForm/RequestForm";
import AdminDashboard from "./components/Admin/AdminDashoard/AdminDashboard";
import Sdrhdr from "./features/Dashboard/Admin_Dashboard/Sidbar&Header/sdr&hdr"; 
import ReportFoundItem from "./components/Admin/FoundItemForm/ReportFoundItem"; 
import BlankPage from "./features/TestPageArea/BlankPage";  {/*this page is only for testing in Admin Request Page*/}
import RequestPage from "./components/Admin/RequestPage/RequestPage"; 
import './index.css';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/BlankPage" element={<BlankPage />} /> {/*this page is only for testing in Admin Request Page*/}
        <Route path="/RequestPage" element={<RequestPage />} />
        <Route path="/ReportFoundItem" element={<ReportFoundItem />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/Sdrhdr" element={<Sdrhdr />} />     
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/urf" element={<URF />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
