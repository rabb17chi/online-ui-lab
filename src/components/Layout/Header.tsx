"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b bg-white dark:bg-gray-900 transition-colors">
      <Link
        href="/"
        className="flex items-center gap-2 font-bold text-xl text-gray-900 dark:text-white"
      >
        <span role="img" aria-label="logo">
          🧪
        </span>
        Online UI Lab
      </Link>
      {/* Only render the button after mount to avoid hydration mismatch */}
      {/* {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "🌙" : "🌞"}
        </button>
      )} */}
    </header>
  );
};

export default Header;
