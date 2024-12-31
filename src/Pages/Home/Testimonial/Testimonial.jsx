import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import FeedBack from "./FeedBack";
import { FaMessage } from "react-icons/fa6";

const Testimonial = () => {
  const [feedBack, setFeedBack] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("../reviews.json");
      setFeedBack(data);
    };
    fetchData();
  }, []);

  return (
    <div className="pb-16">
      {/* Header Section */}
      <div>
        <SectionHeader
          heading="Testimonials"
          subHeading="What Our Clients Say"
        ></SectionHeader>
        {/* Client FeedBack  */}
        {/* FeedBack Icon */}
        <div className="text-5xl md:text-7xl lg:pb-12  flex  justify-center">
          <FaMessage />
        </div>
        <div>
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {feedBack.map((review) => (
                <SwiperSlide key={review._id}>
                  <FeedBack feedBack={review}></FeedBack>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
