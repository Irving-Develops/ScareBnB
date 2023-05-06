import React, { useContext } from "react";
import * as sessionActions from "../store/session";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ToggleModalContext } from "../context/Modal";

const Logout = () => {
  const { updateShowModal } = useContext(ToggleModalContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout(navigate("/")));
    return updateShowModal(false);
  };
  return (
    <button className="text-left active:bg-rose" onClick={logout}>
      Logout
    </button>
  );
};

export default Logout;
