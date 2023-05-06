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
    <div className="navbar bg-base-100 px-16 border border-2 mb-4 ">
      <div className="flex-1">
        <Link to="/" className="text-xl 	text-rose !important">
          vanbnb
        </Link>
      </div>
      <div className="flex-none">
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
  );
};

export default Navbar;
