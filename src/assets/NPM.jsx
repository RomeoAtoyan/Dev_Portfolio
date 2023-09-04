const Icon = ({ size = 59, color = "#CC3534", ...props }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M24 0H0v24h24V0zM2.578 2.578H21.42V21.42h-4.75V7.33h-4.752v14.09h-9.34V2.578z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
