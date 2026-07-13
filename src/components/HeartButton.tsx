"use client";

import { useState } from "react";

export function HeartButton() {
  const [liked, setLiked] = useState(false);
  return (
    <button
      onClick={() => setLiked(!liked)}
      className="group relative inline-flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
      aria-label="Like"
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-4 w-4 transition-colors ${
          liked
            ? "fill-red-500 text-red-500"
            : "fill-none text-muted group-hover:text-red-500"
        }`}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    </button>
  );
}
