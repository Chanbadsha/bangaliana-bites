import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo3.png";
import useAuth from "../../Hooks/useAuth";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOutUser();
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className="hover:text-coral transition duration-300 ease-in-out"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="contact"
          className="hover:text-coral transition duration-300 ease-in-out"
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="menu"
          className="hover:text-coral transition duration-300 ease-in-out"
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="shop"
          className="hover:text-coral transition duration-300 ease-in-out"
        >
          Our Shop
        </NavLink>
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
                className="h-6 w-6"
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
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow text-gray-800"
            >
              {navOptions}
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl">
            <div className="flex justify-center items-center gap-2">
              <img className="w-10" src={logo} alt="Logo" />
              <h1 className="text-3xl font-bold text-coral">
                Bangaliana Bites
              </h1>
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{navOptions}</ul>
        </div>

        <div className="navbar-end flex items-center space-x-4">
          <div className="relative inline-block">
            <Link
              to="/dashboard/my-cart"
              className="btn bg-black hover:bg-red-600 min-h-0 min-w-0 p-0 relative w-12 h-12 rounded-full shadow-md focus:ring-2 focus:ring-teal focus:outline-none"
            >
              <FaCartPlus className="text-white text-xl" />
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">
                +{cart.length}
              </div>
            </Link>
          </div>

          {user ? (
            <details className="dropdown dropdown-end relative">
              <summary className="btn bg-black w-12 h-12 px-0 py-0 rounded-full min-h-0 min-w-0 m-1 flex items-center justify-center hover:ring-2 hover:ring-gray-500">
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-full h-full rounded-full border-2 border-coral object-cover"
                />
              </summary>
              <ul className="menu space-y-1 dropdown-content bg-black text-white rounded-lg shadow-lg z-[1] w-28 p-2 mt-2">
                <li>
                  <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500">
                    Profile
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </details>
          ) : (
            <Link
              to="/login"
              className="btn bg-black text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
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
