import { useState } from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Display from "./components/Display";

let refresh = 0;
export default function App() {
  const [user, setUser] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  refresh++;
  return (
    <div className={`w-full h-screen font-space-mono ${isDarkMode && "dark"}`}>
      <p>{refresh}</p>
      <div className="flex items-start justify-center w-full h-full first bg-light-ghost-white dark:bg-dark-zodiac-blue">
        <div className="w-full max-w-[730px] flex flex-col items-center justify-center py-4">
          <Nav setIsDarkMode={setIsDarkMode} />
          <Search setUser={setUser} />
          <Display user={user} />
        </div>
      </div>
    </div>
  );
}
