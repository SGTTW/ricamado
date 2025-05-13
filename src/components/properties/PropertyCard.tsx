// src/components/properties/PropertyCard.tsx
import React from "react";
import { Property } from "@/types/index";
import { MapPin, Heart } from "lucide-react";

interface PropertyCardProps {
  property: Property;
  onPurposeExplore?: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onPurposeExplore,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
      {/* Property Image */}
      <div className="h-56 overflow-hidden">
        <img
          src={
            property.images && property.images.length > 0
              ? property.images[0].src || ""
              : ""
          }
          alt={property.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Property Details */}
      <div className="p-6">
        {/* Purpose-Driven Title */}
        <h3 className="text-2xl font-bold mb-3 text-gray-800">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="mr-2 text-blue-500" size={20} />
          <span>{property.location}</span>
        </div>

        {/* Purpose Alignments */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Life Alignment</h4>
          <div className="flex flex-wrap gap-2">
            {property.purposeAlignments?.map((alignment) => (
              <span
                key={alignment}
                className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs"
              >
                {alignment}
              </span>
            ))}
          </div>
        </div>

        {/* Price and Explore Button */}
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-900">
            {property.price}
          </span>
          <button
            onClick={onPurposeExplore}
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center"
          >
            <Heart className="mr-2" size={18} />
            Explore Purpose
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
