import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo3.png";
import useAuth from "../../Hooks/useAuth";
import { FaCartPlus } from "react-icons/fa";
const Navbar = () => {
  const { user } = useAuth();
  console.log(user);
  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="contact">Contact Us</NavLink>
      </li>

      <li>
        <NavLink to="dashboard">Dashboard</NavLink>
      </li>

      <li>
        <NavLink to="menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="shop">Our Shop</NavLink>
      </li>
    </>
  );
  return (
    <div className=" w-full fixed z-10 bg-black     bg-opacity-40 text-white">
      <div className="max-w-7xl navbar mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn  btn-ghost text-xl">
            <div className="flex justify-center items-center gap-2">
              <img className="w-10" src={logo} alt="" />
              <h1 className="text-3xl">Bangaliana Bites</h1>
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <div className="relative inline-block">
            <Link
              to="/dashboard/my-cart"
              className="btn  min-h-0 min-w-0 bg-gray-200 hover:bg-gray-300 p-0 relative w-12 h-12 rounded-full shadow-md focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <FaCartPlus className="text-gray-700 p-0 text-xl"></FaCartPlus>
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5  flex items-center justify-center shadow">
                +99
              </div>
            </Link>
          </div>

          {user ? (
            <div className="flex items-center space-x-3">
              <img
                src={user.photoURL}
                alt="User Profile"
                className="w-10 h-10 rounded-full border-2 border-primary"
              />
              <span className="text-sm font-medium">
                {user.displayName || "User"}
              </span>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
