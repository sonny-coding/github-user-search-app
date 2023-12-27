// eslint-disable-next-line react/prop-types
const Nav = ({ setIsDarkMode }) => {
  const toggleIsDarkMode = () => {
    setIsDarkMode((current) => {
      return !current;
    });
  };
  return (
    <div className="flex flex-row items-center justify-between w-full text-light-teal-blue dark:text-white">
      <p className="text-3xl font-bold ">devfinder</p>
      <p
        className="text-sm font-bold hover:cursor-pointer underline-offset-8 [&>*]:decoration-2"
        onClick={toggleIsDarkMode}
      >
        <span className="underline dark:no-underline">light</span>/
        <span className="no-underline dark:underline">dark</span>
      </p>
    </div>
  );
};

export default Nav;
