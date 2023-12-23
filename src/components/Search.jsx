import { useState } from "react";
import SearchIcon from "./svgComponents/SearchIcon";
// eslint-disable-next-line react/prop-types
const Search = ({ setUser }) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const fetchUser = async (user) => {
    // https://api.github.com/users/thatanjan
    const url = "https://api.github.com/users/";
    const fetchURL = url.concat(user);
    try {
      const options = {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
      };
      const response = await fetch(fetchURL, options);
      if (!response.ok) {
        throw new Error("Network response was not okay");
      }
      const data = await response.json();
      setUser({ data });
    } catch (error) {
      console.error(`Error fetching data:`, error);
    }
  };
  return (
    <div className="flex items-center justify-center w-full mt-10 bg-white rounded-2xl">
      <form action="" className="flex items-center justify-center w-full px-3">
        <span className="w-[40px] text-light-teal-blue">
          <SearchIcon />
        </span>
        <input
          className="w-full px-4 py-6 text-lg outline-none laceholder-light-teal-blue focus:ring-0"
          type="text"
          placeholder="Search Github username..."
          value={input}
          onChange={handleChange}
        />
        <button
          className="w-full py-3 text-base text-white rounded-lg px-7 bg-light-blue max-w-[170px]"
          onClick={() => {
            fetchUser(input);
          }}
        >
          FIND
        </button>
      </form>
    </div>
  );
};

export default Search;
