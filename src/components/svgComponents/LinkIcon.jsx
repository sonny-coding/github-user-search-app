// eslint-disable-next-line react/prop-types
const LinkIcon = ({ color = "currentColor" }) => (
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
      strokeWidth={36}
      d="M208 352h-64a96 96 0 0 1 0-192h64m96 0h64a96 96 0 0 1 0 192h-64m-140.71-96h187.42"
    />
  </svg>
);
export default LinkIcon;
