import React from "react";
import { FaHotjar } from "react-icons/fa";
import {
  GiHouseKeys,
  GiPeaks,
  GiBowlingStrike,
  GiVikingLonghouse,
  GiSailboat,
  GiUfo,
  GiPalmTree,
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
    { title: "Play", icon: <GiBowlingStrike /> },
    { title: "Wow!", icon: <GiUfo /> },
    { title: "Beach", icon: <GiPalmTree /> },
    { title: "Hanoks", icon: <GiVikingLonghouse /> },
  ];

  return (
    <div className="sm:mx-6 md:mx-8 lg:mx-10">
      <div className="flex justify-center gap-3 mt-2">
        {sortOptions.map((obj) => (
          <Sorting title={obj.title} icon={obj.icon} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
