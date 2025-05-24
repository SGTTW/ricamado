// src/components/sections/Faqshero.tsx
"use client";

import Image from "next/image";

export default function FaqsHero() {
  return (
    <section className="relative bg-blue-600 text-white py-20">
      <div className="absolute inset-0 bg-black/30">
        <Image
          src="/images/contact/premium_photo-1737362946604-5b0d174dab40.avif"
          alt="Customer service team"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Faqs</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Find answers to common questions about our services, delivery process,
          and more.
        </p>
      </div>
    </section>
  );
}
