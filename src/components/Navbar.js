import React from "react";
import logo from "../assets/logo.svg";
import { TfiWorld } from "react-icons/tfi";
import { FiMenu } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between border-b">
      {/* Left */}
      <div className=" h-20 flex -mx-12 ">
        <img src={logo} alt="logo" className="object-cover -my-10" />
      </div>
      {/* Middle */}
      <div className="flex relative">
        <input type="search" placeholder="" />
        <div className="absolute">
          <button>Place</button>
          <button>Time</button>
          <button>Guests</button>
        </div>
      </div>
      {/* Right */}
      <div className="flex pr-3 items-center">
        <p>Rent your home</p>
        <TfiWorld />
        <div className="flex items-center">
          <FiMenu />
          <AiOutlineUser />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
