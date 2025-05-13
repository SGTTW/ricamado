// src/components/sections/HeroSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Filter } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const backgroundVariants = {
    initial: { opacity: 0.6 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Animated Background Layer */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url(/images/hero-background.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-800/80" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 text-white text-center">
        <motion.div variants={textVariants} initial="initial" animate="animate">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Space, Your Story, Your Potential
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            We don&apos;t just find properties. We unlock life-changing environments
            that inspire growth, connection, and personal transformation.
          </p>

          {/* Advanced Search */}
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-2">
            <div className="flex items-center bg-white/20 rounded-lg p-2">
              <Search className="text-white/70 mr-3" />
              <input
                type="text"
                placeholder="Find spaces that resonate with your life's mission"
                className="w-full bg-transparent text-white placeholder-white/70 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="flex space-x-2">
                <button className="bg-white/20 p-2 rounded-md hover:bg-white/30 transition">
                  <MapPin className="text-white" size={20} />
                </button>
                <button className="bg-white/20 p-2 rounded-md hover:bg-white/30 transition">
                  <Filter className="text-white" size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-10 flex justify-center space-x-4">
            <Link
              href="/properties"
              className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition"
            >
              Explore Spaces
            </Link>
            <Link
              href="/about/mission"
              className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition"
            >
              Our Purpose
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
