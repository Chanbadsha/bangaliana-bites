import React from "react";
import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { FaBagShopping, FaMoneyCheckDollar } from "react-icons/fa6";
import { MdDateRange, MdRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="flex max-w-7xl mx-auto min-h-screen">
        {/* Sidebar */}
        <section className=" w-[300px] bg-orange-400">
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
          </ul>
        </section>
        {/* Main Content */}
        <section className="flex-1">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
