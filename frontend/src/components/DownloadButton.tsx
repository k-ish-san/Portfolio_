import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import Tooltip from "./Tooltip";
import { showNotification } from "./NotificationCard"; // 👈 just import function

const DownloadButton: React.FC = () => {
  const resume_link = "https://www.overleaf.com/read/tthmkbcckbjs#717195";

  return (
    <Tooltip text="View Resume" position="top">
      <button
        onClick={() => showNotification(resume_link, "Visit Overleaf to view Resume")}
        className="group relative p-3 rounded-xl transition flex justify-center items-center w-12 h-12 overflow-hidden shadow-lg shadow-gray-900"
      >
        <EyeIcon className="h-8 w-8 text-white group-hover:text-[#3aa5fd] transition-colors" />
      </button>
    </Tooltip>
  );
};

export default DownloadButton;
