// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ReactStars from "react-rating-stars-component";
const FeedBack = ({ feedBack }) => {
  const { name, details, rating } = feedBack || {};

  return (
    <div className=" pb-12 justify-center items-center flex-col flex">
      {/* Rating */}
      <div>
        <ReactStars
          count={5}
          size={24}
          isHalf={true}
          value={rating}
          edit={false}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
        ,
      </div>
      {/* FeedBack */}
      <div className=" flex justify-center text-sm md:text-base items-center flex-col px-6 text-center ">
        <p>{details}</p>
        <p className=" text-2xl lg:text-4xl text-orange-400 ">{name}</p>
      </div>
    </div>
  );
};

export default FeedBack;
