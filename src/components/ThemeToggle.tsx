"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark") || "dark";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="theme-toggle-wrapper">
      <span className="theme-toggle-text" onClick={toggleTheme}>
        Switch Theme
      </span>
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>

    </div>
  );
}
