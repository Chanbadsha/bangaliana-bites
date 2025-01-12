import React from "react";
import Sidebar from "../../../Shared/DashobardSIdebar/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="flex max-w-7xl mx-auto min-h-screen">
        {/* Sidebar */}
        <section className=" w-[300px] bg-orange-400">
          <Sidebar></Sidebar>
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
