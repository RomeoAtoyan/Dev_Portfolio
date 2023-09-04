const Icon = ({ color, size, strokeWidth, ...props }) => (
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
    <path d="M4 12h16" />
    <path d="m13 5 7 7-7 7" />
  </svg>
);

export default Icon;

