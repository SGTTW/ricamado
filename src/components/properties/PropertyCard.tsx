// // src/components/properties/PropertyCard.tsx
// import React from "react";
// import { Property } from "@/types/index";
// import { MapPin, Heart } from "lucide-react";

// interface PropertyCardProps {
//   property: Property;
//   onPurposeExplore?: () => void;
// }

// const PropertyCard: React.FC<PropertyCardProps> = ({
//   property,
//   onPurposeExplore,
// }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
//       {/* Property Image */}
//       <div className="h-56 overflow-hidden">
//         <img
//           src={
//             property.images && property.images.length > 0
//               ? property.images[0] || ""
//               : ""
//           }
//           alt={property.title}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Property Details */}
//       <div className="p-6">
//         {/* Purpose-Driven Title */}
//         <h3 className="text-2xl font-bold mb-3 text-gray-800">
//           {property.title}
//         </h3>

//         {/* Location */}
//         <div className="flex items-center text-gray-600 mb-4">
//           <MapPin className="mr-2 text-blue-500" size={20} />
//           <span>{property.location}</span>
//         </div>

//         {/* Purpose Alignments */}
//         <div className="mb-4">
//           <h4 className="font-semibold text-gray-700 mb-2">Life Alignment</h4>
//           <div className="flex flex-wrap gap-2">
//             {property.purposeAlignments?.map((alignment) => (
//               <span
//                 key={alignment}
//                 className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs"
//               >
//                 {alignment}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Price and Explore Button */}
//         <div className="flex justify-between items-center">
//           <span className="text-2xl font-bold text-gray-900">
//             {property.price}
//           </span>
//           <button
//             onClick={onPurposeExplore}
//             className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center"
//           >
//             <Heart className="mr-2" size={18} />
//             Explore Purpose
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyCard;




// src/components/properties/PropertyCard.tsx
import React, { useState } from "react";
import { Property } from "@/types/index";
import { MapPin, Heart, Share } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

interface PropertyCardProps {
  property: Property;
  onPurposeExplore?: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onPurposeExplore,
}) => {
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleShare = (platform: string) => {
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
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        break;
    }

    if (shareLink) {
      window.open(shareLink, "_blank");
      setShowShareOptions(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
      {/* Property Image */}
      <div className="h-56 overflow-hidden relative">
        <img
          src={
            property.images && property.images.length > 0
              ? property.images[0] || ""
              : ""
          }
          alt={property.title}
          className="w-full h-full object-cover"
        />
        
        {/* Share Button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setShowShareOptions(!showShareOptions)}
            className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <Share size={18} className="text-gray-600" />
          </button>
          
          {/* Share Options */}
          {showShareOptions && (
            <div className="absolute top-12 right-0 bg-white rounded-lg shadow-lg p-2 z-20 flex flex-col gap-2">
              <button
                onClick={() => handleShare("Facebook")}
                className="flex items-center px-3 py-2 hover:bg-gray-100 rounded text-sm whitespace-nowrap"
              >
                <FaFacebook className="text-blue-600 mr-2" size={16} />
                Facebook
              </button>
              <button
                onClick={() => handleShare("Twitter")}
                className="flex items-center px-3 py-2 hover:bg-gray-100 rounded text-sm whitespace-nowrap"
              >
                <FaTwitter className="text-blue-400 mr-2" size={16} />
                Twitter
              </button>
              <button
                onClick={() => handleShare("LinkedIn")}
                className="flex items-center px-3 py-2 hover:bg-gray-100 rounded text-sm whitespace-nowrap"
              >
                <FaLinkedin className="text-blue-700 mr-2" size={16} />
                LinkedIn
              </button>
              <button
                onClick={() => handleShare("WhatsApp")}
                className="flex items-center px-3 py-2 hover:bg-gray-100 rounded text-sm whitespace-nowrap"
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