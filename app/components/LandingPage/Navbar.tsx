"use client";

import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: "#", label: "Home", bold: true },
    { href: "#services", label: "Services", bold: false },
    { href: "#booking", label: "How to Book", bold: false },
    { href: "#facilities", label: "Facilities", bold: false },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-100 w-full max-w-4xl px-4">
      <div className="dock-blur border border-white/20 dark:border-gray-700/50 rounded-full px-4 py-2 shadow-2xl flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 pl-2">
          <h2 className="text-[#0d141b] dark:text-white text-lg font-black tracking-tight">
            DMDCW
          </h2>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className={`px-4 py-2 text-sm ${
                link.bold ? "font-bold" : "font-medium"
              } text-[#0d141b] dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors rounded-full`}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center group cursor-pointer"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "light" ? (
                <span className="material-symbols-outlined text-[#0d141b] group-hover:text-primary">
                  dark_mode
                </span>
              ) : (
                <span className="material-symbols-outlined text-white group-hover:text-primary">
                  light_mode
                </span>
              )
            ) : (
              <span className="material-symbols-outlined text-transparent">
                dark_mode
              </span>
            )}
          </button>

          {/* Divider & Booking - desktop only */}
          <div className="hidden md:block h-6 w-px bg-gray-300 dark:bg-gray-700 mx-1"></div>
          <button className="hidden md:flex items-center justify-center rounded-full h-10 px-6 bg-primary hover:bg-blue-600 transition-all text-white text-sm font-bold shadow-md hover:shadow-primary/30 whitespace-nowrap cursor-pointer">
            Booking
          </button>

          {/* Hamburger button - mobile only */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[#0d141b] dark:text-white">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 dock-blur border border-white/20 dark:border-gray-700/50 rounded-2xl px-4 py-4 shadow-2xl flex flex-col gap-1 animate-in">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className={`px-4 py-3 text-sm ${
                link.bold ? "font-bold" : "font-medium"
              } text-[#0d141b] dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors rounded-xl`}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="h-px bg-gray-200 dark:bg-gray-700 my-2"></div>
          <button className="flex items-center justify-center rounded-xl h-12 px-6 bg-primary hover:bg-blue-600 transition-all text-white text-sm font-bold shadow-md hover:shadow-primary/30 cursor-pointer">
            Booking
          </button>
        </div>
      )}
    </nav>
  );
}
