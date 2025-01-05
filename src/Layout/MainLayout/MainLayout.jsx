import React from "react";
import Homepage from "../../Pages/Home/HomePage/Homepage";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Loader from "../../Components/Loader/Loader";

const MainLayout = () => {
  const { loading } = useAuth();
  if (loading) {
    return <Loader />;
  }
  const location = useLocation();

  const noHeaderOrFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  return (
    <div>
      <div className="w-full"> {!noHeaderOrFooter && <Navbar></Navbar>}</div>
      <Outlet></Outlet>
      {!noHeaderOrFooter && <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
