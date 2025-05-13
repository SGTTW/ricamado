
// src/components/sections/FaqsSection.tsx
'use client';

import { useState } from 'react';
import { FAQ } from '@/types/index';

export default function FaqsSection({ faqs }: { faqs: FAQ[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 bg-white">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}