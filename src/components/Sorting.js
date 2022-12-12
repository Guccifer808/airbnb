import React from "react";

const Sorting = ({ icon, title }) => {
  return (
    <div
      className="
       flex items-center gap-1 py-1 px-1.5 sm:px-4 rounded-full
       text-[16px] sm:text-[17px]
     text-white bg-[#FF385C] duration-200 ease-in-out
     hover:bg-white hover:text-[#FF385C]"
    >
      {icon}
      {title}
    </div>
  );
};

export default Sorting;
