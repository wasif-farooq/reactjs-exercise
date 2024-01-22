import React from "react";
import "../../styles/house.css";
import { HouseFounder } from "./HouseFounder";
import { HouseListFounder } from "./HouseListFounder";
import { HouseListGradient } from "./HouseListGradient";

export const HouseListItem = ({ data }) => {
  return (
    <div className="cardsRootContainer">
      <HouseListFounder founderName={data.founderName} animalName={data.animalName} />
      <HouseListGradient firstColor={data.firstColor} secondColor={data.secondColor} />
      <HouseFounder founderFullName={data.founderFullName} />
    </div>
  );
};

