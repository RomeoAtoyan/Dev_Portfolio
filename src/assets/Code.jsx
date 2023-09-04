import * as React from "react";

const Icon = ({ size, strokeWidth = 1, color = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m7 8-4 4 4 4" />
    <path d="m17 8 4 4-4 4" />
    <path d="M14 4 9.859 19.455" />
  </svg>
);

export default Icon;
