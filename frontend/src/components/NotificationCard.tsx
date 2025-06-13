import React from "react";
import { XMarkIcon, LinkIcon } from "@heroicons/react/24/solid";
import { toast } from "sonner";

interface NotificationCardProps {
  title?: string;
  description?: string;
  linkLabel: string;
  linkHref: string;
  toastId: string | number;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  title = "Open Link",
  description = "You’ll be redirected to an external page in a new tab:",
  linkLabel,
  linkHref,
  toastId,
}) => {
  const handleCancel = () => toast.dismiss(toastId);

  const handleProceed = () => {
    const url = linkHref.startsWith("http") ? linkHref : `https://${linkHref}`;
    window.open(url, "_blank");
    toast.dismiss(toastId);
  };

  return (
    <div className="relative w-[500px] font-orbitron rounded-xl bg-zinc-900 text-white border border-zinc-700 p-6 shadow-xl">
      <button
        onClick={handleCancel}
        className="absolute top-4 right-4 text-zinc-400 hover:text-white"
      >
        <XMarkIcon className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-2 mb-3">
        <LinkIcon className="w-8 h-8 text-[#3aa5fd]" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <p className="text-sm text-zinc-300">{description}</p>
      <a
        href={linkHref}
        className="inline-block text-sm mt-1 text-[#3aa5fd] font-semibold underline hover:text-[#1d7fc1] transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkLabel}
      </a>
      <p className="text-sm mt-2 text-zinc-400">
        Please confirm if you'd like to continue.
      </p>

      <div className="mt-5 flex justify-end gap-2">
        <button
          onClick={handleCancel}
          className="px-4 py-2 text-sm bg-zinc-800 text-white border border-zinc-600 rounded-lg hover:bg-zinc-700 transition"
        >
          Cancel
        </button>
        <button
          onClick={handleProceed}
          className="px-4 py-2 text-sm bg-[#3aa5fd] text-black rounded-lg hover:bg-[#3aa5fd]/80 transition"
        >
          Proceed →
        </button>
      </div>
    </div>
  );
};

export default NotificationCard;

// ✅ EXPORT THIS FUNCTION INSTEAD OF .show METHOD
export function showNotification(linkHref: string, linkLabel: string) {
  toast.custom((t) => (
    <NotificationCard toastId={t} linkHref={linkHref} linkLabel={linkLabel} />
  ));
}
