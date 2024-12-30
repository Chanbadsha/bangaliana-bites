import React from "react";
import Banner from "../Banner/Banner";
import FoodCategory from "../FoodCategory/FoodCategory";
import PopularMenu from "../PopularMenu/PopularMenu";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <FoodCategory></FoodCategory>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Homepage;
