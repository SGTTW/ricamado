// src/components/sections/FaqsSection.tsx
"use client";

import { useState } from "react";
import { FAQ } from "@/types/index";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function FaqsSection({ faqs }: { faqs: FAQ[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="max-w-3xl text-xl mx-auto text-gray-600">
          Find answers to common questions about our services, delivery process,
          and more.
        </p>
      </div>

      <div className="space-y-6 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
          >
            <button
              className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {activeIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>

            {activeIndex === index && (
              <div className="p-6 pt-0">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
