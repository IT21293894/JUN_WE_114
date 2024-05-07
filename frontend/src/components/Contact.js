import React, { useState } from "react";
import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    phoneNumber: ""
  });

  const { firstName, lastName, email, message, phoneNumber } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Frontend validation
    if (!firstName || !lastName || !email || !message || !phoneNumber) {
      alert('Please fill in all fields');
      return;
    }

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      alert('Phone number must be 10 digits');
      return;
    }

    // Make API call to backend for further validation and submission
  };

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Contact us</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          If you need help, we’re here for you. Contact us for leasing Inquiries, store spaces, pop-up shops, special events & more on 0112 590 590
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="John Doe" />
        <p>
        Welcome to our shopping mall! Whether you're browsing for the latest fashion trends, searching for unique gifts, or simply looking to indulge in some retail therapy, we've got you covered. Explore a diverse range of stores offering everything from high-end fashion to everyday essentials. Need assistance or have a query? Feel free to reach out to us through our form. We're here to ensure your shopping experience is nothing short of exceptional. Happy shopping!
        </p>
        <form onSubmit={handleSubmit} style={{ marginTop: "20px", maxWidth: "400px" }}>
  <input type="text" name="firstName" value={firstName} onChange={handleChange} placeholder="First Name" required style={{ marginBottom: "10px", width: "100%", borderRadius: "5px", padding: "8px", border: "1px solid #bb1cec" }} />
  <input type="text" name="lastName" value={lastName} onChange={handleChange} placeholder="Last Name" required style={{ marginBottom: "10px", width: "100%", borderRadius: "5px", padding: "8px", border: "1px solid #bb1cec" }} />
  <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email Address" required style={{ marginBottom: "10px", width: "100%", borderRadius: "5px", padding: "8px", border: "1px solid #bb1cec" }} />
  <textarea name="message" value={message} onChange={handleChange} placeholder="Message" required style={{ marginBottom: "10px", width: "100%", minHeight: "100px", borderRadius: "5px", padding: "8px", border: "1px solid #bb1cec" }}></textarea>
  <input type="tel" name="phoneNumber" value={phoneNumber} onChange={handleChange} placeholder="Phone Number" required style={{ marginBottom: "10px", width: "100%", borderRadius: "5px", padding: "8px", border: "1px solid #bb1cec" }} /><div style={{ marginBottom: "30px" }}></div>
  <button type="submit" style={{ backgroundColor: "#bb1cec", color: "#fff", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer" }} onMouseEnter={(e) => e.target.style.backgroundColor = '#4B0082'} onMouseLeave={(e) => e.target.style.backgroundColor = '#bb1cec'}>Submit</button>
</form>
<div style={{ marginBottom: "50px" }}></div>

        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Shop Hevan</h2>
      </div>
    </div>
  );
};

export default Contact;
