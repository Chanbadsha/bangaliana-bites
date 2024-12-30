import React from "react";

const MenuCard = ({ cardInfo }) => {
  const { image, name, recipe, price } = cardInfo || [];

  return (
    <div className="flex gap-2">
      {/* Card Img */}
      <div className="">
        <img
          style={{ borderRadius: "0px 200px 200px 200px" }}
          src={image}
          className="w-[200px]"
          alt={name}
        />
      </div>
      {/* Card Text */}
      <div>
        <h1 className="font-bold">{name}</h1>
        <p className="">{recipe}</p>
      </div>
      {/* Price Section */}
      <div className="flex-1 text-yellow-500 ">
        <p>${price}</p>
      </div>
    </div>
  );
};

export default MenuCard;
