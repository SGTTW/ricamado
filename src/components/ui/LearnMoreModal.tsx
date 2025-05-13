// src/components/ui/LearnMoreModal.tsx
'use client';

import { Dialog } from '@headlessui/react';

type LearnMoreModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LearnMoreModal({ isOpen, onClose }: LearnMoreModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-2xl rounded-lg bg-white p-8">
          <Dialog.Title className="text-2xl font-bold text-gray-900 mb-4">
            Our Founding Story
          </Dialog.Title>
          
          <div className="prose prose-lg text-gray-600">
            <p>
              Ricamado Unique Limited was founded in 2015 with a vision to transform 
              Nigeria&apos;s real estate landscape. Our founders recognized the need for 
              trustworthy, client-focused property services in a market often 
              characterized by opacity.
            </p>
            <p className="mt-4">
              Starting with just three employees and a single office in Lagos, we&apos;ve 
              grown to become one of the most respected names in Nigerian real estate, 
              serving clients across 5 states.
            </p>
            <p className="mt-4">
              Our success is built on three pillars: integrity, expertise, and 
              personalized service - values that continue to guide us today.
            </p>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}