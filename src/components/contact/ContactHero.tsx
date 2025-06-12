// src/components/contact/ContactHero.tsx
"use client";

import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative bg-blue-500 text-white py-20">
      <div className="absolute inset-0 bg-black/30">
        <Image
          src="/images/contact/photo-1587560699334-cc4ff634909a.avif"
          alt="Customer service team"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Get in touch with our support team
        </p>
      </div>
    </section>
  );
}
