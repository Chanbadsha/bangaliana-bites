import React from "react";
import CommonBanner from "../CommonBanner/CommonBanner";
import MenuCard from "../MenuCard/MenuCard";
import PrimaryBtn from "../../Components/PrimaryBtn/PrimaryBtn";

const CategorySection = ({ categoryInfo }) => {
  const { bannerBg, heading, subHeading, menuData, btnTitle } =
    categoryInfo || {};
  return (
    <div>
      <CommonBanner
        bannerBg={bannerBg}
        heading={heading}
        subHeading={subHeading}
      ></CommonBanner>
      <div className="grid mt-16 md:grid-cols-2 px-6 gap-12 mb-12">
        {menuData.slice(0, 6).map((menu) => (
          <MenuCard key={menu._id} cardInfo={menu}></MenuCard>
        ))}
      </div>
      <div className="text-center mb-12">
        <PrimaryBtn title={btnTitle}></PrimaryBtn>
      </div>
    </div>
  );
};

export default CategorySection;
