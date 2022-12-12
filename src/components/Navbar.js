import React from "react";
import logo from "../assets/logo3.svg";
import { TfiWorld } from "react-icons/tfi";
import { FiMenu, FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex sm:mx-6 md:mx-8 lg:mx-10 items-center justify-between">
        {/* Left */}
        <div className="flex h-20 -mx-12">
          <img src={logo} alt="logo" className="object-cover -my-10 " />
        </div>
        {/* Middle */}
        <div className="hidden lg:flex items-center justify-center relative border shadow-md shadow-gray-300 rounded-full">
          <input
            type="search"
            placeholder=""
            className="py-2.5 w-[18rem] outline-0 rounded-full"
          />
          <div className="flex pr-14 pl-10 justify-between w-full absolute font-semibold text-gray-600/75">
            <button className="border-r w-full">Place</button>
            <button className="border-r w-full">Time</button>
            <button className="w-full ">Guests</button>
          </div>
          <div className="flex bg-[#FF385C] rounded-full p-2 mr-2 ">
            <FiSearch className="text-white" />
          </div>
        </div>
        {/* Right */}
        <div className="flex pr-3 items-center font-semibold text-gray-600">
          <p className="text-[16px]">Rent a House</p>
          <div className="flex items-center mx-8 gap-1">
            <TfiWorld />
            <div className="">EN</div>
          </div>
          <div
            className="flex bg-[#FF385C] text-white font-semibold 
                        items-center px-3 py-2 gap-3 border rounded-full
                        shadow-lg shadow-gray-300 hover:text-black hover:bg-[#ffffff] duration-100 ease-out
                        "
          >
            <FiMenu className="text-[18px]" />
            {/* <p>Sign In</p> */}
            <AiOutlineUser className="text-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
