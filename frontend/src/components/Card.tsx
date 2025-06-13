import React, { useState, useRef, useEffect } from "react";
import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/solid";
import Tooltip from "./Tooltip";

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  maxWidth?: string | number;
  defaultHeight?: string | number;
  fullScreenButton?: { enter: React.ReactNode; exit: React.ReactNode };
}

export function Card({
  title,
  children,
  className = "",
  maxWidth = "90vw",    //1400px
  defaultHeight = "90vh",  //750px
  fullScreenButton = {
    enter: <ArrowsPointingOutIcon />,
    exit: <ArrowsPointingInIcon />,
  },
}: CardProps) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  const toggleFullScreen = () => {
    if (!cardRef.current) return;
    if (!isFullScreen) {
      cardRef.current
        .requestFullscreen()
        .then(() => setIsFullScreen(true))
        .catch((err) => console.error(err));
    } else {
      document
        .exitFullscreen()
        .then(() => setIsFullScreen(false))
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-blue-100 font-orbitron dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 m-0 ${className} transform transition-transform duration-300 ease-in-out ${
        isMounted ? "translate-x-0" : "translate-x-full"
      }`}
      style={{
        width: isFullScreen ? "100vw" : "100%",
        maxWidth: isFullScreen ? "none" : maxWidth,
        height: isFullScreen ? "100vh" : defaultHeight,
        position: isFullScreen ? "fixed" : "relative",
        top: isFullScreen ? "0" : "0",
        left: isFullScreen ? "0" : "0",
        zIndex: isFullScreen ? "9999" : "0",
        margin: isFullScreen ? "0" : "0",
      }}
    >
      {/* Card header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-600 border-l-8 border-l-[#3aa5fd]  dark:border-l-[#3aa5fd]">
        <Tooltip text={`Title: ${title}`} position="right">
        <h3
          className="text-3xl font-semibold font-orbitron text-gray-900 dark:text-white"
          style={{ letterSpacing: "0.1em" }}
        >

          {title}
          </h3>
        </Tooltip>
        <Tooltip text={isFullScreen ? "Exit Full Screen" : "Enter Full Screen"} position="left">
        <button
          onClick={toggleFullScreen}
          className="p-2 w-10 h-10 hover:text-[#3aa5fd] dark:text-white"
          aria-label={isFullScreen ? "Exit full screen" : "Enter full screen"}
        >
          {isFullScreen ? fullScreenButton.exit : fullScreenButton.enter}
          </button>
        </Tooltip>
      </div>
      {/* Card body */}
      <div
        className="p-4 overflow-y-auto w-full"
        style={{
          height: "calc(100% - 56px)",
          scrollbarWidth: "none",
        }}
      >
        {children}
      </div>
    </div>
  );
}
