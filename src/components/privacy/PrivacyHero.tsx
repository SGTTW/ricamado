// src/components/privacy/PrivacyHero.tsx

"use client";
import Image from "next/image";

export default function PrivacyHero() {
  return (
    <section className="relative bg-blue-500 text-white py-20">
      <div className="absolute inset-0 bg-black/30">
        <Image
          src="/images/privacy/photo-1612535042392-3f3c32a8e44c.avif"
          alt="Ricamado Privacy Policy"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-xl max-w-2xl mx-auto">
          How we protect and use your information
        </p>
      </div>
    </section>
  );
}
