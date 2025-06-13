// src/components/common/Navbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
// import { Menu, X, Moon, Sun } from "lucide-react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  {
    href: "/",
    label: "Home",
    description: "Your journey begins here",
  },
  {
    href: "/properties",
    label: "Properties",
    description: "Spaces that inspire lives",
  },
  {
    href: "/about",
    label: "About Us",
    description: "Our purpose and mission",
  },
  // {
  //   href: "/faqs",
  //   label: "FAQs",
  //   description: "Clarity through understanding",
  // },
];

// Contact is separate
const CONTACT_ITEM = {
  href: "/contact",
  label: "Contact",
  description: "Let's connect meaningfully",
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    // adding scroll event to close menu when user scrolls
    function handleScroll() {
      setIsMenuOpen(false);
    }
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("scroll", handleScroll);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.addEventListener("scroll", handleScroll);
      window.addEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  // Toggle dark mode
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   if (darkMode) {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.theme = "light";
  //   } else {
  //     document.documentElement.classList.add("dark");
  //     localStorage.theme = "dark";
  //   }
  // };

  // // Initialize dark mode based on system preference or localStorage
  // useEffect(() => {
  //   // Check if theme is stored in localStorage
  //   const savedTheme = localStorage.theme;
  //   // Check if system prefers dark mode
  //   const systemPrefersDark = window.matchMedia(
  //     "(prefers-color-scheme: dark)"
  //   ).matches;

  //   // Set initial dark mode state
  //   const isDarkMode =
  //     savedTheme === "dark" || (!savedTheme && systemPrefersDark);

  //   setDarkMode(isDarkMode);

  //   if (isDarkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }

  //   // Listen for system/browser changes (if no localStorage preference)
  //   const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  //   const handleSystemChange = (e: MediaQueryListEvent) => {
  //     if (!localStorage.theme) {
  //       // Only sync if no manual preference
  //       const newDarkMode = e.matches;
  //       setDarkMode(newDarkMode);
  //       if (newDarkMode) {
  //         document.documentElement.classList.add("dark");
  //       } else {
  //         document.documentElement.classList.remove("dark");
  //       }
  //     }
  //   };

  //   mediaQuery.addEventListener("change", handleSystemChange);
  //   return () => mediaQuery.removeEventListener("change", handleSystemChange);
  // }, []);

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-gray-900 backdrop-blur-md shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo (Left) */}
        <div className="flex-shrink-0 flex items-center">
          <Image
            src="/images/logo/logo.png"
            alt="Ricamado"
            width={38}
            height={30}
            className="mr-1"
          />
          <Link
            href="/"
            className="text-2xl font-semi-bold text-gray-800 dark:text-white"
          >
            <span className="text-blue-600 dark:text-blue-400">Ricamado</span>
          </Link>
        </div>

        {/* Desktop Navigation (Center) */}
        <div className="hidden md:flex items-center justify-center flex-1 pr-22">
          <div className="flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative transition-colors ${
                  pathname === item.href
                    ? "text-blue-600 dark:text-blue-400 font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{item.label}</span>
                </div>
                {/* Hover tooltip */}
                <div className="absolute hidden group-hover:block -bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded-md shadow-lg w-48 text-center z-10">
                  {item.description}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side: Contact & Dark Mode Toggle (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href={CONTACT_ITEM.href}
            className={`group relative transition-colors ${
              pathname === CONTACT_ITEM.href
                ? "text-blue-600 dark:text-blue-400 font-medium"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="font-medium">{CONTACT_ITEM.label}</span>
            </div>
            {/* Hover tooltip */}
            <div className="absolute hidden group-hover:block-bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded-md shadow-lg w-48 text-center z-10">
              {CONTACT_ITEM.description}
            </div>
          </Link>

          {/* Dark Mode Toggle */}
          {/* <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button> */}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex space-x-4 items-center" ref={navRef}>
          {/* Dark Mode Toggle (Mobile) */}
          {/* <button
            onClick={toggleDarkMode}
            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            )}
          </button> */}

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu - Slide from Right (Reusing navbar structure) */}
        <div
          className={`fixed top-0 right-0 h-full w-full md:hidden bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-500 ease-out z-50 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Reuse existing navbar structure */}
          <div className="px-4 py-4 flex justify-between items-center border-b border-gray-100 dark:border-gray-800">
            {/* Same logo as main nav */}
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/images/logo/logo.png"
                alt="Ricamado"
                width={38}
                height={30}
                className="mr-1"
              />
              <Link
                href="/"
                className="text-2xl font-semi-bold text-gray-800 dark:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-blue-600 dark:text-blue-400">
                  Ricamado
                </span>
              </Link>
            </div>

            {/* Toggle between hamburger and X */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}{" "}
            </button>
          </div>

          {/* Menu items below */}
          <div className="flex flex-col p-4 bg-white dark:bg-gray-800">
            {[...NAV_ITEMS, CONTACT_ITEM].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center py-4 px-2 border-b border-gray-100 dark:border-gray-800 ${
                  pathname === item.href
                    ? "text-blue-600 bg-gray-50 dark:text-blue-400 dark:bg-gray-700"
                    : "text-gray-800 dark:text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div>
                  <span className="font-medium text-lg dark:text-gray-300">
                    {item.label}
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
