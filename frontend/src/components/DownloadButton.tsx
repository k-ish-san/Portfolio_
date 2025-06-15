import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import Tooltip from "./Tooltip";
import { showNotification } from "./NotificationCard"; // 👈 just import function

const DownloadButton: React.FC = () => {
  const resume_link = "https://www.overleaf.com/read/tthmkbcckbjs#717195";

  return (
    <Tooltip text="View Resume" position="top">
      <button
        onClick={() =>
          showNotification(resume_link, "Visit Overleaf to view Resume")
        }
        className=" p-2 flex items-center justify-center "
      >
        <EyeIcon className="h-8 w-8  text-gray-400  group-hover:text-[#3aa5fd] transition-colors" />
      </button>
    </Tooltip>
  );
};

export default DownloadButton;
