import {
  FaBars,
  FaCalendar,
  FaHome,
  FaPhone,
  FaShopify,
  FaShoppingCart,
} from "react-icons/fa";
import { FaBagShopping, FaMoneyCheckDollar } from "react-icons/fa6";
import { MdDateRange, MdRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      {/* Side Bar Heder */}
      <div className="text-xl font-semibold lg:font-bold  lg:text-3xl py-3 text-center">
        <h1 className="">Bangaliana Bites</h1>
        <p>Restaurant</p>
      </div>
      {/* SideBar Links */}
      <ul className="menu px-1 space-y-1 pt-3 pl-4">
        <li>
          <NavLink
            to="/dashboard/userhome"
            className="flex items-center gap-1 font-semibold"
          >
            <span>
              {" "}
              <FaHome></FaHome>
            </span>{" "}
            User Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/reservation"
            className="flex items-center gap-1 font-semibold"
          >
            <span>
              {" "}
              <FaCalendar></FaCalendar>
            </span>{" "}
            Reservation
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/payment"
            className="flex items-center gap-1 font-semibold"
          >
            <span>
              {" "}
              <FaMoneyCheckDollar />
            </span>{" "}
            Payment History
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-cart"
            className="flex items-center gap-1 font-semibold"
          >
            <span>
              {" "}
              <FaShoppingCart></FaShoppingCart>
            </span>{" "}
            My Cart
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/add-review"
            className="flex items-center gap-1 font-semibold"
          >
            <span>
              {" "}
              <MdRateReview />
            </span>{" "}
            Add Review
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-booking"
            className="flex items-center gap-1 font-semibold"
          >
            <span>
              {" "}
              <MdDateRange />
            </span>{" "}
            My Booking
          </NavLink>
        </li>
        <div className="divider"></div>
        <li>
          <NavLink className="flex items-center gap-1 font-semibold" to="/">
            <span>
              <FaHome></FaHome>
            </span>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink className="flex items-center gap-1 font-semibold" to="/menu">
            <span>
              <FaBars></FaBars>
            </span>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink className="flex items-center gap-1 font-semibold" to="/shop">
            <span>
              <FaShopify></FaShopify>
            </span>
            Shop
          </NavLink>
        </li>

        <li>
          <NavLink
            className="flex items-center gap-1 font-semibold"
            to="/contact"
          >
            <span>
              <FaPhone></FaPhone>
            </span>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
