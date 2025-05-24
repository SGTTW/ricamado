// src/components/legal/TermsHero.tsx
"use client";

import Image from "next/image";

export default function TermsHero() {
  return (
    <section className="relative bg-blue-600 text-white py-20">
      <div className="absolute inset-0 bg-black/30">
        <Image
          src="/images/terms/photo-1586856635275-af01918579ba.avif"
          alt="terms and conditions"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Terms & Conditions
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </section>
  );
}
