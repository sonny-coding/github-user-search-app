import { useState } from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Display from "./components/Display";

export default function App() {
  const [user, setUser] = useState("");

  return (
    <div className="flex items-start justify-center h-screen font-space-mono bg-light-ghost-white">
      <div className="w-full max-w-[730px] flex flex-col items-center justify-center py-4">
        <Nav />
        <Search setUser={setUser} />
        <Display user={user} />
      </div>
    </div>
  );
}
