// src/features/Login/admin-login.jsx
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";
import "./admin-login.css";
import { auth } from "../../../../services/firebase-config";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const db = getDatabase();

  const fetchAdminData = async (email) => {
    try {
      const dbRef = ref(db, "AdminAccounts/Accounts");
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const accounts = snapshot.val();
        console.log("Fetched accounts:", accounts); // Log the data
        console.log("Searching for email:", email); // Log the email being searched
        const admin = Object.values(accounts).find((account) => {
          const accountEmail = account.Email ? account.Email.trim().toLowerCase() : "";
          console.log("Checking account email:", accountEmail);
          return accountEmail === email.trim().toLowerCase();
        });
        if (admin) {
          console.log("Admin found:", admin); // Log the found admin data
          localStorage.setItem("adminName", admin.Name);
          localStorage.setItem("adminRole", admin.Role);
        } else {
          setError("Admin account not found in database.");
        }
      } else {
        setError("No admin accounts found in database.");
      }
    } catch (error) {
      console.error("Error fetching admin data:", error.code, error.message);
      setError("Failed to fetch admin data. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      setError("");
      try {
        const userCredential = await signInWithEmailAndPassword(auth, formData.email.trim(), formData.password);
        await fetchAdminData(formData.email.trim());
        if (localStorage.getItem("adminName") && localStorage.getItem("adminRole")) {
          localStorage.setItem("isAuthenticated", "true");
          navigate("/Sdrhdr");
        } else {
          setError("Admin data not found. Please contact support.");
        }
      } catch (err) {
        setError("Invalid email or password. Please try again.");
        console.error("Login error:", err.code, err.message);
      }
    },
    [formData, navigate]
  );

  return (
    <div className="login-page background-image">
      <header className="login-header">
        <div className="logo">
          <img src="/src/assets/images/head1.png" alt="Wildfind Logo" />
        </div>
      </header>

      <main className="login-form">
        <h2 className="welcome-text">Welcome to Wildfind</h2>
        <form onSubmit={handleLogin}>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="email">Username</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>
          <button type="submit" className="login-button">Login</button>
          <div className="forgot-password">
            Forgot Password? <button type="button" className="forgot-password-btn">Click Here</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;