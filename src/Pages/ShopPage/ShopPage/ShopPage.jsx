import { NavLink, Outlet } from "react-router-dom";
import CommonBanner from "../../../Shared/CommonBanner/CommonBanner";
import bannerBg from "../../../assets/shop/banner2.jpg";
import FoodDisplay from "../FoodDisplay/FoodDisplay";
const ShopPage = () => {
  return (
    <div>
      <CommonBanner
        bannerBg={bannerBg}
        heading="Your Gateway to Bengali Flavors"
        subHeading="Find everything you need to recreate the magic of Bangaliana Bites at home. From traditional staples to modern twists, our shop has something for every food lover."
      ></CommonBanner>
      {/* Food Display Section */}
      <section className="py-12 bg-gray-50">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-3xl font-semibold mb-4 text-gray-800">
            === Explore Our Menu ===
          </h2>
          <ul className="menu menu-horizontal px-1 gap-2 lg:gap-4 text-lg flex-wrap justify-center">
            <li>
              <NavLink className="lg:px-6 lg:py-2" to="/shop/pizza">
                Pizza
              </NavLink>
            </li>
            <li>
              <NavLink className="lg:px-6 lg:py-2" to="/shop/soup">
                Soup
              </NavLink>
            </li>
            <li>
              <NavLink className="lg:px-6 lg:py-2" to="/shop/dessert">
                Dessert
              </NavLink>
            </li>
            <li>
              <NavLink className="lg:px-6 lg:py-2 " to="/shop/salad">
                Salad
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Section Body */}
        <div className="container mx-auto">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
