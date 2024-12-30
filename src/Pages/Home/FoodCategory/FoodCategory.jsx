import React, { useEffect, useState } from "react";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import FoodCategoryCard from "./FoodCategoryCard";
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const FoodCategory = () => {
  const [cardDetail, setCardDetail] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/foodCategory.json");
        const data = response.data;
        setCardDetail(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {/* Heading Section */}
      <SectionHeader
        heading={"ORDER ONLINE"}
        subHeading={"From 11:00am to 10:00pm"}
      ></SectionHeader>
      {/* Category Card */}
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {cardDetail.map((card) => (
            <SwiperSlide>
              <SwiperSlide>
                <FoodCategoryCard
                  key={card.id}
                  cardDetail={card}
                ></FoodCategoryCard>
              </SwiperSlide>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FoodCategory;
