import React, { useState } from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";
import BannerBackground from "../assets/home-banner-background(1).png";
import BannerImage from "../assets/home-banner-image (2).png";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Culinary Cravings",
      text: "Navigate through our extensive food offerings with the assistance of our virtual food assistant. From savory snacks to gourmet meals, our virtual assistant is here to help you find exactly what you're craving.",
    },
    {
      image: ChooseMeals,
      title: "Fashion Favorites",
      text: "Embark on a guided tour of all our fashion stores with our comprehensive site map tour. Explore the hottest trends, must-have styles, and top brands as you navigate through our fashion haven.",
    },
    {
      image: DeliveryMeals,
      title: "Parking Perfection",
      text: "Enjoy hassle-free parking with our spacious and accessible parking facility, ensuring a seamless start to your shopping experience. ",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Services</p>
        <h1 className="primary-heading">How it works</h1>
        <p className="primary-text">
          Explore our comprehensive range of services designed to enhance your shopping experience.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

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
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
     
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
        <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Contact</span>
          <span>Services</span>
        </div>
        <div className="footer-section-columns">
          <span>011-2369785</span>
          <span>shophaven@food.com</span>
          <span>shophaven@fashion.com</span>
          <span>contact@shophaven.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
      );
    };
const Home = () => {
  return (
    <div>
      <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
              Welcome to Shop Haven: Where Fashion Awaits Discovery
            </h1>
            <p className="primary-text">
              Unlock the door to a world where your fashion dreams become reality. Here, you'll find the top brands of fashion stores waiting to elevate your style journey
            </p>
            <button className="secondary-button">
              Find Your Fashion Haven <FiArrowRight />{" "}
            </button>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
          <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
          <p className="primary-subheading">Foods</p>
          <h1 className="primary-heading">
            Welcome to Flavor Haven: Where Culinary Delights Await Discovery
          </h1>
          <p className="primary-text">
            Unlock the door to a world where your culinary dreams become reality. Here, you'll find the top brands of food stores waiting to elevate your flavor journey
          </p>
          <div className="about-buttons-container">
            <button className="secondary-button">Discover Your Culinary Haven<FiArrowRight /></button>
          </div>
        </div>
      </div>
      {/* Render the Work component */}
      <Work />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;