import React from "react";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import useMenu from "../../../Hooks/useMenu";
import MenuCard from "../../../Shared/MenuCard/MenuCard";
import PrimaryBtn from "../../../Components/PrimaryBtn/PrimaryBtn";
const OfferPage = () => {
  const menu = useMenu();
  const todayOffer = menu.filter((offer) => offer.category === "offered");

  return (
    <div>
      <SectionHeader
        heading="TODAY'S OFFER"
        subHeading={`Don't miss`}
      ></SectionHeader>
      <div className="grid md:grid-cols-2 px-6 gap-12 mb-12">
        {todayOffer.map((offer) => (
          <MenuCard key={offer._id} cardInfo={offer}></MenuCard>
        ))}
      </div>
      <div className="text-center mb-12">
        {" "}
        <PrimaryBtn title="ORDER YOUR FAVOURITE FOOD"></PrimaryBtn>
      </div>
    </div>
  );
};

export default OfferPage;
