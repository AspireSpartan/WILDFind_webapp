import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import "./contact-us.css";

const ContactUs = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State for messages
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = () => {
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setErrorMessage("All fields are required!");
      return;
    }

    setErrorMessage(""); // Clear error if all fields are filled
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000); // Hide after 3 seconds
  };

  // Handle clearing form fields
  const handleClear = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrorMessage(""); // Clear error message when clearing
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-heading">Connect with our team</h1>
        <p className="contact-subtext">
        Have questions or need assistance? Our team is here to help! Whether you have inquiries 
        about our services, need support,or just want to connect, feel free to reach out. 
        Fill out the form, and we’ll get back to  you as soon as possible.
        </p>

        <div className="contact-section">
          {/* Left - Contact Form */}
          <div className="form-container">
            <h2 className="form-heading">Get in Touch with Us</h2>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Input your name"
                className="contact-input"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Input your email"
                className="contact-input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="contact-input subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Submit your message request"
              className="contact-textarea"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            {/* Error Message */}
            {errorMessage && <div className="error-message">{errorMessage}</div>}

            {/* Success Message */}
            <div className={`success-message ${showSuccess ? "show" : ""}`}>
              Message sent successfully!
            </div>

            {/* Button Group */}
            <div className="button-group">
              <button className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
              <button className="clear-button" onClick={handleClear}>
                Clear
              </button>
            </div>
          </div>

          {/* Right - Contact Details */}
          <div className="details-container">
            <h2 className="details-heading">Contact details</h2>
            <p className="details-subtext">
            Need to reach us? Here’s how! Whether you prefer email, phone, or visiting us in person, we’re 
            available to assist you. Check our contact details below and connect 
            with us anytime during our working hours.
            </p>

            <div className="detail-grid">
              <div className="detail-row">
                <div className="detail-box">
                  <FaMapMarkerAlt className="detail-icon" />
                  <div>
                    <strong>Address</strong>
                    <p>Location of CIT-U</p>
                  </div>
                </div>

                <div className="detail-box">
                  <FaPhoneAlt className="detail-icon" />
                  <div>
                    <strong>Mobile</strong>
                    <p>01234-567-891</p>
                  </div>
                </div>
              </div>

              <div className="detail-row">
                <div className="detail-box">
                  <FaClock className="detail-icon" />
                  <div>
                    <strong>Availability</strong>
                    <p>Mon-Sat, 8:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="detail-box">
                  <FaEnvelope className="detail-icon" />
                  <div>
                    <strong>E-Mail</strong>
                    <p>@WildFind.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="social-media-section">
              <strong>Social Media:</strong>
              <div className="social-icons">
                <FaFacebook className="social-icon facebook" />
                <FaTwitter className="social-icon twitter" />
                <FaLinkedin className="social-icon linkedin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
