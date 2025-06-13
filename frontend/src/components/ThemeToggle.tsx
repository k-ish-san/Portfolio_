import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Tooltip from "./Tooltip";
const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return (localStorage.getItem("theme") as "light" | "dark") || "light";
  });

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="w-12 h-12  flex items-center justify-center"
      >
        {theme === "dark" ? (
          <Tooltip text="Light Mode" position="top">
            <SunIcon className="h-8 w-8 text-amber-400 hover:text-[#3aa5fd]" />
          </Tooltip>
        ) : (
          <Tooltip text="Dark Mode" position="top">
            <MoonIcon className="h-7 w-8 text-indigo-200 hover:text-[#3aa5fd]" />
          </Tooltip>
        )}
      </button>
    </div>
  );
};


export default ThemeToggle;
