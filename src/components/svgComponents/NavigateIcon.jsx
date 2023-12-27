// eslint-disable-next-line react/prop-types
const NavigateIcon = ({ color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
  >
    <path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M448 64 64 240.14h200a8 8 0 0 1 8 8V448z"
    />
  </svg>
);
export default NavigateIcon;
