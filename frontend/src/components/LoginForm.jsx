import React, { useEffect, useState } from "react";
import * as sessionActions from "../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import FormInput from "./FormInput";
// import "./LoginFormModal.css";
// import "../../index.css";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector(state => state.session.user)

  console.log(sessionUser, "HERE =========")
  const demo = () => {
    setCredential("user1");
    setPassword("password");
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const logout = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.logout(navigate("/")));
  };

  return (
    <div id="form-wrapper">
      <div id="form-header">
        <p>Log In</p>
        {sessionUser ? 
        <p>Logged in as {sessionUser.username}</p>
        :
        <p>please log in</p>    
    }   
      </div>

      <form onSubmit={handleSubmit} id="form-content">
        <h3 id="form-title">Welcome to ScareBnB</h3>
        <div id="errors">
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </div>
        <div id="input-container">
          <input
            type="text"
            placeholder="Username or Email"
            onChange={(e) => setCredential(e.target.value)}
            value={credential}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Log In</button>
        <button type="submit" onClick={demo}>
          Demo
        </button>
        <button onClick={logout}>Logout</button>
      </form>
    </div>
  );
}

export default LoginForm;
