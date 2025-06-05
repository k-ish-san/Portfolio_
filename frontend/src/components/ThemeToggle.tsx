import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Tooltip } from "react-tooltip";
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
          <SunIcon
            className="h-8 w-8 text-amber-400 hover:text-[#3aa5fd]"
            data-tooltip-id="theme-tooltip"
            data-tooltip-content="Light Mode"
            data-tooltip-place="top"
          />
        ) : (
          <MoonIcon
            className="h-7 w-8 text-indigo-200 hover:text-[#3aa5fd]"
            data-tooltip-id="theme-tooltip"
            data-tooltip-content="Dark Mode"
            data-tooltip-place="top"
          />
        )}
      </button>
      <Tooltip id="theme-tooltip" />
    </div>
  );
};


export default ThemeToggle;
