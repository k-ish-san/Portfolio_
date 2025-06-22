// src/components/Sidebar.tsx
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import DownloadButton from "./DownloadButton";
import CursorButton from "./CursorButton";
import ProfileIntro from "./ProfileIntro";
import Typewriter from "typewriter-effect";
import avatar from "../assets/avatar.webp";
import {
  PhoneIcon,
  UserIcon,
  FolderOpenIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  BriefcaseIcon,
  TrophyIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";

const menu = [
  { icon: <UserIcon className="w-6 h-6" />, label: "About me", path: "/" },
  {
    icon: <AcademicCapIcon className="w-6 h-6" />,
    label: "Education",
    path: "/education",
  },
  {
    icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
    label: "Skills",
    path: "/skills",
  },
  {
    icon: <BriefcaseIcon className="w-6 h-6" />,
    label: "Experience",
    path: "/experience",
  },
  {
    icon: <FolderOpenIcon className="w-6 h-6" />,
    label: "Projects",
    path: "/projects",
  },
  {
    icon: <TrophyIcon className="w-6 h-6" />,
    label: "Achievements",
    path: "/achievements",
  },
  {
    icon: <PencilSquareIcon className="w-6 h-6" />,
    label: "Stats",
    path: "/stats",
  },
  {
    icon: <PhoneIcon className="w-6 h-6" />,
    label: "Contact",
    path: "/contact",
  },
];

// If you want to use Heroicons for mobile, map menu items to icons
const mobileMenu = [
  { icon: <UserIcon className="w-6 h-6" />, label: "About", path: "/" },
  {
    icon: <AcademicCapIcon className="w-6 h-6" />,
    label: "Education",
    path: "/education",
  },
  {
    icon: <FolderOpenIcon className="w-6 h-6" />,
    label: "Projects",
    path: "/projects",
  },
  {
    icon: <PhoneIcon className="w-6 h-6" />,
    label: "Contact",
    path: "/contact",
  },
];

export default function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="bg-gray-900 w-72 font-orbitron h-[100vh] hidden md:flex flex-col justify-between py-2 px-4 z-10">
        {/* ...profile section... */}
        <ProfileIntro
          name="Samrudh Kishsan P M"
          title={
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "Frontend Developer",
                  "MERN Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
                delay: 50,
                cursor: "_",
              }}
            />
          }
          avatarUrl={avatar}
        />
        <nav>
          {menu.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center hover:text-[#3aa5fd] gap-4 px-4 py-3 rounded-lg  cursor-pointer font-medium transition ${
                  isActive
                    ? "bg-[#3aa5fd] text-black hover:text-black"
                    : "text-gray-500"
                }`
              }
            >
              <span className="">{item.icon}</span>
              <span className="">{item.label}</span>
            </NavLink>
          ))}
        </nav>
        {/* ...bottom section (theme toggle, flags, etc.)... */}
        <div className="flex flex-row justify-center space-x-5">
          {/* Theme button */}
          <ThemeToggle />
          {/* Download button */}
          <DownloadButton />
          {/* Magic Cursor */}
          <CursorButton />
        </div>
      </aside>

      {/* Mobile Bottom Navbar */}
      <div className="md:hidden font-orbitron fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 dark:text-white shadow-lg z-50 border-t border-indigo-500">
        <div
          className="flex justify-around items-center h-16"
          style={{ fontVariant: "small-caps", letterSpacing: "0.1em" }}
        >
          {mobileMenu.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full transition-transform duration-200 ${
                  isActive
                    ? "scale-125 bg-blue-100 dark:bg-indigo-500"
                    : "scale-100"
                } hover:scale-110 hover:bg-blue-100 dark:hover:bg-indigo-500 hover:shadow-lg`
              }
            >
              {item.icon}
              <span className="text-xs">{item.label}</span>
            </NavLink>
          ))}
          <div className="flex flex-col items-center justify-center w-full h-full">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
