import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../Hooks/useMenu";

import CategorySection from "../../../Shared/CategorySection/CategorySection";
const DesertSection = () => {
  const menu = useMenu();
  const dessertMenu = menu.filter((dessert) => dessert.category === "dessert");

  const dessertInfo = {
    bannerBg: dessertBg,
    heading: "Desserts to Delight",
    subHeading:
      "Treat yourself to a world of sweetness! Our dessert selection is a celebration of rich flavors, creamy textures, and unforgettable indulgence.",
    menuData: dessertMenu,
    btnTitle: "ORDER YOUR FAVORITE FOOD",
  };
  return (
    <div>
      <CategorySection categoryInfo={dessertInfo}></CategorySection>
    </div>
  );
};

export default DesertSection;
