import React from 'react'

const Login = () => {
  return (
    <>
      <label htmlFor="login-modal" className="btn">
        Login
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="login-modal" className="modal-toggle absolute" />
      <label htmlFor="login-modal" className="modal cursor-pointer ">
        <label className="modal-box relative" htmlFor="">
        </label>
      </label>
    </>
  );
}

export default Login