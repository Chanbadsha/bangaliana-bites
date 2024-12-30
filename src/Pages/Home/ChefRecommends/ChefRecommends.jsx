import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../../Shared/FoodCard/FoodCard";
const ChefRecommends = () => {
  const menu = useMenu();
  const ChefRecommend = menu.filter((menu) => menu.category === "offered");

  return (
    <div className="pb-12">
      <SectionHeader
        heading="CHEF RECOMMENDS"
        subHeading="Should Try"
      ></SectionHeader>

      <div className="grid justify-center px-6 md:px-12 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-3">
        {ChefRecommend.slice(0, 3).map((menu) => (
          <FoodCard key={menu._id} cardInfo={menu}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default ChefRecommends;
