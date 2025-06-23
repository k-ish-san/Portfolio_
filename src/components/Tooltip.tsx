import React from "react";
import type { ReactNode } from "react";

interface TooltipProps {
  text: string;
  position?: "top" | "bottom" | "left" | "right";
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  position = "floating",
  children,
}) => {
  const baseClasses =
    "absolute  hidden group-hover:block px-2 py-1 text-sm text-gray-100 bg-gray-700 rounded whitespace-nowrap";

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div className="relative group inline-block">
      {children}
      <div className={`${baseClasses} ${positionClasses[position as keyof typeof positionClasses]}`}>
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
