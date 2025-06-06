import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";

const DownloadButton: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    let resetTimer: ReturnType<typeof setTimeout>;
    if (isClicked) {
      resetTimer = setTimeout(() => setIsClicked(false), 2500); // Reset after 2.5s
    }
    return () => clearTimeout(resetTimer);
  }, [isClicked]);

  const handleClick = () => {
    setIsClicked(true);
    // Show the modal after a 1200ms delay (matches your animation)
    setTimeout(() => setShowResumeModal(true), 1200);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="group relative p-3 rounded-xl transition flex justify-center items-center w-12 h-12 overflow-hidden shadow-lg shadow-gray-900"
        data-tooltip-id="tooltip"
        data-tooltip-content="Download Resume"
        data-tooltip-place="top"
      >
        {/* Tray SVG */}
        <svg
          className={`absolute w-8 h-8 pointer-events-none fill-current-silver group-hover:fill-[#3aa5fd] transition-opacity duration-500 ${
            isClicked ? "opacity-0 delay-[1200ms]" : ""
          }`}
          fill="silver"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
            fillRule="evenodd"
          />
        </svg>

        {/* Liquid overlay */}
        <div
          className={`absolute bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-0 ${
            isClicked ? "h-2 opacity-0 delay-[200ms]" : ""
          } transition-all duration-[2000ms] ease-in-out bg-blue-300 bg-opacity-100 rounded-b-sm overflow-hidden`}
        />

        {/* Arrow SVG */}
        <svg
          className={`absolute w-8 h-8 pointer-events-none fill-current-silver group-hover:fill-[#3aa5fd] transition-all duration-500 ${
            isClicked ? "animate-bounce opacity-0 delay-[1200ms]" : ""
          }`}
          fill="silver"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75z"
            fillRule="evenodd"
          />
        </svg>

        {/* Tick (checkmark) SVG */}
        <svg
          className={`absolute w-8 h-8 pointer-events-none transition-opacity duration-500 ${
            isClicked ? "opacity-100 delay-[1200ms]" : "opacity-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            stroke="white"
            strokeWidth="1"
            fill="#3aa5fd"
            x="0"
            y="0"
            width="24"
            height="24"
            rx="5"
            ry="5"
          />
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
            strokeWidth="2"
            stroke="white"
            d="M8.5 12.25l3 3 6-6"
          />
        </svg>
      </button>

      {/* Tooltip */}
      <Tooltip id="tooltip" />

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="rounded-xl shadow-2xl max-w-[90vw] max-h-[90vh] overflow-auto">
            <button
              onClick={() => setShowResumeModal(false)}
              className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
            >
              <XMarkIcon className="h-10 w-10" />
            </button>
            <a
              href="https://www.overleaf.com/read/tthmkbcckbjs#717195"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-white bg-[#3aa5fd] rounded-lg hover:bg-blue-600 transition-colors"
            >
              View Resume on Overleaf
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default DownloadButton;
