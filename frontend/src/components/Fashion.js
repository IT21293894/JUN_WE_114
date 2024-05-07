import React, { useEffect, useState } from "react";
import axios from "axios";
import Store from "./Store";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BannerBackground from "../assets/home-banner-background(1).png";
import AboutBackground from "../assets/about-background.png";

const Fashions = () => {
  const [fashions, setFashions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to fetch all fashions from backend
  const sendRequest = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/fashion/fashion");
      const data = res.data;
      setFashions(data.fashions);
    } catch (err) {
      console.log(err);
    }
  };

  // Function to search for a specific store
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to filter fashions based on search query
  const filterFashions = fashions.filter((fashion) =>
    fashion.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle search button click
  const searchStore = () => {
    // You can perform any specific action here if needed
    // In this case, the filtering is already done in filterFashions state
  };

  // Load all fashions when component mounts
  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <div style={{ textAlign: "center", paddingBottom: "50px" }}>
      <Navbar />
      <h1 className="fashion-heading">Fashion Stores</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Search for a shop..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          style={{
            backgroundColor: "#2c173e",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            marginLeft: "10px",
          }}
          onClick={searchStore}
        >
          Search Store
        </button>
      </div>

      <div>
        {filterFashions.map((fashion, index) => (
          <Store
            key={index}
            name={fashion.name}
            level={fashion.level}
            imageURL={fashion.image}
          />
        ))}
      </div>

      <a href="/mall">
        <button
          style={{
            backgroundColor: "#2c173e",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            position: "absolute",
            top: "30px",
            right: "20px",
          }}
        >
          Site Map Tour
        </button>
      </a>

      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>

      <Footer />
    </div>
  );
};

export default Fashions;




