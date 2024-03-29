import React from 'react'

const HamburgerSvg = () => {
  return (
    <>
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        style={{
          display: "block",
          height: "1rem",
          width: "50%",
          fill: "none",
          stroke: "currentcolor",
          strokeWidth: "3px",
          overflow: "visible",
        }}
      >
        <g fill="none" fillRule="nonzero">
          <path d="m2 16h28"></path>
          <path d="m2 24h28"></path>
          <path d="m2 8h28"></path>
        </g>
      </svg>
    </>
  );
}

export default HamburgerSvg