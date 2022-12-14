import React from "react";
import { FaHotjar } from "react-icons/fa";
import {
  GiHouseKeys,
  GiPeaks,
  // GiBowlingStrike,
  // GiVikingLonghouse,
  GiSailboat,
  // GiUfo,
  // GiPalmTree,
} from "react-icons/gi";
import { TbDisabled2 } from "react-icons/tb";
import Sorting from "./Sorting";

const Filter = () => {
  const sortOptions = [
    { title: "Boating", icon: <GiSailboat /> },
    { title: "Adapted", icon: <TbDisabled2 /> },
    { title: "Trending", icon: <FaHotjar /> },
    { title: "New", icon: <GiHouseKeys /> },
    { title: "Mountains", icon: <GiPeaks /> },
    // { title: "Play", icon: <GiBowlingStrike /> },
    // { title: "Wow!", icon: <GiUfo /> },
    // { title: "Beach", icon: <GiPalmTree /> },
    // { title: "Hanoks", icon: <GiVikingLonghouse /> },
  ];

  return (
    <div className="">
      <div className="flex justify-start sm:gap-4 gap-3 mt-4 pl-0 sm:pl-0 md:pl-0 lg:pl-0 xl:pl-0">
        {sortOptions.map((obj) => (
          <Sorting title={obj.title} icon={obj.icon} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
