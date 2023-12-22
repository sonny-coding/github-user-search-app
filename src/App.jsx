import { useState } from "react";
export default function App() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);
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
      console.log(data);
      setUser(data);
      // console.log(user);
    } catch (error) {
      console.error(`Error fetching data:`, error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center text-base">
      <input
        className="w-full py-2"
        type="text"
        placeholder="find a user..."
        value={input}
        onChange={handleChange}
      />
      <p>{input}</p>
      <button
        className="w-full px-4 py-2 text-base bg-slate-200"
        onClick={() => {
          fetchUser(input);
        }}
      >
        FIND
      </button>
      <p>{user?.location}</p>
    </div>
  );
}
