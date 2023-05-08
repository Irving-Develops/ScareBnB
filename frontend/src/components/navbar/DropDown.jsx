import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "../Logout";
import LoginForm from "../forms/LoginForm";
import ModalComponent from "../ModalComponent";

const DropDown = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      {!sessionUser ? (
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <ModalComponent text="Sign up">
              <LoginForm />
            </ModalComponent>
          </li>
          <li>
            <ModalComponent text="Login">
              <LoginForm />
            </ModalComponent>
          </li>
        </ul>
      ) : (
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to="/profile" className="text-left active:bg-rose">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/trips" className="text-left active:bg-rose">
              Trips
            </Link>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      )}
    </>
  );
};

export default DropDown;
