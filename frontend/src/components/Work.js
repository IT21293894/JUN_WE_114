import React from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

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

export default Work;