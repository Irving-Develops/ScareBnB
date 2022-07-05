import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginFormModal.css';
import '../../index.css';

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const demo = () => {
    setCredential("Demo-lition")
    setPassword("password")
  }

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

  return (
    <div id='form-wrapper'>

      <div id='form-header'>
        <p>Log In</p>
      </div>


      <form onSubmit={handleSubmit} id='form-content'>
        <h3 id="form-title">Welcome to ScareBnB</h3>
        <div id='errors'>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </div>
        <div id="input-container">
          <input
            style={{backgroundColor: ' white'}}
            className={'form-input'}
            type="text"
            value={credential}
            placeholder="Username or Email"
            onChange={(e) => setCredential(e.target.value)}
            required
          />
          <hr />
          <input
            style={{backgroundColor: ' white'}}
            className={'form-input'}
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* </label> */}
        </div>

        <button type="submit">Log In</button>
        <button type="submit" onClick={demo}>Demo</button>
      </form>
    </div>
  );
}


export default LoginForm;