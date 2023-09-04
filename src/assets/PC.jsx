const Icon = ({ size, color = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    fill="#000000"
    viewBox="0 0 32 32"
    version="1.1"
    id="pc-case"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    enable-background="new 0 0 32 32"
    xml:space="preserve"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <rect x="15" y="23" width="2" height="2"></rect>
      <path d="M6 1v30h20V1H6zM24 29H8V15h16V29zM24 13H8V9h16V13zM24 7H8V3h16V7z"></path>
    </g>
  </svg>
);

export default Icon;
