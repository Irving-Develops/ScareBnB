import React, { useEffect, useState, useContext } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, redirect } from "react-router";
import FloatingLabel from "../FloatingLabel";
import FloatingInput from "../FloatingInput";
import { Modal, ToggleModalContext } from "../../context/Modal";
import Logout from "../Logout";

function LoginForm() {
  const {updateShowModal } = useContext(ToggleModalContext);

  const dispatch = useDispatch();
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
    return updateShowModal(false);
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
    return updateShowModal(false);
  };

  return (
    <div id="form-wrapper">
      <div id="form-header">
        {sessionUser ? (
          <p>Logged in as {sessionUser.username}</p>
        ) : (
          <p>Login</p>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <h3>Welcome to vanbnb</h3>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FloatingLabel>Password</FloatingLabel>
        </div>
      </form>
      <button onClick={demo}>Demo</button>
    </div>
  );
}

export default LoginForm;
