import React, { useState, useEffect } from "react";
import axios from "axios";
import BannerBackground from "../assets/home-banner-background(1).png.jpeg";
import AboutBackground from "../assets/about-background.png.jpeg";

const MallSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Load Google Maps API script dynamically
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCZDJHqyp3cIpm7aPFy-JEZhTtvmNUhhRU&libraries=places`;
    window.document.body.appendChild(googleMapsScript);
    googleMapsScript.addEventListener("load", initMap);

    // Initialize map
    function initMap() {
      const mapOptions = {
        center: { lat: 0, lng: 0 }, // Initial center coordinates
        zoom: 10, // Initial zoom level
      };
      const mapElement = document.getElementById("map");
      const newMap = new window.google.maps.Map(mapElement, mapOptions);
      setMap(newMap);
    }

    // Clean up
    return () => {
      window.document.body.removeChild(googleMapsScript);
    };
  }, []);

  const searchStore = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/mall/search?query=${searchQuery}`
      );
      const data = res.data;
      setSearchResult(data);

      // Center map to store location
      if (map && data.latitude && data.longitude) {
        map.setCenter({ lat: data.latitude, lng: data.longitude });
        new window.google.maps.Marker({
          position: { lat: data.latitude, lng: data.longitude },
          map,
          title: data.name,
        });
      }
    } catch (err) {
      console.error("Error searching store:", err);
    }
  };

  return (
    <div>
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
      <input
        type="text"
        placeholder="Search for a store..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      />
      <button
        onClick={searchStore}
        style={{
          backgroundColor: "#2c173e",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          marginLeft: "10px",
        }}
      >
        Search
      </button>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      {searchResult && (
        <div>
          <h2 className="fashion-heading">Search Result</h2>
          <div style={{ textAlign: "center" }}>
            <p>Name: {searchResult.name}</p>
            <p>Floor: {searchResult.floor}</p>
            <p>Location: {searchResult.location}</p>
          </div>
          {/* Map container */}
          <div id="map" style={{ width: "100%", height: "400px" }}></div>
        </div>
      )}
    </div>
  );
};

export default MallSearch;
