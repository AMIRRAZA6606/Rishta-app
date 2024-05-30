import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginBgImg from "../../assets/images/loginBgImg.png";
import rightFormImg from "../../assets/images/rightFormImg.png";
import leftImgIcon from "../../assets/images/leftImgIcon.png";
import "./forgotPassword.css";
import { login, sendOtp, verifyOtp } from "../../services/login";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const inputRefs = useRef([]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleOtpChange = (element, index) => {
    if (/^[0-9]$/.test(element.value) || element.value === "") {
      const newOtp = [...otp];
      newOtp[index] = element.value;
      setOtp(newOtp);

      // Focus next input field if the current one is filled
      if (element.value !== "" && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email address";
    }

    if (showOtpField && otp.some((digit) => digit === "")) {
      newErrors.otp = "Please enter the full OTP";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      if (!showOtpField) {
        const response = await sendOtp({ email });
        toast.success(response.data.message);
        setShowOtpField(true);
      } else {
        const newOtp = parseInt(otp.join(""), 10);
        const response = await verifyOtp({ email, otp: newOtp });
        toast.success(response.data.message);
        navigate("/update-password");
      }
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
          <h1>Forgot Password?</h1>

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

            {showOtpField ? (
              <div className="otp-container">
                <label>Enter your OTP</label>
                <div className="otp-inputs">
                  {otp.map((data, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={data}
                      onChange={(e) => handleOtpChange(e.target, index)}
                      ref={(el) => (inputRefs.current[index] = el)}
                      className="otp-input"
                    />
                  ))}
                </div>
                {errors.otp && <span className="error">{errors.otp}</span>}
              </div>
            ) : (
              ""
            )}

            {!showOtpField ? (
              <button
                type="submit"
                className="sign-in-button"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send OTP"}
              </button>
            ) : (
              <button
                type="submit"
                className="sign-in-button"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            )}

            {errors.submit && <span className="error">{errors.submit}</span>}
            <a href="/">Back to login</a>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};
