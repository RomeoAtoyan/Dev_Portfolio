const Icon = ({ size = 59, color = "#4DB33D", ...props }) => (
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
      d="M12.59.26a.8.8 0 0 0-1.18 0L7.2 4.851a8.8 8.8 0 0 0-.432 11.383l4.432 5.642V24h1.6v-2.123l4.432-5.642A8.8 8.8 0 0 0 16.8 4.852L12.59.26Zm.21 4.54a.8.8 0 0 0-1.6 0v12a.8.8 0 1 0 1.6 0v-12Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
