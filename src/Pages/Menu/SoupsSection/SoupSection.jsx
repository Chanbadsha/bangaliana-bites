import useMenu from "../../../Hooks/useMenu";
import CategorySection from "../../../Shared/CategorySection/CategorySection";
import soupBg from "../../../assets/menu/soup-bg.jpg";
const SoupSection = () => {
  const menu = useMenu();
  const soupMenu = menu.filter((soup) => soup.category === "soup");
  const soupSectionInfo = {
    bannerBg: soupBg,
    heading: "Bangaliana Bowls of Goodness",
    subHeading:
      "Celebrate the art of soup-making with our authentic Bengali-inspired soups. Each bowl is a harmonious mix of traditional flavors and modern culinary finesse.",
    menuData: soupMenu,
    btnTitle: "ORDER YOUR FAVORITE SOUP",
  };
  return (
    <div>
      <CategorySection categoryInfo={soupSectionInfo}></CategorySection>
    </div>
  );
};

export default SoupSection;
