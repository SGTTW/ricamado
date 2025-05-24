// src/components/properties/PropertyGallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

interface PropertyGalleryProps {
  images: string[];
  videos?: string[];
  title: string;
}

const PropertyGallery = ({ images, videos = [], title }: PropertyGalleryProps) => {
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex justify-center bg-gray-50 py-2">
        <button
          onClick={() => setActiveTab("images")}
          className={`px-4 py-2 font-medium ${activeTab === "images" ? "text-blue-600 bg-blue-50" : "text-gray-500"}`}
        >
          Images
        </button>
        <button
          onClick={() => setActiveTab("videos")}
          className={`px-4 py-2 font-medium ${activeTab === "videos" ? "text-blue-600 bg-blue-50" : "text-gray-500"}`}
        >
          Videos
        </button>
      </div>

      {activeTab === "images" ? (
        <div className="relative">
          {images.length > 0 ? (
            <>
              <div className="relative h-64 sm:h-80 md:h-96">
                <Image
                  src={images[currentImageIndex]}
                  alt={`${title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </div>

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                  >
                    &lt;
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                  >
                    &gt;
                  </button>
                  <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="h-64 flex items-center justify-center bg-gray-100">
              <p className="text-gray-500">No images available</p>
            </div>
          )}
        </div>
      ) : (
        <div className="relative">
          {videos.length > 0 ? (
            <>
              <div className="relative aspect-video">
                <iframe
                  src={videos[currentVideoIndex]}
                  className="w-full h-full"
                  allowFullScreen
                  title="Property video"
                />
              </div>

              {videos.length > 1 && (
                <>
                  <button
                    onClick={prevVideo}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                  >
                    &lt;
                  </button>
                  <button
                    onClick={nextVideo}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                  >
                    &gt;
                  </button>
                  <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">
                    {currentVideoIndex + 1} / {videos.length}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="h-64 flex items-center justify-center bg-gray-100">
              <p className="text-gray-500">No videos available</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PropertyGallery;