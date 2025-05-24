// src/components/properties/ContactAgentModal.tsx
"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
// import { Property } from "@/types";
// Import toast from sonner
import { toast } from "sonner";

interface ContactAgentModalProps {
  children: React.ReactNode;
  propertyTitle?: string;
  propertyImage?: string;
}

const ContactAgentModal = ({
  children,
  propertyTitle,
  propertyImage,
}: ContactAgentModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen && propertyTitle) {
      setFormData((prev) => ({
        ...prev,
        message: `I'm interested in ${propertyTitle}. My requirements include:`,
      }));
    }
  }, [isOpen, propertyTitle]);

  // Auto-clear errors after 5 seconds
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({});
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const validateField = (name: string, value: string) => {
    if (!value.trim())
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Please enter a valid email address";
    }
    if (
      name === "phone" &&
      !/^\+?[0-9\s\-()]{10,15}$/.test(value.replace(/\s+/g, ""))
    ) {
      return "Please enter a valid phone number";
    }
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    Object.entries(formData).forEach(([field, value]) => {
      if (field !== "message") {
        const error = validateField(field, value);
        if (error) newErrors[field] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mblglrkq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsOpen(false);
        setFormData({ fullName: "", email: "", phone: "", message: "" });

        toast.success("Inquiry Sent! We'll contact you soon.", {
          position: "top-right",
          duration: 5000,
        });
      } else {
        // Add error toast
        toast.error("Something went wrong. Please try again.", {
          position: "top-right",
          duration: 4000,
        });
      }
    } catch  {
      // Add error toast for network issues
      toast.error("Network error. Please check your connection.", {
        position: "top-right",
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>

      {isOpen && (
        <div
          // Add backdrop-blur-sm for background blur effect
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <div
            className="bg-white rounded-lg p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Contact Agent</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            {propertyImage && (
              <div className="mb-4 relative h-40 rounded-lg overflow-hidden">
                <img
                  src={propertyImage}
                  alt={propertyTitle || "Property"}
                  className="w-full h-full object-cover"
                />
                {propertyTitle && (
                  <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                    New
                  </span>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-start text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  // Improve text visibility with dark text color
                  className={`w-full p-2 border rounded-md text-gray-900 ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-start text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  // Improve text visibility with dark text color
                  className={`w-full p-2 border rounded-md text-gray-900 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-start font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  // Improve text visibility with dark text color
                  className={`w-full p-2 border rounded-md text-gray-900 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-start font-medium text-gray-700 mb-1">
                  How can an agent help?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  // Improve text visibility with dark text color
                  className="w-full p-2 border border-gray-300 rounded-md text-gray-900"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>

              <p className="text-xs text-gray-500 mt-2">
                By proceeding, you consent to receive calls and texts at the
                number you provided from Ricamado and others about your inquiry,
                but not as a condition of any purchase.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactAgentModal;
