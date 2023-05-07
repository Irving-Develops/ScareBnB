import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileSvg from "../SVGS/ProfileSvg";
import HamburgerSvg from "../SVGS/HamburgerSvg";
import DropDown from "./DropDown";

library.add(faUser, faEnvelope);

const Navbar = () => {
  return (
    <div className="hidden md:block navbar bg-base-100 border border-2 md:mb-4 ">
      <div className="flex justify-between w-4/5 mx-auto">
        <div className="logo">
          <Link to="/" className="text-xl 	text-rose !important">
            vanbnb
          </Link>
        </div>
        <div className="">
          <div
            tabIndex={0}
            className="p-2 dropdown dropdown-end w-24 border-gray-200 border border-solid rounded-full hover:shadow-md"
          >
            <div className="flex justify-between h-8 items-center">
              <HamburgerSvg />
              <ProfileSvg />
            </div>
            <DropDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;