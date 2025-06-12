// src/components/about/AboutHero.tsx
"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative bg-blue-500 text-white py-20">
      <div className="absolute inset-0 bg-black/30">
        <Image
          src="/images/about/photo-1739486730239-5cd2b5f8c754.avif"
          alt="Ricamado Unique Limited buildings"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Ricamado Unique Limited - Creating Exceptional Real Estate Experiences
        </p>
      </div>
    </section>
  );
}
