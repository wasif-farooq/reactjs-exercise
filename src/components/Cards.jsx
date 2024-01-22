import React from "react";
import "../styles/Cards.css";

const Cards = ({ data }) => {
  return (
    <div className="cardsRootContainer">
      <div className="titlesContainer">
        <p className="founderName">{data?.founder_name}</p>
        <p className="animalName">{data?.animal_name}</p>
      </div>
      <div
        className="gradient"
        style={{
          "--first": data?.first_color,
          "--second": data?.second_color,
        }}
      ></div>
      <div className="founderContainer">
        <span className="founderText">Founder: </span>
        <span className="founder">{data?.founder_full_name}</span>
      </div>
    </div>
  );
};

export default Cards;
