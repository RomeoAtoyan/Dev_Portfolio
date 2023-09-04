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
    <path d="M12 3v18m0 0-7-7m7 7 7-7" />
  </svg>
);

export default Icon;
