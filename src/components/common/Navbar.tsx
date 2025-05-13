// src/components/common/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  Home,
  Building2,
  Info,
  MessageCircleQuestion,
  Contact2,
} from "lucide-react";

const NAV_ITEMS = [
  {
    href: "/",
    label: "Home",
    icon: Home,
    description: "Your journey begins here",
  },
  {
    href: "/properties",
    label: "Properties",
    icon: Building2,
    description: "Spaces that inspire lives",
  },
  {
    href: "/about",
    label: "About Us",
    icon: Info,
    description: "Our purpose and mission",
  },
  {
    href: "/faqs",
    label: "FAQs",
    icon: MessageCircleQuestion,
    description: "Clarity through understanding",
  },
  {
    href: "/contact",
    label: "Contact",
    icon: Contact2,
    description: "Let's connect meaningfully",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 flex items-center space-x-2"
        >
          <span className="text-blue-600">Ricamado</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-gray-600 hover:text-blue-600 transition-colors"
            >
              <div className="flex items-center space-x-2">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </div>
              {/* Hover tooltip */}
              <div className="absolute hidden group-hover:block -bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded-md shadow-lg w-48 text-center">
                {item.description}
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-blue-600"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <div className="container mx-auto px-4 py-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 py-3 border-b last:border-b-0 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-blue-600" />
                  <div>
                    <span className="font-medium text-gray-800">
                      {item.label}
                    </span>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
