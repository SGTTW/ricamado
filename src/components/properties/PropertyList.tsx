// src/components/properties/PropertyList.tsx
"use client";

import { useState } from "react";
import { Property } from "@/types";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

interface PropertyListProps {
  properties: Property[];
  itemsPerPage?: number;
}

const PropertyList = ({ properties, itemsPerPage = 6 }: PropertyListProps) => {
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const [hoveredViewMore, setHoveredViewMore] = useState(false);
  const showMoreItems = () => {
    setVisibleItems((prev) => prev + itemsPerPage);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.slice(0, visibleItems).map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
          >
            <div className="relative h-64">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-4 left-4 bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                {property.label}
              </span>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-1">
                {property.title}
              </h3>

              <div className="flex items-center text-gray-600 mb-3">
                <MapPin size={16} className="mr-1" />
                <span className="text-sm line-clamp-1">
                  {property.location}
                </span>
              </div>

              <p className="text-gray-700 mb-4 line-clamp-2 text-sm">
                {property.description}
              </p>

              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900">
                  {property.price}
                </span>
                <Link
                  href={`/properties/${property.id}`}
                  className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Details
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleItems < properties.length && (
        <div className="flex justify-center">
          <button
            onClick={showMoreItems}
            // className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors duration-200"
            className="inline-flex items-center px-8 py-3   text-blue-600  hover:text-blue-500 transition-colors text-lg font-semibold"
            onMouseEnter={() => setHoveredViewMore(true)}
            onMouseLeave={() => setHoveredViewMore(false)}
          >
            View More Properties
            {hoveredViewMore && <ArrowRight className="ml-2 mb-1" size={20} />}
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyList;
