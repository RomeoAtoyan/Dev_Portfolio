import PropTypes from "prop-types";
const Icon = ({ size, strokeWidth = 1, color, ...props }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m21 21-2.243-2.247-2.243-2.247" />
    <path d="M19 10.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z" />
  </svg>
);

export default Icon;

Icon.propTypes = {
  size: PropTypes.number || PropTypes.string,
  strokeWidth: PropTypes.number,
  color: PropTypes.string,
};
