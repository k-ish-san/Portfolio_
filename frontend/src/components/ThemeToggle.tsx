import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Tooltip from "./Tooltip";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "light" | "dark") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const isDark = theme === "dark";

  return (
    <Tooltip text={isDark ? "Light Mode" : "Dark Mode"} position="top">
      <button
        onClick={toggleTheme}
        className="w-12 h-12 flex items-center justify-center"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? (
          <SunIcon
            className="h-8 w-8 text-amber-400 hover:text-[#3aa5fd]"
            aria-hidden="true"
          />
        ) : (
          <MoonIcon
            className="h-7 w-8 text-indigo-200 hover:text-[#3aa5fd]"
            aria-hidden="true"
          />
        )}
      </button>
    </Tooltip>
  );
};

export default ThemeToggle;

