// src/components/blog/BlogHero.tsx
"use client";

import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="relative bg-blue-500 text-white py-20">
      <div className="absolute inset-0 bg-black/30">
        <Image
          src="/images/blog/hero-bg/blog-hero(3).png"
          alt="Blog"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Insights, updates, trends, and expert advice on Nigerian real estate
        </p>
      </div>
    </section>
  );
}