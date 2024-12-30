import React, { useEffect, useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import axios from "axios";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import PrimaryBtn from "../../../Components/PrimaryBtn/PrimaryBtn";
import DateObject from "react-date-object";

const FeaturedFood = () => {
  const [menu, setMenu] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("../featured.json");
      setMenu(response.data);
    };
    fetchData();
  }, []);
  const { image, title, description } = menu || {};
  const date = new DateObject();
  return (
    <div
      className="hero h-[700px]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-neutral-content ">
        <div className="max-w-5xl -mt-20 mx-auto ">
          {/* Header Section */}
          <div>
            <SectionHeader
              heading="From Our Menu"
              subHeading="Check it out"
            ></SectionHeader>
          </div>
          {/* Content section */}
          <div className="grid grid-cols-5 gap-4">
            {/* Image section */}
            <div className="col-span-2">
              <img src={image} alt={name} />
            </div>
            {/* Content Section */}
            <div className="col-span-3 text-white">
              <p> {date.format("dddd DD MMMM ")}</p>
              <h1 className="mb-5 text-3xl font-bold">{title}</h1>
              <p className="mb-5">{description}</p>
              <PrimaryBtn title="Read More" fontColor="white"></PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFood;
