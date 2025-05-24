// src/components/properties/PropertySearch.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, MapPin } from "lucide-react";
import Link from "next/link";
import { Property } from "@/types";
import propertiesData from "@/data/propertyData";
import ContactAgentModal from "./ContactAgentModal";

interface PropertySearchProps {
  className?: string;
  // customStyles?: string; // Optional prop for custom styles
  variant?: "default" | "hero";
}

const PropertySearch = ({
  className = "",
  variant = "default",
}: PropertySearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Property[]>([]);
  const [recentSearches, setRecentSearches] = useState<
    { id: string; title: string; location: string }[]
  >([]);
  const [showResults, setShowResults] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches");
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches).slice(0, 3));
    }
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setShowResults(false);
    }
  }, [searchTerm]);

  // closing dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim().length > 1) {
      const filteredResults = propertiesData.filter(
        (property) =>
          property.location.toLowerCase().includes(value.toLowerCase()) ||
          property.title.toLowerCase().includes(value.toLowerCase()) ||
          property.features.some((feature) =>
            feature.toLowerCase().includes(value.toLowerCase())
          )
      );
      setSearchResults(filteredResults);
      setShowResults(true);
      setNoResults(filteredResults.length === 0);
    } else {
      setSearchResults([]);
      setShowResults(value.trim().length > 0);
      setNoResults(false);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    setShowResults(false);
    setNoResults(false);
  };

  const handleSelectProperty = (id: string) => {
    const newSearch = propertiesData.find((p) => p.id === id);
    if (newSearch) {
      const updatedSearches = [
        {
          id: newSearch.id,
          title: newSearch.title,
          location: newSearch.location,
        },
        ...recentSearches.filter((s) => s.id !== newSearch.id),
      ].slice(0, 3);
      setRecentSearches(updatedSearches);
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
    }
    clearSearch();
  };

  return (
    <div
      ref={searchRef}
      // className="relative max-w-2xl mx-auto bg-white/10   rounded-xl p-2"
      // className="relative border-2 border-gray-200 rounded-lg shadow-md bg-blue-200  p-2"
      // className="relative"

      className={`relative ${
        variant === "hero"
          ? "max-w-2xl mx-auto rounded-xl p-2"
          : "border-2 border-gray-200 rounded-lg shadow-md bg-cover bg-center p-2"
      } ${className}`}
      style={
        variant === "default"
          ? {
              backgroundImage:
                "url('/images/properties/properties/premium_photo-1689609950112-d66095626efb.avif')",
              // backdropFilter: "blur(4px)",
              // backgroundColor: "rgba(255, 255, 255, 0.1)",
            }
          : {}
      }
    >
      {/* Updated input container to match hero section style */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-2">
        <div className="flex items-center bg-white/20 rounded-lg p-2 h-12">
          <input
            type="text"
            placeholder="Find spaces that resonate with your life's mission"
            className="w-full bg-transparent text-white placeholder-white/70 focus:outline-none" // Updated to match hero style
            value={searchTerm}
            onChange={handleSearchChange}
            // onClick={() => setShowResults(true)}
            onClick={() => {
              setShowResults((prev) => !prev);
            }}
          />

          <div className="ml-3">
            {searchTerm ? (
              <button
                onClick={clearSearch}
                className="text-white/70 hover:text-white"
              >
                <X size={20} />
              </button>
            ) : (
              <Search size={20} className="text-white/70 mr-1" />
            )}
          </div>
        </div>
      </div>

      {showResults && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-10">
          {recentSearches.length > 0 && searchTerm.length === 0 && (
            <div className="p-4">
              <p className="text-sm font-medium text-gray-800 mb-2">
                Recent Searches
              </p>
              <div className="space-y-2">
                {recentSearches.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center p-2 rounded-md hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleSelectProperty(item.id)}
                  >
                    <Search size={16} className="text-gray-500 mr-3" />
                    <div>
                      <p className="font-medium text-blue-600">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {searchResults.length > 0 && (
            <div className="divide-y divide-gray-200">
              {searchResults.slice(0, 5).map((property) => (
                <Link
                  key={property.id}
                  href={`/properties/${property.id}`}
                  className="flex items-center p-4 hover:bg-gray-50"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden mr-4 flex-shrink-0">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{property.title}</p>
                    <div className="flex items-center mt-1">
                      <MapPin size={14} className="text-gray-500" />
                      <p className="text-sm text-gray-600 ml-1 truncate">
                        {property.location}
                      </p>
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
                        {property.label}
                      </span>
                      <p className="text-sm font-medium">{property.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {noResults && (
            <div className="p-6 text-center">
              <p className="font-medium text-gray-800 mb-2">
                No properties found for &quot;{searchTerm}&quot;
              </p>
              <p className="text-gray-600 text-sm mb-4">
                We couldn&apos;t find any matches. Would you like us to help you find
                what you&apos;re looking for?
              </p>
              <ContactAgentModal propertyTitle={searchTerm}>
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md">
                  Tell Us What You Need
                </button>
              </ContactAgentModal>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PropertySearch;
