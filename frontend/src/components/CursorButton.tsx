import { useState } from "react";
import Tooltip from "./Tooltip";
import SplashCursor from "./SplashCursor";
import { SparklesIcon } from "@heroicons/react/24/solid"; // or /outline

function CursorButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Tooltip text={isVisible ? "Magic Cursor ON" : "Magic Cursor OFF"} position="top">
        <button
          className="hidden md:block z-30 group"
          onClick={toggleVisibility}
          
        >
          <div className="relative h-12 w-12 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 38 44"
              height="48"
              width="48"
              className="absolute inset-0 z-30"
            >
              <rect
                fill="silver"
                transform="rotate(-50, 38, 38)"
                rx="2"
                height="6"
                width="30"
                y="10"
                x="25"
                className="fill-current-silver group-hover:fill-[#3aa5fd]"
              ></rect>
              <rect
                fill="black"
                transform="rotate(-50, 31, 18)"
                rx="1"
                height="3"
                width="8"
                y="10"
                x="25"
                className="fill-current-silver"
              ></rect>
            </svg>
            <svg
              fill="yellow"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-6 top-0 h-6 w-6 text-white z-20 hidden group-hover:block"
            >
              <path
                clipRule="evenodd"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                fillRule="evenodd"
              ></path>
            </svg>
            {isVisible ? (
              <SparklesIcon className="absolute right-6 top-0 h-6 w-6 text-amber-100 z-20" />
            ) : (
              ""
            )}
          </div>
        </button>
      </Tooltip>
      {isVisible && <SplashCursor />}
    </div>
  );
}

export default CursorButton;
