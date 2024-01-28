"use client";

import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/context/theme-context";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[hrem]
    bg-opacity-80 background-blur-[0.5] border border-white border-opacity-40 
    shadow-2x1 rounded-full flex item-center
    justify-center hover:scale-[1.15] active:scale-105
    transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
