import React from "react";
import useMenu from "../../../Hooks/useMenu";
import CategorySection from "../../../Shared/CategorySection/CategorySection";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
const PizzaSection = () => {
  const menu = useMenu();
  const PizzaMenu = menu.filter((pizza) => pizza.category == "pizza");
  const pizzaSectionInfo = {
    bannerBg: pizzaBg,
    heading: "A Slice of Perfection",
    subHeading:
      "Dive into our pizza collection, where every slice is a masterpiece. From traditional classics to bold, innovative creations, our pizzas are baked to perfection just for you.",
    menuData: PizzaMenu,
    btnTitle: "ORDER YOUR FAVORITE PIZZA",
  };
  return (
    <div>
      <CategorySection categoryInfo={pizzaSectionInfo}></CategorySection>
    </div>
  );
};

export default PizzaSection;
