import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../public/logo3.png";
const Navbar = () => {
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
      <li>
        <NavLink to="login">Login</NavLink>
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
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
