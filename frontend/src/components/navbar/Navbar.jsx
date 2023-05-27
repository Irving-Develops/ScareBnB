import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProfileSvg from "../SVGS/ProfileSvg";
import HamburgerSvg from "../SVGS/HamburgerSvg";
import DropDown from "./DropDown";

library.add(faUser, faEnvelope);

const Navbar = () => {
  return (
    <div className="hidden md:block navbar bg-base-100 border md:mb-4 h-20 p-0">
      <div className="flex justify-between w-4/5 mx-auto  h-full items-center">
        <div className="logo">
          <Link
            to="/"
            style={{ transition: "none", color: "inherit" }}
            className="text-2xl font-bold	!text-rose !no-underline"
          >
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
