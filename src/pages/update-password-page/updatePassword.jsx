import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginBgImg from "../../assets/images/loginBgImg.png";
import rightFormImg from "../../assets/images/rightFormImg.png";
import leftImgIcon from "../../assets/images/leftImgIcon.png";
import "./updatePassword.css";
import { updatePassword } from "../../services/login";

export const UpdatePassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{6,}$/;
    return re.test(password);
  };

  const validateConfirmPassword = (confirmPassword) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{6,}$/;
    return re.test(confirmPassword);
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

    if (!validateConfirmPassword(confirmPassword)) {
      newErrors.confirmPassword =
        "Password must contain at least 6 characters, including letters and numbers";
    }

    if (password !== confirmPassword) {
      newErrors.password = "Password and confirm password must match";
      newErrors.confirmPassword = "Password and confirm password must match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const response = await updatePassword({
        email,
        password,
        confirmPassword,
      });
      toast.success(response.data.message);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      toast.error(error?.response?.data?.message);
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
          <h1>Update Password?</h1>

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
            <div className="password">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
              )}
            </div>

            <button type="submit" className="sign-in-button" disabled={loading}>
              {loading ? "Updating..." : "Update"}
            </button>

            {errors.submit && <span className="error">{errors.submit}</span>}
            <a href="/">Back to login</a>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};
