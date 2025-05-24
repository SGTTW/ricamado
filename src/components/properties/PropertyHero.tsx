// src/components/properties/PropertyHero.tsx
"use client";

import Image from "next/image";

export default function PropertyHero() {
  return (
    <section className="relative bg-blue-600 text-white py-20">
      <div className="absolute inset-0 bg-black/30">
        <Image
          src="/images/properties/properties/photo-1722286693917-1413cc95ff30.avif"
          alt="Customer service team"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Properties</h1>
        <p className="text-xl max-w-2xl mx-auto">
          More than properties. We help you find spaces that reflect and support
          your life&apos;s purpose.
        </p>
      </div>
    </section>
  );
}
