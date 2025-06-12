// src/components/properties/ContactAgentForm.tsx
"use client";

import { PropertyTag } from "@/types";
import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
interface ContactAgentFormProps {
  propertyTitle: string;
  propertyTags: PropertyTag[];
}

const ContactAgentForm = ({
  propertyTitle,
  propertyTags,
}: ContactAgentFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `I am interested in "${propertyTitle}".`,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  void isSubmitted; // Temporary to avoid linting error

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
          message: `I am interested in "${propertyTitle}".`,
        });

        toast.success("Inquiry sent! An agent will contact you soon.", {
          position: "top-right",
          duration: 5000,
        });
      } else {
        toast.error("Something went wrong. Please try again.", {
          position: "top-right",
          duration: 5000,
        });
      }
    } catch {
      toast.error(
        "Failed to send inquiry. Please check your internet connection and try again.",
        {
          position: "top-right",
          duration: 5000,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // if property is sold...
  const isSold =
    propertyTags.includes("Sold") || propertyTags.includes("Rented");
  if (isSold) {
    return (
      <div className="space-y-4 text-center">
        {/* <div className="bg-red-50 border border-red-200 rounded-lg p-4"> */}
        <div className="bg-transparent border border-gray-200 rounded-lg p-4">
          {/* <h3 className="font-semibold text-red-800 mb-2"> */}
          <h3 className="font-semibold text-gray-700 mb-2">
            {propertyTags.includes("Sold")
              ? "Property Sold "
              : propertyTags.includes("Rented")
              ? "Property Rented"
              : ""}
          </h3>
          <p className="text-gray-400 text-sm">
            {propertyTags.includes("Sold")
              ? "This property has been sold and is no longer available."
              : propertyTags.includes("Rented")
              ? "This property has been rented out and is no longer available."
              : ""}
          </p>
        </div>
        {/* <button
          type="button"
          disabled
          className="w-full py-2 bg-gray-400 text-gray-50 rounded cursor-not-allowed opacity-60"
        >
          Property No Longer Available
        </button> */}
        {/* Optional: Add link to similar properties */}
        <p className="text-sm text-gray-500">
          <Link
            href={"/properties"}
            className="text-blue-600 hover:text-blue-500"
          >
            View similar available properties
          </Link>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Name *</label>
        <input
          type="text"
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 outline-none box-shadow-sm"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email *</label>
        <input
          type="email"
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 outline-none box-shadow-sm"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Phone *</label>
        <input
          type="tel"
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 outline-none box-shadow-sm"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          How can an agent help?
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 outline-none box-shadow-sm"
          rows={3}
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>
      <p className="text-xs text-gray-500 mt-2">
        By proceeding, you consent to receive calls and texts at the number you
        provided from Ricamado and others about your inquiry, but not as a
        condition of any purchase.
      </p>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400"
      >
        {isSubmitting ? "Sending..." : "Contact Agent"}
      </button>
    </form>
  );
};

export default ContactAgentForm;
