import React from "react";

const Sorting = ({ icon, title }) => {
  return (
    <div
      className="
       flex justify-center items-center gap-1 py-1.5 px-2.5 sm:px-3 rounded-full
       text-[13px] sm:text-[16px]
     text-white bg-[#FF385C] duration-200 ease-in-out
     hover:bg-white hover:text-[#FF385C]"
    >
      {icon}
      {title}
    </div>
  );
};

export default Sorting;
