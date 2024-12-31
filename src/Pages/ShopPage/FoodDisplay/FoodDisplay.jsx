import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../../Shared/FoodCard/FoodCard";

const FoodDisplay = () => {
  const menu = useMenu();
  const { category } = useParams();

  const [filterMenu, setFilterMenu] = useState([]);
  useEffect(() => {
    if (category) {
      const filteredItems = menu.filter(
        (filterItem) => filterItem.category === category
      );
      setFilterMenu(filteredItems);
    } else if (menu) {
      setFilterMenu(menu);
      console.log(filterMenu);
    }
  }, [menu, category]);

  return (
    <div className="grid justify-center space-y-6 px-6 md:px-12 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-3">
      {filterMenu.slice(0, 12).map((food) => (
        <FoodCard cardInfo={food}></FoodCard>
      ))}
    </div>
  );
};

export default FoodDisplay;
