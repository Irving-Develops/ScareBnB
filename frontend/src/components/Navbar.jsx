import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Modal, ModalProvider } from "../context/Modal";

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

  console.log(showModal)
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
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "1rem",
                width: "50%",
                fill: "none",
                stroke: "currentcolor",
                strokeWidth: "3px",
                overflow: "visible",
              }}
            >
              <g fill="none" fill-rule="nonzero">
                <path d="m2 16h28"></path>
                <path d="m2 24h28"></path>
                <path d="m2 8h28"></path>
              </g>
            </svg>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "100%",
                width: "50%",
                fill: "currentcolor",
              }}
            >
              <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
            </svg>
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
                        {showModal && (
                          <Modal onClose={()=> setShowModal(false)}>
                            <h1>This is a modal!</h1>
                            <p>You can put any content here.</p>
                          </Modal>
                        )}
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
