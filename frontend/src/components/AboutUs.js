import React from "react";
import BannerBackground from "../assets/home-banner-background(1).png";
import BannerImage from "../assets/About us.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";



const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Discover Haven: Where Culinary Excellence Meets Fashion Finesse
          </h1>
          <p className="primary-text">
          
Embark on a journey through Haven, where culinary delights blend seamlessly with fashion finesse. Explore our curated fusion of food and fashion in our digital realm. Indulge in delectable culinary creations and adorn yourself in sophisticated attire. Join us in redefining shopping at Haven.
          </p>
          <div>
   <a href="/" className="secondary-button" style={{ textDecoration: 'none' }}>
     Back to Home Page <FiArrowRight />
     </a>
   </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;