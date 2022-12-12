import React from "react";

const Sorting = ({ icon, title }) => {
  return (
    <div
      className="flex items-center gap-1 py-1 px-4 rounded-full
     text-white bg-[#FF385C] duration-200 ease-in-out
     hover:bg-white hover:text-[#FF385C]"
    >
      {icon}
      {title}
    </div>
  );
};

export default Sorting;
