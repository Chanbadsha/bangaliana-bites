import React from "react";
import { Link } from "react-router-dom";

const PrimaryBtn = ({ title, link = "/", fontColor = "black" }) => {
  return (
    <Link
      to={link}
      className={` btn btn-outline border-b-2 border-t-0 border-x-0 text-${fontColor} `}
    >
      {title}
    </Link>
  );
};

export default PrimaryBtn;
