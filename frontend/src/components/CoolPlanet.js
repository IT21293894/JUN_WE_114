import React, { useEffect, useState } from "react";
import axios from "axios";
import Cloth from "./Cloth";
import BannerBackground from "../assets/home-banner-background(1).png.jpeg";
import AboutBackground from "../assets/about-background.png.jpeg";

const CoolPlanet = () => {
  const [coolplanets, setCoolPlanets] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const sendRequest = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/coolplanet");
      const data = res.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendRequest().then((data) => setCoolPlanets(data.coolplanets));
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterCoolPlanets = coolplanets.filter((coolplanet) =>
    coolplanet.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", paddingBottom: "50px" }}>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Cloth..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "10px",
            width: "25%",
          }}
        />
      </div>
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
      <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>COOLPLANET</h1>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      {filterCoolPlanets.map((coolplanet, index) => (
        <Cloth
          key={index}
          name={coolplanet.name}
          price={coolplanet.price}
          imageURL={coolplanet.image}
        />
      ))}
    </div>
  );
};

export default CoolPlanet;
