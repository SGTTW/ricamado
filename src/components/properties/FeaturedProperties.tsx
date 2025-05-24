// src/components/properties/FeaturedProperties.tsx
"use client";

import { useState, useRef } from "react";
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
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

// Define types for properties
type PropertyTag =
  | "Sustainable"
  | "Community-Focused"
  | "Wellness"
  | "Just In"
  | "Sale"
  | "Rent"
  | "Luxury"
  | "Affordable"
  | "Investment"
  | "Innovation";

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  tags: PropertyTag[];
  purposeAlignment: string;
}

const featuredProperties: Property[] = [
  {
    id: "123e4567-e89b-12d3-a456-426614174000",
    title: "Eco-Conscious Urban Loft",
    location: "Lagos, Nigeria",
    price: 450000,
    image: "/images/properties/kuje_abuja/kuje_house_1.jpg",
    tags: ["Sale", "Just In"],
    purposeAlignment:
      "Designed for professionals committed to environmental stewardship and personal well-being.",
  },
  {
    id: "community-haven-2",
    title: "Community-Integrated Residence",
    location: "Abuja, Nigeria",
    price: 350000,
    image:
      "/images/properties/ifako_ijaiye/WhatsApp Image 2025-03-13 at 21.48.00_cd8d2453.jpg",
    tags: ["Community-Focused", "Innovation"],
    purposeAlignment:
      "A living space that fosters connection, collaborative learning, and shared growth.",
  },
  {
    id: "wellness-retreat-3",
    title: "Holistic Wellness Sanctuary",
    location: "Port Harcourt, Nigeria",
    price: 500000,
    image: "/images/properties/akowonjo/Screenshot_1.png",
    tags: ["Wellness", "Sustainable"],
    purposeAlignment:
      "A transformative environment supporting mental, physical, and spiritual well-being.",
  },
];

const FeaturedProperties = () => {
  const [activeProperty, setActiveProperty] = useState<string | null>(null);
  const [showShareOptions, setShowShareOptions] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredViewMore, setHoveredViewMore] = useState(false);

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
      const scrollAmount = 320; // Approximate card width
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

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
          <button
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
          </button>
        </div>

        {/* View More Properties Button */}
        {/* <div className="text-center mt-12">
          <Link
            href="/properties"
            className="inline-flex items-center px-8 py-3   text-blue-600 rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold"
          >
            View More Properties
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div> */}

        <div className="text-center mt-12">
          <Link
            href="/properties"
            className="inline-flex items-center px-8 py-3   text-blue-600  hover:text-blue-500 transition-colors text-lg font-semibold"
            onMouseEnter={() => setHoveredViewMore(true)}
            onMouseLeave={() => setHoveredViewMore(false)}
          >
            View More Properties
            {hoveredViewMore && <ArrowRight className="ml-2 mb-1" size={20} />}
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
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
      onHoverStart={() => setActiveProperty(property.id)}
      onHoverEnd={() => setActiveProperty(null)}
      whileHover={{ scale: 1.05 }}
    >
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
            onClick={() =>
              setShowShareOptions(
                showShareOptions === property.id ? null : property.id
              )
            }
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
                <FaTwitter className="text-blue-400 mr-2" size={16} />
                Twitter
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
          <Heart
            className="text-gray-400 hover:text-red-500 cursor-pointer flex-shrink-0"
            size={24}
          />
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={18} className="mr-2 flex-shrink-0" />
          <span>{property.location}</span>
        </div>

        {/* Always reserve space for purpose alignment */}
        {/* <div className="mb-4 min-h-[60px] flex items-center">
          {activeProperty === property.id ? (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-gray-500 italic"
            >
              {property.purposeAlignment}
            </motion.p>
          ) : (
            <div className="h-[40px]" /> // Placeholder to maintain consistent height
          )}
        </div> */}

        <div className="mb-4">
          <p className="text-sm text-gray-500 italic">
            {property.purposeAlignment}
          </p>
        </div>

        {/* Price and Details - Always visible */}
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">
            ${property.price.toLocaleString()}
          </span>
          <Link
            href={`/properties/${property.id}`}
            className="flex items-center text-blue-600 hover:text-blue-800 transition"
            // className="bg-white-600 hover:bg-white-700 text-blue font-medium py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center"
          >
            Details
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProperties;
