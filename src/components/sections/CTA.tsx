"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section className="py-16">
      <div className=" container px-6 mx-auto">
        <div className="bg-blue-600 p-8 rounded-lg shadow-lg mb-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6">
            Whether you&apos;re looking to find your dream home or sell your current
            property, our team of dedicated agents is here to guide you every
            step of the way.
          </p>

          <Link href="/contact" className="inline-block">
            <button
              className="bg-white-600 hover:bg-white-700 text-blue font-medium py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center"
              onMouseEnter={() => setHoveredButton("contact")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
              {hoveredButton === "contact" && (
                <ArrowRight className="ml-2 h-5 w-5" />
              )}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
