import React, { useState } from "react";
import { Oval } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import phoneIcon from "../../assets/icons/formPhoneIcon.png";
import emailIcon from "../../assets/icons/formEmailIcon.png";
import locationIcon from "../../assets/icons/formLocationIcon.png";
import formShape from "../../assets/images/formShape.png";
import { contactUs } from "../../services/contact";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!firstName) {
      newErrors.firstName = "First name is required";
    }

    if (!lastName) {
      newErrors.lastName = "Last name is required";
    }

    if (!message) {
      newErrors.message = "Last name is required";
    }

    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {
      setLoading(true);
      const response = await contactUs({
        firstName,
        lastName,
        phoneNumber,
        email,
        message,
      });
      toast.success(response.data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="contact-us-main-con">
        <div className="contact-us-heading">
          <h1>Contact Us</h1>
          <p>Any question or remarks? Just write us a message!</p>
        </div>
        <div className="contact-us-form-con">
          <div className="form-info">
            <div className="form-heading">
              <h2>Contact Information</h2>
              <p className="heading-text">
                Say something to start a live chat!
              </p>
              <div className="side-details">
                <div className="contact-us-info">
                  <span>
                    <img src={phoneIcon} alt="" />
                  </span>
                  <p>+92 300 9465050</p>
                </div>
                <div className="contact-us-info">
                  <span>
                    <img src={emailIcon} alt="" />
                  </span>
                  <p>salmanyousaf292001@gmail.com</p>
                </div>
                <div className="contact-us-info">
                  <span>
                    <img src={locationIcon} alt="" />
                  </span>
                  <p>Lahore, Pakistan</p>
                </div>
              </div>
            </div>
            <div className="form-shape">
              <img src={formShape} alt="" />
            </div>
          </div>

          <div className="form-con">
            {loading ? (
              <div className="loader">
                <Oval
                  height={80}
                  width={80}
                  color="#4fa94d"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#4fa94d"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              </div>
            ) : (
              <form
                action=""
                className="contact-us-form"
                onSubmit={handleSubmit}
              >
                <div className="input-con-1">
                  <div className="firstName">
                    <p className="contact-us-input-label">First Name</p>
                    <input
                      type="text"
                      name="firstName"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors.firstName && (
                      <span className="error">{errors.firstName}</span>
                    )}
                  </div>
                  <div className="lastName">
                    <p className="contact-us-input-label">Last Name</p>
                    <input
                      type="text"
                      name="lastName"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    {errors.lastName && (
                      <span className="error">{errors.lastName}</span>
                    )}
                  </div>
                </div>
                <div className="input-con-2">
                  <div className="email">
                    <p className="contact-us-input-label">Email</p>
                    <input
                      type="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                      <span className="error">{errors.email}</span>
                    )}
                  </div>
                  <div className="phoneNumber">
                    <p className="contact-us-input-label">Phone Number</p>
                    <input
                      type="tel"
                      name="phoneNumber"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    {errors.phoneNumber && (
                      <span className="error">{errors.phoneNumber}</span>
                    )}
                  </div>
                </div>
                <div className="message">
                  <p className="contact-us-input-label">Message</p>
                  <textarea
                    name="message"
                    id=""
                    placeholder="Write your message.."
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  {errors.message && (
                    <span className="error">{errors.message}</span>
                  )}
                </div>
                <button type="submit" className="contact-us-submit-btn">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
