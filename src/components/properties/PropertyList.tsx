// src/components/properties/PropertyList.tsx
"use client";

import { useState } from "react";
import { Property } from "@/types";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Heart, Forward } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useLikedProperties } from "@/hooks/useLikedProperties";
interface PropertyListProps {
  properties: Property[];
  itemsPerPage?: number;
}

const PropertyList = ({ properties, itemsPerPage = 6 }: PropertyListProps) => {
  const { toggleLike, isLiked } = useLikedProperties();

  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const [hoveredViewMore, setHoveredViewMore] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState<string | null>(null);
  // const shareRef = useRef<HTMLDivElement>(null);

  const handleShare = (platform: string, property: Property) => {
    const shareUrl = `${window.location.origin}/properties/${property.id}`;
    const shareTitle = `${property.title} - ${property.price}`;
    const shareDescription = `Check out this property: ${property.title} at ${property.location}.`;

    let shareLink = "";
    switch (platform) {
      case "WhatsApp":
        shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(
          `${shareTitle}\n\n${shareDescription}\n\n${shareUrl}`
        )}`;
        break;
      case "Facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}&quote=${encodeURIComponent(shareTitle)}`;
        break;
      case "Twitter":
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `${shareTitle}\n\n${shareDescription}`
        )}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "LinkedIn":
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          shareUrl
        )}`;
        break;
    }
    if (shareLink) {
      window.open(shareLink, "_blank");
      setShowShareOptions(null);
    }
  };

  const showMoreItems = () => {
    setVisibleItems((prev) => prev + itemsPerPage);
  };

  // // Close share dropdown when clicking outside
  // useEffect(() => {
  //   function handleClickOutside(event: MouseEvent) {
  //     if (
  //       shareRef.current &&
  //       !shareRef.current.contains(event.target as Node)
  //     ) {
  //       setShowShareOptions(null);
  //     }
  //   }

  //   if (showShareOptions) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [showShareOptions]);

  return (
    <div className="space-y-8">
      {/* making entire card clickable */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.slice(0, visibleItems).map((property) => (
          <Link
            href={`/properties/${property.id}`}
            className="block"
            key={property.id}
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-64">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* <span className="absolute top-4 left-4 bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                {property.label}
              </span>
          */}

                <div className="absolute top-4 left-4 flex space-x-2">
                  {property.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 text-xs rounded-full ${
                        tag === "Sustainable"
                          ? "bg-green-100 text-green-800"
                          : tag === "Community-Focused"
                          ? "bg-blue-100 text-blue-800"
                          : tag === "Wellness"
                          ? "bg-purple-100 text-purple-800"
                          : tag === "Innovation"
                          ? "bg-orange-100 text-orange-800"
                          : tag === "Just In"
                          ? "bg-yellow-100 text-yellow-800"
                          : tag === "Sale"
                          ? "bg-red-100 text-red-800"
                          : tag === "Rent"
                          ? "bg-teal-100 text-teal-800"
                          : tag === "Luxury"
                          ? "bg-pink-100 text-pink-800"
                          : tag === "Affordable"
                          ? "bg-gray-100 text-gray-800"
                          : "bg-indigo-100 text-indigo-800"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* ADD Forward Button */}
                {/* <div ref={shareRef}> */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation(); // Prevent click from propagating to the card
                    setShowShareOptions(
                      showShareOptions === property.id ? null : property.id
                    );
                  }}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
                >
                  <Forward size={18} className="text-gray-600" />
                </button>

                {/* ADD Forward Options */}

                {showShareOptions === property.id && (
                  <div className="absolute top-12 right-0 bg-white rounded-lg shadow-lg p-2 z-20 flex flex-col gap-2">
                    <button
                      onClick={() => handleShare("Facebook", property)}
                      className="flex items-center px-3 py-2 hover:bg-gray-100 rounded text-sm whitespace-nowrap"
                    >
                      <FaFacebook className="text-blue-600 mr-2" size={16} />
                      Facebook
                    </button>
                    <button
                      onClick={() => handleShare("Twitter", property)}
                      className="flex items-center px-3 py-2 hover:bg-gray-100 rounded text-sm whitespace-nowrap"
                    >
                      <FaTwitter className="text-blue-400 mr-2" size={16} />
                      Twitter
                    </button>
                    <button
                      onClick={() => handleShare("LinkedIn", property)}
                      className="flex items-center px-3 py-2 hover:bg-gray-100 rounded text-sm whitespace-nowrap"
                    >
                      <FaLinkedin className="text-blue-700 mr-2" size={16} />
                      LinkedIn
                    </button>
                    <button
                      onClick={() => handleShare("WhatsApp", property)}
                      className="flex items-center px-3 py-2 hover:bg-gray-100 rounded text-sm whitespace-nowrap"
                    >
                      <FaWhatsapp className="text-green-600 mr-2" size={16} />
                      WhatsApp
                    </button>
                  </div>
                )}
                {/* </div> */}
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800 flex-1 mr-2">
                    {property.title}
                  </h3>

                  <Heart
                    className={`${
                      isLiked(property.id)
                        ? "text-red-500 fill-red-500"
                        : "text-gray-600"
                      // } ...`}
                    } cursor-pointer hover:text-red-500 transition-colors duration-100`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleLike(property.id);
                    }}
                  />
                </div>
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
                  <div className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Details
                    <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Show more button */}
      {visibleItems < properties.length && (
        <div className="flex justify-center">
          <button
            onClick={showMoreItems}
            // className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors duration-200"
            className="inline-flex items-center px-8 py-3 text-blue-600  hover:text-blue-500 transition-colors text-lg font-semibold"
            onMouseEnter={() => setHoveredViewMore(true)}
            onMouseLeave={() => setHoveredViewMore(false)}
          >
            View More Properties
            {hoveredViewMore && <ArrowRight className="ml-2 " size={20} />}
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyList;
