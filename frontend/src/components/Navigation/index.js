import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal'; 
import SignupFormModal from '../SignupFormModal';
import BecomeHostModal from '../BecomeHostModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal / >
        {/* <BecomeHostModal /> */}
      </>
    );
  }

  return (
    <div className="nav-container">
      <div className="nav-title">
        <NavLink exact to="/" id="logo">scarebnb</NavLink>
        {/* <h1>scareBnB</h1> */}
      </div>
      <div className="nav-links">
        <div id="become-a-host">
          <BecomeHostModal />
        </div>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
