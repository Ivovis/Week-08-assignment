"use client";
import "./FullScreen.css";
import { useState, useEffect } from "react";

export default function FullScreen() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const toggleFullscreenChange = () => {
      setIsFullScreen(document.fullscreenElement !== null);
    };

    document.addEventListener("fullscreenchange", toggleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", toggleFullscreenChange);
    };
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div>
      <img
        onClick={toggleFullScreen}
        className="fullButton"
        src={
          isFullScreen
            ? "/fullscreen2-svgrepo-com.svg"
            : "/fullscreen1-svgrepo-com.svg"
        }
        alt={
          isFullScreen
            ? "press to enter full screen mode"
            : "press to exit full screen mode"
        }
      />
    </div>
  );
}
