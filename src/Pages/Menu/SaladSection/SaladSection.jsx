import useMenu from "../../../Hooks/useMenu";
import CategorySection from "../../../Shared/CategorySection/CategorySection";
import saladBg from "../../../assets/menu/salad-bg.jpg";
const SaladSection = () => {
  const menu = useMenu();
  const saladMenu = menu.filter((salad) => salad.category === "salad");
  const saladSectionInfo = {
    bannerBg: saladBg,
    heading: "Freshness on Every Plate",
    subHeading:
      "Discover the art of freshness with our vibrant salads. Crafted with the finest ingredients, each bowl is a medley of crisp textures, bold flavors, and wholesome goodness.",
    menuData: saladMenu,
    btnTitle: "ORDER YOUR FAVORITE SALAD",
  };
  return (
    <div>
      <CategorySection categoryInfo={saladSectionInfo}></CategorySection>
    </div>
  );
};

export default SaladSection;
