import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./features/Login/admin-login";
import Admin from "./features/Dashboard/Admin-Dashboard/admin-dashboard";
import './index.css'
import "./features/Login/admin-login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin-dashboard" element={<Admin />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
