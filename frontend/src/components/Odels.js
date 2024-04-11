import React, { useEffect, useState } from "react";
import axios from "axios";
import Cloth from "./Cloth";
import BannerBackground from "../assets/home-banner-background(1).png.jpeg";
import AboutBackground from "../assets/about-background.png.jpeg";

const Odels = () => {
  const [odels, setOdels] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const sendRequest = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/odel");
      const data = res.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendRequest().then((data) => setOdels(data.odels));
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredOdels = odels.filter((odel) =>
    odel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", paddingBottom: "100px" }}>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Cloth..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "3px solid #ccc",
            marginBottom: "10px",
            width: "25%",
          }}
        />
      </div>
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
      <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>ODEL</h1>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      {filteredOdels.map((odel, index) => (
        <Cloth
          key={index}
          name={odel.name}
          price={odel.price}
          imageURL={odel.image}
        />
      ))}
    </div>
  );
};

export default Odels;
