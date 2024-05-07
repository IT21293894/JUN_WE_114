import React from "react";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import { FiArrowRight } from "react-icons/fi";


const About = () => {
  return (
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
  );
};

export default About;
