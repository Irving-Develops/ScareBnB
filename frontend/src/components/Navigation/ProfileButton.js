import React, { useState, useEffect } from "react";
import {useHistory, NavLink} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css'

function ProfileButton({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = async(e) => {
    e.preventDefault();
    await dispatch(sessionActions.logout(history));
    return history.push('/')
  };

  return (
    <>
      <button id="profile-btn" onClick={openMenu}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{"display": "block", "fill": "none", "height": "16px", "width": "16px", "stroke": "currentcolor", "strokeWidth": "3", "overflow": "visible" }}><g fill="none" fill-rule="nonzero"><path d="m2 16h28"></path><path d="m2 24h28"></path><path d="m2 8h28"></path></g></svg>
        <img className="dropdown-img" src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3" alt="" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <NavLink to={'/my-trips'}>Trips</NavLink>
          </li>
          <li>
            <button id="logout-btn" onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;