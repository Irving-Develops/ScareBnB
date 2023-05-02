import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar bg-white">
      <div className="flex-1">
        <NavLink to="#" className="btn btn-ghost normal-case text-xl">
          daisyUI
        </NavLink>
      </div>
      <div className="dropdown dropdown-end">
        <label tabindex="0" className="btn btn-ghost btn-circle avatar">
          <div className="w-32 rounded-full">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                fill: "none",
                height: "16px",
                width: "16px",
                stroke: "currentcolor",
                strokeWidth: "3",
                overflow: "visible",
              }}
            >
              <g fill="none" fill-rule="nonzero">
                <path d="m2 16h28"></path>
                <path d="m2 24h28"></path>
                <path d="m2 8h28"></path>
              </g>
            </svg>

            <img
              className="dropdown-img"
              src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"
              alt=""
            />

            {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
          </div>
        </label>
        <ul
          tabindex="0"
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <NavLink to="#" className="justify-between" to="#">
              Profile
              <span className="badge">New</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">Settings</NavLink>
          </li>
          <li>
            <NavLink to="#">Logout</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
