import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileSvg from "./SVGS/ProfileSvg";
import HamburgerSvg from "./SVGS/HamburgerSvg";

library.add(faUser, faEnvelope);

const loggedInNavlinks = [
  { name: "profile", link: "/profile" },
  { name: "settings", link: "/settings" },
  { name: "logout", link: "/" },
];
const loggesOutNavlinks = [
  { name: "login", link: "/login" },
  { name: "sign up", link: "/sign-up" },
  { name: "vanbnb your home on wheels", link: "/host" },
];
const Navbar = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="navbar bg-base-100 px-16">
      <div className="flex-1">
        <Link to="/" className="text-xl text-rose-500">
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
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {sessionUser ? (
              <>
                {loggedInNavlinks.map((link) => (
                  <li>
                    <button
                      onClick={toggleModal}
                      className="active:bg-rose-500"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </>
            ) : (
              <>
                {loggesOutNavlinks.map((link) => (
                  <li>
                    <Link
                      to={link.link}
                      className="text-left active:bg-rose-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
