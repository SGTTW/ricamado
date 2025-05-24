 

"use client";

// import { useEffect, useState } from 'react';
// import { Testimonial } from '@/types/index';
import { testimonials } from "@/lib/testimonials";

export default function ClientTestimonials() {
  // Duplicate testimonials to create infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="mx-auto overflow-hidden relative bg-white py-16">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex justify-center items-center mb-8">
          <div>
            <h2 className="text-4xl md:text-4xl mb-4 text-gray-800 text-center font-bold ">
              What Our Clients Are Saying
            </h2>
            {/* rating */}
            {/* <div className="bg-[#3d3d3d] text-sm font-normal text-white w-fit mx-auto px-4 rounded-full flex justify-center items-center py-1"> */}
            <div className="bg-[#3d3d3d] text-sm font-normal text-white w-fit mx-auto px-4 rounded-full flex justify-center items-center py-1">
              <div className="bg-white mr-2.5 rounded-full p-1">
                <svg
                  className="w-6 h-6 text-[#3d3d3d]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              Rated 4.8/5 by over 1k+ clients nationwide
            </div>

          </div>
        </div>

        {/* Top Row - Moving Left to Right */}
        <div
          className="relative w-[300%] my-16"
          style={{
            animation: "moveLeftToRight 60s linear infinite",
          }}
        >
          <div className="flex">
            {duplicatedTestimonials.map((item, index) => (
              <div
                key={`top-${index}`}
                className="w-[350px] min-h-[250px] mx-4 rounded-2xl flex-shrink-0 overflow-hidden shadow-md bg-white p-6 relative flex flex-col"
              >
                <div className="absolute top-4 text-gray-200">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="flex-1 mt-6 mb-6 text-[#6D6D6D]">{item.text}</p>

                <div className="flex items-center mt-auto">
                  <div className="w-10 h-10 rounded-full mr-3 bg-gray-200"></div>
                  <div>
                    <p className="font-semibold text-sm text-[#6D6D6D]">
                      {item.name}
                    </p>
                    <p className="text-sm text-[#6D6D6D]">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Moving Right to Left */}
        <div
          className="relative w-[300%]"
          style={{
            animation: "moveRightToLeft 60s linear infinite",
          }}
        >
          <div className="flex">
            {duplicatedTestimonials
              .slice()
              .reverse()
              .map((item, index) => (
                <div
                  key={`bottom-${index}`}
                  className="w-[350px] min-h-[250px] mx-4 rounded-2xl flex-shrink-0 overflow-hidden shadow-md bg-white p-6 relative flex flex-col"
                >
                  <div className="absolute top-4 text-gray-200">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <p className="flex-1 mt-6 mb-6 text-[#6D6D6D]">{item.text}</p>

                  <div className="flex items-center mt-auto">
                    <div className="w-10 h-10 rounded-full mr-3 bg-gray-200"></div>
                    <div>
                      <p className="font-semibold text-sm text-[#6D6D6D]">
                        {item.name}
                      </p>
                      <p className="text-sm text-[#6D6D6D]">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Add the animation keyframes using style tag */}
      <style jsx>{`
        @keyframes moveLeftToRight {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0%);
          }
        }

        @keyframes moveRightToLeft {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
}
