// // src/app/properties/[id]/page.tsx
// // import { notFound } from "next/navigation";
// import Container from "@/components/common/Container";
// import Link from "next/link";
// import properties from "@/data/propertyData";
// import PropertyGallery from "@/components/properties/PropertyGallery";
// import ContactAgentForm from "@/components/properties/ContactAgentForm";

// export default function PropertyDetailsPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const property = properties.find((p) => p.id === params.id);
//   // if (!property) return notFound();
//   if (!property) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-gray-900 mb-4">
//             Property Not Found
//           </h1>
//           <Link href="/properties" className="text-blue-600 hover:underline">
//             Back to Properties
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <Container>
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <div className="mb-6">
//             <PropertyGallery
//               images={property.images}
//               videos={property.videos}
//               title={property.title}
//             />
//           </div>

//           <div className="p-6 md:p-8">
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//               <div className="mb-4 md:mb-0">
//                 <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
//                   {property.title}
//                 </h1>
//                 <div className="flex items-center mt-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="#718096"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
//                     <circle cx="12" cy="10" r="3" />
//                   </svg>
//                   <span className="ml-2 text-gray-600">
//                     {property.location}
//                   </span>
//                 </div>
//               </div>
//               <div>
//                 <h2 className="text-xl md:text-2xl font-bold text-gray-700">
//                   {property.price}
//                 </h2>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="md:col-span-2">
//                 <div className="mb-8">
//                   <h2 className="text-xl font-bold mb-3">Description</h2>
//                   <p className="text-gray-600">{property.description}</p>
//                 </div>

//                 {property.landSize && (
//                   <div className="mb-8">
//                     <h2 className="text-xl font-bold mb-3">Land Size</h2>
//                     <p className="text-gray-600">{property.landSize}</p>
//                   </div>
//                 )}

//                 <div className="mb-8">
//                   <h2 className="text-xl font-bold mb-3">Features</h2>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
//                     {property.features.map((feature, index) => (
//                       <p key={index} className="text-gray-600">
//                         • {feature}
//                       </p>
//                     ))}
//                   </div>
//                 </div>

//                 {property.documents && (
//                   <div className="mb-8">
//                     <h2 className="text-xl font-bold mb-3">Documents</h2>
//                     <p className="text-gray-600">{property.documents}</p>
//                   </div>
//                 )}

//                 {property.askingPrice && (
//                   <div className="mb-8">
//                     <h2 className="text-xl font-bold mb-3">Asking Price</h2>
//                     <p className="text-gray-600">{property.askingPrice}</p>
//                   </div>
//                 )}

//                 {property.reasonForSale && (
//                   <div className="mb-8">
//                     <h2 className="text-xl font-bold mb-3">Reason for Sale</h2>
//                     <p className="text-gray-600">{property.reasonForSale}</p>
//                   </div>
//                 )}
//               </div>

//               <div className="md:col-span-1">
//                 <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
//                   <ContactAgentForm propertyTitle={property.title} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// }

// src/app/properties/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import Container from "@/components/common/Container";
import Link from "next/link";
import { useRouter } from "next/navigation";
import properties from "@/data/propertyData";
import PropertyGallery from "@/components/properties/PropertyGallery";
import ContactAgentForm from "@/components/properties/ContactAgentForm";
import { ArrowLeft, Share } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [propertyId, setPropertyId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function getParams() {
      const resolvedParams = await params;
      setPropertyId(resolvedParams.id);
    }
    getParams();
  }, [params]);

  if (!propertyId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const property = properties.find((p) => p.id === propertyId);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Property Not Found
          </h1>
          <Link href="/properties" className="text-blue-600 hover:underline">
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = (platform: string) => {
    const shareUrl = window.location.href;
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
      default:
        break;
    }

    if (shareLink) {
      window.open(shareLink, "_blank");
      setShowShareOptions(false);
    }
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Container>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="my-6">
          <button
            onClick={handleBackClick}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Properties
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="mb-6">
            <PropertyGallery
              images={property.images}
              videos={property.videos}
              title={property.title}
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div className="mb-4 md:mb-0 flex-grow">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {property.title}
                </h1>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#718096"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="ml-2 text-gray-600">
                      {property.location}
                    </span>
                  </div>

                  {/* Share Button */}
                  <div className="relative ml-4">
                    <button
                      onClick={() => setShowShareOptions(!showShareOptions)}
                      className="flex items-center px-3 mr-16  py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <Share size={16} className="mr-2" />
                      Share
                    </button>

                    {/* Share Options Dropdown */}
                    {showShareOptions && (
                      <div className="absolute top-12 right-0 bg-white rounded-lg shadow-lg border p-2 z-20 min-w-[150px]">
                        <button
                          onClick={() => handleShare("Facebook")}
                          className="flex items-center w-full px-3 py-2 hover:bg-gray-100 rounded text-sm"
                        >
                          <FaFacebook
                            className="text-blue-600 mr-2"
                            size={16}
                          />
                          Facebook
                        </button>
                        <button
                          onClick={() => handleShare("Twitter")}
                          className="flex items-center w-full px-3 py-2 hover:bg-gray-100 rounded text-sm"
                        >
                          <FaTwitter className="text-blue-400 mr-2" size={16} />
                          Twitter
                        </button>
                        <button
                          onClick={() => handleShare("LinkedIn")}
                          className="flex items-center w-full px-3 py-2 hover:bg-gray-100 rounded text-sm"
                        >
                          <FaLinkedin
                            className="text-blue-700 mr-2"
                            size={16}
                          />
                          LinkedIn
                        </button>
                        <button
                          onClick={() => handleShare("WhatsApp")}
                          className="flex items-center w-full px-3 py-2 hover:bg-gray-100 rounded text-sm"
                        >
                          <FaWhatsapp
                            className="text-green-600 mr-2"
                            size={16}
                          />
                          WhatsApp
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-700">
                  {property.price}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-3">Description</h2>
                  <p className="text-gray-600">{property.description}</p>
                </div>

                {property.landSize && (
                  <div className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Land Size</h2>
                    <p className="text-gray-600">{property.landSize}</p>
                  </div>
                )}

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-3">Features</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {property.features.map((feature, index) => (
                      <p key={index} className="text-gray-600">
                        • {feature}
                      </p>
                    ))}
                  </div>
                </div>

                {property.documents && (
                  <div className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Documents</h2>
                    <p className="text-gray-600">{property.documents}</p>
                  </div>
                )}

                {property.askingPrice && (
                  <div className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Asking Price</h2>
                    <p className="text-gray-600">{property.askingPrice}</p>
                  </div>
                )}

                {property.reasonForSale && (
                  <div className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Reason for Sale</h2>
                    <p className="text-gray-600">{property.reasonForSale}</p>
                  </div>
                )}
              </div>

              <div className="md:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
                  <ContactAgentForm propertyTitle={property.title} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
