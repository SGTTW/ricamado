// src/components/properties/FeaturedProperties.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  MapPin,
  ArrowRight,
  Forward,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import properties from "@/data/propertyData";
import { Property, PropertyTag } from "@/types/index";
import { useLikedProperties } from "@/hooks/useLikedProperties";

const featuredProperties = properties.slice(0, 3);

const FeaturedProperties = () => {
  const [activeProperty, setActiveProperty] = useState<string | null>(null);
  const [showShareOptions, setShowShareOptions] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredViewMore, setHoveredViewMore] = useState(false);
  const [showChevrons, setShowChevrons] = useState(true);
  const [chevronTimeout, setChevronTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const tagColors: Record<PropertyTag, string> = {
    Sustainable: "bg-green-100 text-green-800",
    "Community-Focused": "bg-blue-100 text-blue-800",
    Wellness: "bg-purple-100 text-purple-800",
    Innovation: "bg-orange-100 text-orange-800",
    "Just In": "bg-yellow-100 text-yellow-800",
    Sale: "bg-red-100 text-red-800",
    Rent: "bg-teal-100 text-teal-800",
    Luxury: "bg-pink-100 text-pink-800",
    Affordable: "bg-gray-100 text-gray-800",
    Investment: "bg-indigo-100 text-indigo-800",
    Sold: "bg-slate-100 text-slate-800",
    Rented: "bg-violet-100 text-violet-800",
  };

  // add scroll handler to detect user interaction
  const handleScroll = () => {
    //show chevrons when user scrolls
    setShowChevrons(true);
    // clear previous/previous timeout
    if (chevronTimeout) {
      clearTimeout(chevronTimeout);
    }
    // hide chevron after twe (2) seconds of no scrolling
    const timeout = setTimeout(() => {
      setShowChevrons(false);
    }, 1000);

    setChevronTimeout(timeout);
  };

  const handleShare = (platform: string, property: Property) => {
    const shareUrl = `${window.location.origin}/properties/${property.id}`;
    const shareTitle = `${
      property.title
    } - $${property.price.toLocaleString()}`;
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
      default:
        break;
    }

    if (shareLink) {
      window.open(shareLink, "_blank");
      setShowShareOptions(null);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  // Add cleanup in useEffect (add this useEffect to the component)
  useEffect(() => {
    return () => {
      if (chevronTimeout) {
        clearTimeout(chevronTimeout);
      }
    };
  }, [chevronTimeout]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Purposeful Living Spaces
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover properties that are more than structures—they&apos;re
            catalysts for personal and collective transformation.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              activeProperty={activeProperty}
              setActiveProperty={setActiveProperty}
              showShareOptions={showShareOptions}
              setShowShareOptions={setShowShareOptions}
              handleShare={handleShare}
              tagColors={tagColors}
            />
          ))}
        </div>

        {/* Mobile Swipe Container */}
        <div className="md:hidden relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-4"
            style={{ scrollSnapType: "x mandatory" }}
            onScroll={handleScroll}
          >
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="flex-shrink-0 w-80"
                style={{ scrollSnapAlign: "start" }}
              >
                <PropertyCard
                  property={property}
                  activeProperty={activeProperty}
                  setActiveProperty={setActiveProperty}
                  showShareOptions={showShareOptions}
                  setShowShareOptions={setShowShareOptions}
                  handleShare={handleShare}
                  tagColors={tagColors}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows for Mobile */}
          {/* <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button> */}

          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 transition-opacity duration-500 ease-in-out ${
              showChevrons ? "opacity-100" : "opacity-0"
            }`}
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 transition-opacity duration-500 ease-in-out ${
              showChevrons ? "opacity-100" : "opacity-0"
            }`}
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>
        </div>

        {/* View More Properties Button */}
        <div className="text-center mt-12">
          <Link
            href="/properties"
            className="inline-flex items-center px-8 py-3   text-blue-600  hover:text-blue-500 transition-colors text-lg font-semibold"
            onMouseEnter={() => setHoveredViewMore(true)}
            onMouseLeave={() => setHoveredViewMore(false)}
          >
            View More Properties
            {hoveredViewMore && <ArrowRight className="ml-2 " size={20} />}
          </Link>
        </div>
      </div>
    </section>
  );
};

// Property Card Component
interface PropertyCardProps {
  property: Property;
  activeProperty: string | null;
  setActiveProperty: (id: string | null) => void;
  showShareOptions: string | null;
  setShowShareOptions: (id: string | null) => void;
  handleShare: (platform: string, property: Property) => void;
  tagColors: Record<PropertyTag, string>;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  setActiveProperty,
  showShareOptions,
  setShowShareOptions,
  handleShare,
  tagColors,
}) => {
  const { toggleLike, isLiked } = useLikedProperties();

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
      onHoverStart={() => setActiveProperty(property.id)}
      onHoverEnd={() => setActiveProperty(null)}
      whileHover={{ scale: 1.05 }}
    >
      {/* making entire card clickable */}
      <Link href={`/properties/${property.id}`} className="block">
        {/* Property Image */}
        <div className="relative overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 flex space-x-2">
            {property.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2 py-1 text-xs rounded-full ${tagColors[tag]}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Share Button */}
          <div className="absolute top-4 right-4">
            <button
              onClick={(e) => {
                // Prevent click from propagating to the card
                e.preventDefault();

                e.stopPropagation();
                setShowShareOptions(
                  showShareOptions === property.id ? null : property.id
                );
              }}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <Forward size={18} className="text-gray-600" />
            </button>

            {/* Share Options */}
            {showShareOptions === property.id && (
              <div className="absolute top-12 right-0 bg-white rounded-lg shadow-lg p-2 z-20 flex flex-col gap-2">
                <button
                  onClick={() => handleShare("Facebook", property)}
                  className="flex items-center px-3 py-2 hover:bg-gray-100 rounded text-sm"
                >
                  <FaFacebook className="text-blue-600 mr-2" size={16} />
                  Facebook
                </button>
                <button
                  onClick={() => handleShare("Twitter", property)}
                  className="flex items-center px-3 py-2 hover:bg-gray-100 rounded text-sm"
                >
                  <RiTwitterXFill className="text-blue-400 mr-2" size={16} />X{" "}
                </button>
                <button
                  onClick={() => handleShare("LinkedIn", property)}
                  className="flex items-center px-3 py-2 hover:bg-gray-100 rounded text-sm"
                >
                  <FaLinkedin className="text-blue-700 mr-2" size={16} />
                  LinkedIn
                </button>
                <button
                  onClick={() => handleShare("WhatsApp", property)}
                  className="flex items-center px-3 py-2 hover:bg-gray-100 rounded text-sm"
                >
                  <FaWhatsapp className="text-green-600 mr-2" size={16} />
                  WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Property Details */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-semibold text-gray-800 flex-1 mr-2">
              {property.title}
            </h3>
            {/* Like Button */}
            <Heart
              className={`${
                isLiked(property.id)
                  ? "text-red-500 fill-red-500"
                  : "text-gray-600"
                // } ...`}
              } cursor-pointer hover:text-red-500 transition-colors`}
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                e.stopPropagation();
                toggleLike(property.id);
              }}
            />
          </div>

          <div className="flex items-center text-gray-600 mb-4">
            <MapPin size={18} className="mr-2 flex-shrink-0" />
            <span>{property.location}</span>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-500 italic">
              {property.description}
            </p>
          </div>

          {/* Price and Details   */}
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900">
              {property.price}
            </span>
            {/* Details Link */}
            <div className="flex items-center text-blue-600 text-sm hover:text-blue-700">
              Details
              <ArrowRight className="ml-2" size={16} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default FeaturedProperties;
