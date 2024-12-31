import React, { useEffect } from "react";
import CommonBanner from "../../../Shared/CommonBanner/CommonBanner";
import bannerBg from "../../../assets/home/chef-service.jpg";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import useMenu from "../../../Hooks/useMenu";

import MenuCard from "../../../Shared/MenuCard/MenuCard";
import PrimaryBtn from "../../../Components/PrimaryBtn/PrimaryBtn";
const PopularMenu = () => {
  const menu = useMenu();

  const PopularMenu = menu.filter((popular) => popular.category === "popular");

  return (
    <div>
      <CommonBanner
        bannerBg={bannerBg}
        heading="Signature Specials"
        subHeading="At Bangaliana Bites, we believe in reimagining the classics while staying true to our roots. Our signature specials are a perfect blend of tradition and innovation, curated to bring you a dining experience like no other. Dive into dishes crafted with fresh ingredients, secret spices, and the expertise of our passionate chefs. These are the creations we’re proud to call our own!"
      ></CommonBanner>
      <SectionHeader
        heading="FROM OUR MENU"
        subHeading="Check it out"
      ></SectionHeader>
      <div className="grid md:grid-cols-2 px-6 gap-12 mb-12">
        {PopularMenu.map((menu, index) => (
          <MenuCard key={index} cardInfo={menu}></MenuCard>
        ))}
      </div>
      <div className="text-center mb-12">
        <PrimaryBtn title="View Full Menu"></PrimaryBtn>
      </div>
    </div>
  );
};

export default PopularMenu;
