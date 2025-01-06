import React from "react";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import { FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

const LocationSection = () => {
  return (
    <div className="max-w-7xl mx-auto mb-12">
      <SectionHeader
        heading="Our Location"
        subHeading="Visit Us"
      ></SectionHeader>
      {/* Section Body */}
      <div className="flex  justify-center flex-col md:flex-row px-6 items-center gap-8">
        {/* Contact Card */}
        <div className="w-full md:w-[420px]  border h-[300px] box-border">
          <div className="bg-[#D1A054] border justify-center flex py-3  w-full">
            <span className="text-2xl">
              <FaPhoneVolume />
            </span>
          </div>
          <div className="flex flex-col justify-center text-center items-center -mt-12 h-full">
            <p className="text-xl font-semibold">PHONE</p>
            <p className="tracking-widest">+8801401213135</p>
          </div>
        </div>
        {/* Address Card */}
        <div className="w-full md:w-[420px] border h-[300px] box-border">
          <div className="bg-[#D1A054] border justify-center flex py-3  w-full">
            <span className="text-2xl">
              <FaLocationDot />
            </span>
          </div>
          <div className="flex flex-col justify-center items-center text-center -mt-12 h-full">
            <p className="text-xl font-semibold">ADDRESS</p>
            <p className="tracking-widest">
              Zigatola, Dhanmondi, <br /> Dhaka, Bangladesh
            </p>
          </div>
        </div>
        {/* Working Time Card */}
        <div className="w-full md:w-[420px] border h-[300px] box-border">
          <div className="bg-[#D1A054] border justify-center flex py-3  w-full">
            <span className="text-2xl">
              <IoTime />
            </span>
          </div>
          <div className="flex flex-col justify-center items-center text-center -mt-12 h-full">
            <p className="text-xl font-semibold">WORKING HOURS</p>
            <p className="tracking-widest">
              Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
