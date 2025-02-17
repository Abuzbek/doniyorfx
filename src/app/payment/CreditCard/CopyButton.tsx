"use client";

import { useState } from "react";

interface CopyButtonProps {
  textToCopy: string;
}

export default function CopyButton({ textToCopy }: CopyButtonProps) {
  const [tooltipText, setTooltipText] = useState<string>("Nusxa oling");
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(textToCopy);
      setTooltipText("Nusxa olindi");
      setShowTooltip(true);
      setTimeout(() => {
        setTooltipText("Nusxa oling");
        setShowTooltip(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
      setTooltipText("Nusxa olishda xatolik");
      setShowTooltip(true);
    }
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={handleCopy}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <img src="/img/copy.png" alt="" />
      </button>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-lg whitespace-nowrap">
          {tooltipText}
          {/* Tooltip Arrow */}
          <div className="absolute left-[-4px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-800"></div>
        </div>
      )}
    </div>
  );
}
