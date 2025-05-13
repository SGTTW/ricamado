// src/components/sections/ClientTestimonials.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, UserCircle2 } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  transformation: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Adebayo Okonkwo',
    role: 'Tech Entrepreneur',
    quote: "Ricamado didn't just find me a property; they helped me design a space that fuels my creativity and aligns with my professional growth.",
    transformation: 'Transformed a traditional apartment into a dynamic work-life integration hub'
  },
  {
    id: '2',
    name: 'Chioma Nnadi',
    role: 'Social Impact Consultant',
    quote: "My home is now more than a living space—it's a reflection of my values and a platform for community connection.",
    transformation: 'Created a collaborative living environment supporting local initiatives'
  },
  {
    id: '3',
    name: 'Michael Chukwuma',
    role: 'Sustainable Developer',
    quote: "Finding a property that matches my environmental ethics was crucial. Ricamado understood that perfectly.",
    transformation: 'Transitioned to a zero-waste, energy-efficient living space'
  }
];

const ClientTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Transformative Journeys
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories of how purposeful spaces catalyze personal and professional growth.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2">
            <AnimatePresence>
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-100 p-6 rounded-lg shadow-lg"
              >
                <p className="text-lg italic text-gray-700 mb-4">
                  <Quote className="inline-block mr-2" />
                  {activeTestimonial.quote}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  {activeTestimonial.transformation}
                </p>
                <div className="flex items-center mt-4">
                  <UserCircle2 className="h-10 w-10 text-blue-600" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">{activeTestimonial.name}</h3>
                    <p className="text-sm text-gray-500">{activeTestimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 md:mt-0 md:ml-8 w-full md:w-1/2">
            <ul className="space-y-4">
              {testimonials.map((testimonial) => (
                <li
                  key={testimonial.id}
                  onClick={() => setActiveTestimonial(testimonial)}
                  className={`cursor-pointer p-4 rounded-lg shadow-md transition-transform transform ${
                    activeTestimonial.id === testimonial.id ? 'bg-blue-100' : 'bg-white'
                  }`}
                >
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </li>
              ))}
            </ul>
          </div>    
        </div>
      </div>
    </section>
  );
}
export default ClientTestimonials;