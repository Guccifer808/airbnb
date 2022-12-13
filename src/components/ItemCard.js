import React from "react";
import { BsStarFill } from "react-icons/bs";
const ItemCard = ({ title, image, price, date }) => {
  return (
    <div className="">
      <div className="relative">
        <div className="gradient absolute h-full w-full rounded-b-[1.25rem]"></div>
        <div className="flex">
          {/* Bg/Img */}
          <img
            className="object-cover rounded-[1.25rem] sm:h-[12rem] w-full"
            src={image}
            alt={title}
          ></img>
          {/* Title */}
          <div className="flex absolute items-center gap-2 text-white font-bold bottom-1 left-4 text-[20px]">
            {title}
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="flex justify-between items-start pt-3">
        {/* Left */}
        <div className="">
          <p className="max-w-[20srem] font-semibold text-gray-600 text-[14px]">
            Some description of the rental property
          </p>
          <p className="max-w-[20rem] text-gray-600 text-[14px] -mt-1">
            {date}
          </p>
          <p className="max-w-[20srem] font-semibold text-[18px]">${price}</p>
        </div>
        {/* Right */}
        <div className="flex items-center space-x-1">
          <BsStarFill />
          <p className="text-[14px]">5.0</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
