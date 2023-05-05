import React, { useEffect, useState } from "react";
import * as sessionActions from "../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, redirect } from "react-router";
import FloatingLabel from "./FloatingLabel";
import FloatingInput from "./FloatingInput";
import { Modal } from "../context/Modal";

// import "./LoginFormModal.css";
// import "../../index.css";

function LoginForm({setShowModal}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector((state) => state.session.user);

  const demo = (e) => {
    e.preventDefault();
    dispatch(
        sessionActions.login({ credential: "demo@user.io", password: "password" })
        
        ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
      
    });
    setShowModal(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    return setShowModal(false)
    
  };

  const logout = (e) => {
    e.preventDefault();
     dispatch(sessionActions.logout(navigate("/")));
     return setShowModal(false)
  };

  return (
    <div id="form-wrapper">
      <div id="form-header">
        {sessionUser ? (
          <p>Logged in as {sessionUser.username}</p>
        ) : (
          <p>please log in</p>
        )}
      </div>

      <form onSubmit={handleSubmit} id="form-content">
        <div id="errors">
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </div>
        <div className="relative mx-2">
          <FloatingInput
            type={"email"}
            id={"email"}
            placeholder={"email@example.io"}
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
          />
          <FloatingLabel>Email Address</FloatingLabel>
        </div>

        <div className="relative mx-2">
          <FloatingInput
          id={"password"}
            type={"password"}
            placeholder={"password"}
            value={credential}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FloatingLabel>Password</FloatingLabel>
        </div>
        <button onClick={logout}>Logout</button>
      </form>
      <button onClick={demo}>Demo</button>
    </div>
  );
}

export default LoginForm;
