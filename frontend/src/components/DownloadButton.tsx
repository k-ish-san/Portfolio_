import { EyeIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { toast } from "sonner";
import React from "react";
import Tooltip from "./Tooltip";

const DownloadButton: React.FC = () => {
  const handleClick = () => {
    toast.custom((t) => (
      <div className="relative w-[500px] font-orbitron  rounded-xl bg-zinc-900 text-white border border-zinc-700 p-6 shadow-xl">
        {/* Close button */}
        <button
          onClick={() => toast.dismiss(t)}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        {/* Icon + Title */}
        <div className="flex items-center gap-2 mb-3">
          <EyeIcon className="w-8 h-8 text-[#3aa5fd]" />
          <h3 className="text-lg font-semibold">Open link?</h3>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-300">
          You’ll be redirected to an external page in a new tab:
        </p>
        <p className="text-sm mt-1 text-[#3aa5fd] font-semibold">
          https://overleaf.com
        </p>
        <p className="text-sm mt-2 text-zinc-400">
          Please confirm if you'd like to continue.
        </p>

        {/* Buttons */}
        <div className="mt-5 flex justify-end gap-2">
          <button
            onClick={() => toast.dismiss(t)}
            className="px-4 py-2 text-sm bg-zinc-800 text-white border border-zinc-600 rounded-lg hover:bg-zinc-700 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              window.open(
                "https://www.overleaf.com/read/tthmkbcckbjs#717195",
                "_blank"
              );
              toast.dismiss(t);
            }}
            className="px-4 py-2 text-sm bg-[#3aa5fd] text-black rounded-lg hover:bg-[#3aa5fd]/80 transition"
          >
            Proceed →
          </button>
        </div>
      </div>
    ));
  };

  return (
    <><Tooltip text="View Resume" position="top">
    <button
      onClick={handleClick}
      className="group relative p-3 rounded-xl transition flex justify-center items-center w-12 h-12 overflow-hidden shadow-lg shadow-gray-900"
      data-tooltip-id="tooltip"
      data-tooltip-content="View Resume"
      data-tooltip-place="top"
    >
      <EyeIcon className="h-8 w-8 text-white group-hover:text-[#3aa5fd] transition-colors"
      />
      </button>
      </Tooltip>
      </>
  );
};

export default DownloadButton;
