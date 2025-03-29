import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";
import "./admin-login.css";
import "../../../../services/firebase-config";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [adminData, setAdminData] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getDatabase();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchAdminData(user.email);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const fetchAdminData = async (email) => {
    try {
      const dbRef = ref(db, "admins");
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const admin = Object.values(admins).find((admin) => admin.email === email);
        if (admin) {
          setAdminData(admin);
          localStorage.setItem("adminName", admin.name);
          localStorage.setItem("adminRole", admin.role);
        }
      }
    } catch (error) {
      console.error("Error fetching admin data:", error);
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
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        await fetchAdminData(formData.email);
        localStorage.setItem("isAuthenticated", "true");
        navigate("/Sdrhdr");
      } catch (err) {
        setError("Invalid email or password. Please try again.");
      }
    },
    [auth, formData, navigate]
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