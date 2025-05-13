'use client';

import { useState } from 'react';
import { MessageCircle, MarsIcon } from 'lucide-react';

export default function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 overflow-hidden">
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-medium">Need help?</h3>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <MarsIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Chat with us:</p>
                <a 
                  href="https://wa.me/2348031234567" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  WhatsApp Support
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Or call us:</p>
                <a 
                  href="tel:+2348031234567" 
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  +234 803 123 4567
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Open support"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}