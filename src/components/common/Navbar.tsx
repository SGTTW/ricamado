// src/components/common/Navbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";

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
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  // Initialize dark mode based on system preference or localStorage
  useEffect(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.theme;
    // Check if system prefers dark mode
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial dark mode state
    const isDarkMode = 
      savedTheme === 'dark' || 
      (!savedTheme && systemPrefersDark);
    
    setDarkMode(isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

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
        <div className="hidden md:flex items-center justify-center flex-1 px-16">
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
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex space-x-4 items-center">
          {/* Dark Mode Toggle (Mobile) */}
          <button 
            onClick={toggleDarkMode}
            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            )}
          </button>
          
          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu - Slide from Right */}
        <div 
          className={`fixed top-0 right-0 h-full w-full md:hidden bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className={`absolute top-0 right-0 h-full w-full bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                  <Image
                    src="/images/logo/logo.png"
                    alt="Ricamado"
                    width={30}
                    height={24}
                    className="mr-2"
                  />
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">Ricamado</span>
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex flex-col space-y-4 bg-white">
                {/* Combine all nav items for mobile */}
                {[...NAV_ITEMS, CONTACT_ITEM].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center py-4 px-2 border-b border-gray-100 dark:border-gray-800 ${
                      pathname === item.href 
                        ? "text-blue-600 dark:text-blue-400 bg-gray-50 dark:bg-gray-800" 
                        : "text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div>
                      <span className="font-medium text-lg">{item.label}</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* Mobile menu footer */}
              {/* <div className="mt-auto pt-6 flex items-center justify-between">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  © 2025 Ricamado
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-sm text-gray-600 dark:text-gray-300">
                    {darkMode ? 'Dark Mode' : 'Light Mode'}
                  </span>
                  <button 
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {darkMode ? (
                      <Sun className="w-5 h-5 text-yellow-500" />
                    ) : (
                      <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    )}
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}