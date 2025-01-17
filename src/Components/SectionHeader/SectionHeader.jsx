import React from "react";

const SectionHeader = ({ heading, subHeading }) => {
  return (
    <div className="text-center  py-4 lg:py-12 ">
      <h4 className="text-yellow-500">---{subHeading}---</h4>
      <h1 className="uppercase text-2xl lg:text-4xl border-y-2 w-72 lg:w-96 mx-auto py-3 mt-2 mb-4">
        {heading}
      </h1>
    </div>
  );
};

export default SectionHeader;
