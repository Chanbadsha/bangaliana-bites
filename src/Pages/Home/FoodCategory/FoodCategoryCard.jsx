// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const FoodCategoryCard = ({ cardDetail }) => {
  const { cardImg, title } = cardDetail || {};
  return (
    <SwiperSlide className="w-full ">
      <img className="w-full" src={cardImg} alt="" />
      <p className="-mt-20 absolute text-white bg-black w-full text-center bg-opacity-30 text-xl py-2">
        {title}
      </p>
    </SwiperSlide>
  );
};

export default FoodCategoryCard;
