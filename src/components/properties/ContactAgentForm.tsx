// src/components/properties/ContactAgentForm.tsx
"use client";

import { useState } from "react";

interface ContactAgentFormProps {
  propertyTitle: string;
}

const ContactAgentForm = ({ propertyTitle }: ContactAgentFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `I am interested in ${propertyTitle}.`,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mblglrkq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: `I am interested in ${propertyTitle}.`,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-4">
        <h3 className="text-lg font-medium text-green-600 mb-2">
          Thank you for your interest!
        </h3>
        <p className="text-gray-600">An agent will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Full name *</label>
        <input
          type="text"
          required
          className="w-full p-2 border rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email *</label>
        <input
          type="email"
          required
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Phone *</label>
        <input
          type="tel"
          required
          className="w-full p-2 border rounded"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          How can an agent help?
        </label>
        <textarea
          className="w-full p-2 border rounded"
          rows={3}
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400"
      >
        {isSubmitting ? "Sending..." : "Contact Agent"}
      </button>
      <p className="text-xs text-gray-500 mt-2">
        By proceeding, you consent to receive calls and texts at the number you
        provided from Ricamado and others about your inquiry, but not as a
        condition of any purchase.
      </p>
    </form>
  );
};

export default ContactAgentForm;
