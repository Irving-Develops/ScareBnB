import React from "react";

const XiconSvg = ({styles}) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{
        display: "block",
        fill: "black",
        stroke: "currentcolor",
        overflow: "visible",

        ...styles,
      }}
    >
      <path d="m6 6 20 20"></path>
      <path d="m26 6-20 20"></path>
    </svg>
  );
};



export default XiconSvg;
