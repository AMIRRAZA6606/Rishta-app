import React, { useState } from "react";
import loginBgImg from "../../assets/images/loginBgImg.png";
import rightFormImg from "../../assets/images/rightFormImg.png";
import leftImgIcon from "../../assets/images/leftImgIcon.png";
import "./LoginForm.css";
import { login } from "../../services/auth/login";

export const Loginform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{6,}$/;
    return re.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!validatePassword(password)) {
      newErrors.password =
        "Password must contain at least 6 characters, including letters and numbers";
    }

    console.log("newErrors=========", newErrors);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const response = await login({ email, password });
      console.log("Login successful:", response.data);
      // Handle successful login (e.g., redirect to another page)
    } catch (error) {
      console.error("Login error:", error);
      setErrors({
        submit: "Login failed. Please check your credentials and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      <div className="left-image-container">
        <img src={loginBgImg} alt="" className="bgImg" />
        <img src={leftImgIcon} alt="" className="leftImgIcon" />
      </div>
      <div className="main-login-container">
        <img src={rightFormImg} className="rightFormImg" alt="Right Form" />
        <div className="login-container">
          <h1>Welcome Back</h1>
          <span className="welcome-text">
            Welcome back! Enter your details below.
          </span>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div className="form-options">
              <div className="remember-me">
                <input type="checkbox" id="rememberMe" name="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <a href="abc" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="sign-in-button" disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </button>
            {errors.submit && <span className="error">{errors.submit}</span>}
          </form>
          <div className="signup-link">
            <span>
              Don't have an account? <a href="abc">Sign up for free</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
