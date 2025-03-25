import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; 
import "./admin-login.css";
import "../../services/firebase-config.js";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate();
  const auth = getAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      setError(""); // Clear previous errors

      try {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        localStorage.setItem("isAuthenticated", "true");
        navigate("/Sdrhdr");
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError("Invalid email or password. Please try again.");
      }
    },
    [auth, formData, navigate]
  );

  return (

    //add a class here for background image

    <div className="login-page background-image">
      <header className="login-header">
        <div className="logo">
        <img src="/src/assets/images/head1.png" alt="Wildfind Logo" />
        </div>
      </header>


      <main className="login-form">
        <h2 className="welcome-text">Welcome to Wildfind</h2>

        <form onSubmit={handleLogin}>
          {error && <p className="error-message">{error}</p>} {/* Show error message */}

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
              <span
                className="toggle-password"
                aria-label="Toggle password visibility"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          <button type="submit" className="login-button">Login</button>
          
          <div className="forgot-password">
            Forgot Password? 
            <button type="button" className="forgot-password-btn">Click Here</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
