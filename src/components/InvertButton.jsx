"use client";
import { useState } from "react";
import BlogList from "./BlogList";

export default function InvertButton() {
  const [isTrue, setIsTrue] = useState(true);

  const handleToggle = () => {
    setIsTrue(!isTrue);
  };

  // checkpoint 5 I am currently at a loss here - details in the readme

  return (
    <div className="text-center">
      <button onClick={handleToggle}>
        {isTrue ? "Show Latest" : "Show Oldest"}
      </button>
    </div>
  );
}
