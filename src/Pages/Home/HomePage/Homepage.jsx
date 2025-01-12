import React from "react";
import Banner from "../Banner/Banner";
import FoodCategory from "../FoodCategory/FoodCategory";
import PopularMenu from "../PopularMenu/PopularMenu";
import Contact from "../Contact/Contact";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import Testimonial from "../Testimonial/Testimonial";
import useAuth from "../../../Hooks/useAuth";
import Loader from "../../../Components/Loader/Loader";
import { useLocation } from "react-router-dom";

const Homepage = () => {
  const { loading } = useAuth();
  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Banner></Banner>
        <FoodCategory></FoodCategory>
        <PopularMenu></PopularMenu>
        <Contact></Contact>
        <ChefRecommends></ChefRecommends>
        <FeaturedFood></FeaturedFood>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Homepage;
